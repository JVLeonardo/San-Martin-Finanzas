import type { ReactNode } from "react";

import { cn } from "./class-names";

type FieldTone = "default" | "error" | "success";

interface FieldShellProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  helperText?: ReactNode;
  id: string;
  label: ReactNode;
  required?: boolean;
  tone?: FieldTone;
}

const helperTone: Record<FieldTone, string> = {
  default: "text-foreground-muted",
  error: "text-error",
  success: "text-success",
};

export function FieldShell({
  children,
  className,
  disabled = false,
  helperText,
  id,
  label,
  required = false,
  tone = "default",
}: FieldShellProps) {
  const helperId = helperText ? `${id}-message` : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-2xs", className)}>
      <label
        className={cn(
          "flex gap-2xs text-label-md font-semibold",
          disabled ? "text-foreground-muted" : "text-foreground",
        )}
        htmlFor={id}
      >
        <span>{label}</span>
        {required ? (
          <span aria-hidden="true" className="text-error">
            *
          </span>
        ) : null}
      </label>
      {children}
      {helperText ? (
        <p
          className={cn("text-body-sm", helperTone[tone])}
          id={helperId}
          role={tone === "error" ? "alert" : undefined}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export function getFieldMessageId(id: string, hasMessage: boolean) {
  return hasMessage ? `${id}-message` : undefined;
}

export const fieldControlBase =
  "w-full rounded-sm border bg-surface px-sm py-xs text-body-md text-foreground transition-colors placeholder:text-foreground-muted hover:border-outline-strong focus:border-border-focus focus:outline-none focus:shadow-focus disabled:cursor-not-allowed disabled:border-outline disabled:bg-surface-muted disabled:text-foreground-muted disabled:shadow-none";

export function getFieldToneClass(tone: FieldTone) {
  if (tone === "error") {
    return "border-error focus:border-error";
  }

  if (tone === "success") {
    return "border-success focus:border-success";
  }

  return "border-outline";
}
