import { forwardRef, type ReactNode, type SelectHTMLAttributes } from "react";

import { cn } from "./_internal/class-names";
import {
  FieldShell,
  fieldControlBase,
  getFieldMessageId,
  getFieldToneClass,
} from "./_internal/field-shell";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "id" | "size"> {
  children: ReactNode;
  helperText?: ReactNode;
  id: string;
  label: ReactNode;
  status?: "default" | "error";
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    children,
    className,
    disabled = false,
    helperText,
    id,
    label,
    required = false,
    status = "default",
    ...props
  },
  ref,
) {
  return (
    <FieldShell
      disabled={disabled}
      helperText={helperText}
      id={id}
      label={label}
      required={required}
      tone={status}
    >
      <select
        {...props}
        aria-describedby={getFieldMessageId(id, Boolean(helperText))}
        aria-invalid={status === "error" || undefined}
        className={cn(
          fieldControlBase,
          getFieldToneClass(status),
          "cursor-pointer disabled:cursor-not-allowed",
          className,
        )}
        disabled={disabled}
        id={id}
        ref={ref}
        required={required}
      >
        {children}
      </select>
    </FieldShell>
  );
});
