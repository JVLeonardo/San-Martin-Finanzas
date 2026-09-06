"use client";

import {
  useRef,
  type ClipboardEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import { cn } from "./_internal/class-names";

export interface OTPInputProps {
  autoComplete?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: ReactNode;
  label: ReactNode;
  length?: number;
  name: string;
  onChange: (value: string) => void;
  value: string;
}

export function OTPInput({
  autoComplete = "one-time-code",
  className,
  disabled = false,
  error = false,
  helperText,
  label,
  length = 6,
  name,
  onChange,
  value,
}: OTPInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const cells = Array.from({ length }, (_, index) => value[index] ?? "");
  const labelId = `${name}-label`;
  const messageId = helperText ? `${name}-message` : undefined;

  function updateCell(index: number, nextCell: string) {
    const digit = nextCell.replace(/\D/g, "").slice(-1);
    const nextValue = [...cells];
    nextValue[index] = digit;
    onChange(nextValue.join(""));

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !cells[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < length - 1) {
      event.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(event: ClipboardEvent<HTMLDivElement>) {
    const pastedValue = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pastedValue) return;

    event.preventDefault();
    onChange(pastedValue);
    inputRefs.current[Math.min(pastedValue.length, length) - 1]?.focus();
  }

  return (
    <fieldset
      aria-describedby={messageId}
      aria-invalid={error || undefined}
      aria-labelledby={labelId}
      className={cn("flex min-w-0 flex-col gap-2xs", className)}
      disabled={disabled}
    >
      <legend className="text-label-md font-semibold text-foreground" id={labelId}>
        {label}
      </legend>
      <div className="flex min-w-0 gap-xs" onPaste={handlePaste}>
        {cells.map((cell, index) => (
          <input
            aria-label={`Dígito ${index + 1} de ${length}`}
            autoComplete={index === 0 ? autoComplete : "off"}
            className={cn(
              "min-w-0 max-w-2xl flex-1 rounded-sm border bg-surface px-2xs py-xs text-center text-heading-4 font-semibold text-foreground transition-colors focus:border-border-focus focus:outline-none focus:shadow-focus disabled:cursor-not-allowed disabled:border-outline disabled:bg-surface-muted disabled:text-foreground-muted",
              error ? "border-error focus:border-error" : "border-outline",
            )}
            disabled={disabled}
            inputMode="numeric"
            key={index}
            maxLength={1}
            name={`${name}-${index + 1}`}
            onChange={(event) => updateCell(index, event.target.value)}
            onFocus={(event) => event.currentTarget.select()}
            onKeyDown={(event) => handleKeyDown(index, event)}
            pattern="[0-9]*"
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            type="text"
            value={cell}
          />
        ))}
      </div>
      {helperText ? (
        <p
          className={cn(
            "text-body-sm",
            error ? "text-error" : "text-foreground-muted",
          )}
          id={messageId}
          role={error ? "alert" : undefined}
        >
          {helperText}
        </p>
      ) : null}
    </fieldset>
  );
}
