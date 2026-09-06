import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "./_internal/class-names";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { className, disabled = false, label, ...props },
  ref,
) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-xs text-body-md",
        disabled
          ? "cursor-not-allowed text-foreground-muted"
          : "cursor-pointer text-foreground",
        className,
      )}
    >
      <input
        {...props}
        className="size-[var(--smf-radius-xl)] shrink-0 cursor-pointer accent-action-primary focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed"
        disabled={disabled}
        ref={ref}
        type="radio"
      />
      <span>{label}</span>
    </label>
  );
});
