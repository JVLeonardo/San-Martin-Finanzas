"use client";

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export type AlertTone = "info" | "success" | "warning" | "error" | "neutral";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  actionLabel?: string;
  icon?: ReactNode;
  message: ReactNode;
  onAction?: () => void;
  onDismiss?: () => void;
  title?: ReactNode;
  tone?: AlertTone;
}

const toneClasses: Record<AlertTone, string> = {
  info: "border-l-[3px] border-info",
  success: "border-l-[3px] border-success",
  warning: "border-l-[3px] border-warning",
  error: "border-l-[3px] border-error",
  neutral: "border border-outline",
};

export function Alert({
  actionLabel,
  className,
  icon,
  message,
  onAction,
  onDismiss,
  title,
  tone = "info",
  ...props
}: AlertProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full items-start gap-sm rounded-sm bg-surface-muted p-md text-body-sm",
        toneClasses[tone],
        className,
      )}
      role={tone === "error" ? "alert" : "status"}
    >
      {icon ? (
        <span aria-hidden="true" className="mt-2xs shrink-0">
          {icon}
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        {title ? <p className="font-semibold text-foreground">{title}</p> : null}
        <div className={cn("text-foreground-muted", Boolean(title) && "mt-2xs")}>
          {message}
        </div>
        {actionLabel && onAction ? (
          <button
            className="mt-2xs rounded-sm font-semibold text-brand-strong hover:underline focus-visible:outline-none focus-visible:shadow-focus"
            onClick={onAction}
            type="button"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
      {onDismiss ? (
        <button
          aria-label="Cerrar mensaje"
          className="shrink-0 rounded-sm px-2xs font-semibold text-foreground-muted hover:text-foreground focus-visible:outline-none focus-visible:shadow-focus"
          onClick={onDismiss}
          type="button"
        >
          ×
        </button>
      ) : null}
    </div>
  );
}
