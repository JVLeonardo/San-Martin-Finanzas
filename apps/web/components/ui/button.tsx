import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "./_internal/class-names";
import { Spinner } from "./_internal/spinner";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "M" | "L";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leadingIcon?: ReactNode;
  loading?: boolean;
  size?: ButtonSize;
  trailingIcon?: ReactNode;
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled = false,
    leadingIcon,
    loading = false,
    size = "M",
    trailingIcon,
    type = "button",
    variant = "primary",
    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      aria-busy={loading || undefined}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center gap-xs rounded-sm border text-button font-semibold transition-colors focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed disabled:border-transparent disabled:bg-surface-muted disabled:text-foreground-muted disabled:shadow-none",
        size === "L" ? "px-lg py-sm" : "px-md py-xs",
        variantClasses[variant],
        className,
      )}
      disabled={isDisabled}
      ref={ref}
      type={type}
    >
      {loading ? (
        <>
          <Spinner className="absolute" size={size} />
          <span className="invisible">{children}</span>
          <span className="sr-only">Cargando</span>
        </>
      ) : (
        <>
          {leadingIcon ? <span aria-hidden="true">{leadingIcon}</span> : null}
          <span>{children}</span>
          {trailingIcon ? <span aria-hidden="true">{trailingIcon}</span> : null}
        </>
      )}
    </button>
  );
});
