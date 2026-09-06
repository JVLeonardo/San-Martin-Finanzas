import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "./_internal/class-names";
import {
  FieldShell,
  fieldControlBase,
  getFieldMessageId,
  getFieldToneClass,
} from "./_internal/field-shell";

export type FieldStatus = "default" | "error" | "success";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "size"> {
  helperText?: ReactNode;
  id: string;
  label: ReactNode;
  status?: FieldStatus;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    disabled = false,
    helperText,
    id,
    label,
    required = false,
    status = "default",
    type = "text",
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
      <input
        {...props}
        aria-describedby={getFieldMessageId(id, Boolean(helperText))}
        aria-invalid={status === "error" || undefined}
        className={cn(fieldControlBase, getFieldToneClass(status), className)}
        disabled={disabled}
        id={id}
        ref={ref}
        required={required}
        type={type}
      />
    </FieldShell>
  );
});
