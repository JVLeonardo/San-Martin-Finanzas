"use client";

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export type ToastTone = "info" | "success" | "warning" | "error";

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  actionLabel?: string;
  icon?: ReactNode;
  message?: ReactNode;
  onAction?: () => void;
  onDismiss?: () => void;
  title: ReactNode;
  tone?: ToastTone;
}

const toneClasses: Record<ToastTone, string> = {
  info: "border-info",
  success: "border-success",
  warning: "border-warning",
  error: "border-error",
};

const actionToneClasses: Record<ToastTone, string> = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

export function Toast({
  actionLabel,
  className,
  icon,
  message,
  onAction,
  onDismiss,
  title,
  tone = "info",
  ...props
}: ToastProps) {
  return (
    <div
      {...props}
      aria-atomic="true"
      className={cn(
        "flex w-full max-w-[400px] items-start gap-sm rounded-md border-l-[3px] bg-surface-inverse p-md text-body-sm text-foreground-inverse shadow-card",
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
        <p className="font-semibold">{title}</p>
        {message ? <div className="mt-2xs opacity-75">{message}</div> : null}
        {actionLabel && onAction ? (
          <button
            className={cn(
              "mt-2xs rounded-sm font-semibold focus-visible:outline-none focus-visible:shadow-focus",
              actionToneClasses[tone],
            )}
            onClick={onAction}
            type="button"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
      {onDismiss ? (
        <button
          aria-label="Cerrar notificación"
          className="shrink-0 rounded-sm px-2xs font-semibold hover:bg-white/10 focus-visible:outline-none focus-visible:shadow-focus"
          onClick={onDismiss}
          type="button"
        >
          ×
        </button>
      ) : null}
    </div>
  );
}
