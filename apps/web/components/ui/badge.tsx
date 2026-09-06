import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export type BadgeTone = "neutral" | "info" | "success" | "warning" | "error" | "brand";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: ReactNode;
  size?: "S" | "M";
  tone?: BadgeTone;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-surface-muted text-foreground",
  info: "bg-info text-foreground-inverse",
  success: "bg-success text-foreground-inverse",
  warning: "bg-warning text-foreground",
  error: "bg-error text-foreground-inverse",
  brand: "bg-action-primary text-foreground-inverse",
};

export function Badge({
  children,
  className,
  icon,
  size = "M",
  tone = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2xs rounded-sm font-semibold",
        size === "S" ? "px-xs py-[2px] text-label-sm" : "px-sm py-2xs text-label-md",
        toneClasses[tone],
        className,
      )}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </span>
  );
}
