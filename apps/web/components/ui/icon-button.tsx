import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "./_internal/class-names";
import type { ButtonSize, ButtonVariant } from "./button";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label" | "children"> {
  icon: ReactNode;
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-action-primary text-foreground-inverse hover:bg-action-primary-hover active:bg-action-primary",
  secondary:
    "border-outline bg-transparent text-brand-strong hover:border-outline-strong hover:bg-action-secondary active:border-border-focus",
  tertiary:
    "border-transparent bg-transparent text-brand-strong hover:bg-surface-muted active:bg-surface-muted",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      className,
      disabled = false,
      icon,
      label,
      size = "M",
      type = "button",
      variant = "primary",
      ...props
    },
    ref,
  ) {
    return (
      <button
        {...props}
        aria-label={label}
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-sm border transition-colors focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:border-transparent disabled:bg-surface-muted disabled:text-foreground-muted disabled:shadow-none",
          size === "L" ? "size-3xl" : "size-2xl",
          variantClasses[variant],
          className,
        )}
        disabled={disabled}
        ref={ref}
        type={type}
      >
        <span
          aria-hidden="true"
          className={cn(
            "flex items-center justify-center",
            size === "L" ? "size-lg" : "size-[var(--smf-radius-xl)]",
          )}
        >
          {icon}
        </span>
      </button>
    );
  },
);
