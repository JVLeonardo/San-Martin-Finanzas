"use client";

import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "./_internal/class-names";
import {
  FieldShell,
  fieldControlBase,
  getFieldMessageId,
  getFieldToneClass,
} from "./_internal/field-shell";
import type { FieldStatus } from "./input";

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "size" | "type"> {
  helperText?: ReactNode;
  id: string;
  label: ReactNode;
  status?: Exclude<FieldStatus, "success">;
  visibilityIcon?: ReactNode;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    {
      className,
      disabled = false,
      helperText,
      id,
      label,
      required = false,
      status = "default",
      visibilityIcon,
      ...props
    },
    ref,
  ) {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <FieldShell
        disabled={disabled}
        helperText={helperText}
        id={id}
        label={label}
        required={required}
        tone={status}
      >
        <span className="relative block">
          <input
            {...props}
            aria-describedby={getFieldMessageId(id, Boolean(helperText))}
            aria-invalid={status === "error" || undefined}
            className={cn(
              fieldControlBase,
              getFieldToneClass(status),
              "pr-4xl",
              className,
            )}
            disabled={disabled}
            id={id}
            ref={ref}
            required={required}
            type={isVisible ? "text" : "password"}
          />
          <button
            aria-label={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
            className="absolute inset-y-0 right-sm my-auto inline-flex h-fit items-center justify-center rounded-sm text-label-sm font-semibold text-foreground-muted hover:text-foreground focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed"
            disabled={disabled}
            onClick={() => setIsVisible((current) => !current)}
            type="button"
          >
            {visibilityIcon ?? (isVisible ? "Ocultar" : "Mostrar")}
          </button>
        </span>
      </FieldShell>
    );
  },
);
