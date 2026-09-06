"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "./_internal/class-names";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  indeterminate?: boolean;
  label: ReactNode;
  supportingText?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      className,
      disabled = false,
      indeterminate = false,
      label,
      supportingText,
      ...props
    },
    forwardedRef,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(forwardedRef, () => inputRef.current as HTMLInputElement);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <label
        className={cn(
          "inline-flex items-start gap-xs text-body-md",
          disabled
            ? "cursor-not-allowed text-foreground-muted"
            : "cursor-pointer text-foreground",
          className,
        )}
      >
        <input
          {...props}
          className="mt-2xs size-md shrink-0 cursor-pointer accent-action-primary focus-visible:outline-none focus-visible:shadow-focus disabled:cursor-not-allowed"
          disabled={disabled}
          ref={inputRef}
          type="checkbox"
        />
        <span className="flex flex-col gap-2xs">
          <span>{label}</span>
          {supportingText ? (
            <span className="text-body-sm text-foreground-muted">
              {supportingText}
            </span>
          ) : null}
        </span>
      </label>
    );
  },
);
