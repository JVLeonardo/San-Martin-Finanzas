"use client";

import { useId, useState } from "react";

import { cn } from "./_internal/class-names";

export interface SegmentedControlOption {
  disabled?: boolean;
  label: string;
  value: string;
}

export interface SegmentedControlProps {
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  label: string;
  name: string;
  onValueChange?: (value: string) => void;
  options: readonly SegmentedControlOption[];
  size?: "M" | "L";
  value?: string;
}

export function SegmentedControl({
  className,
  defaultValue,
  disabled = false,
  label,
  name,
  onValueChange,
  options,
  size = "M",
  value,
}: SegmentedControlProps) {
  const legendId = useId();
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? options[0]?.value ?? "",
  );
  const selectedValue = value ?? internalValue;

  return (
    <fieldset
      aria-labelledby={legendId}
      className={cn(
        "inline-flex rounded-md border border-outline bg-surface p-2xs",
        disabled && "bg-surface-muted",
        className,
      )}
      disabled={disabled}
    >
      <legend className="sr-only" id={legendId}>
        {label}
      </legend>
      {options.map((option) => {
        const selected = selectedValue === option.value;
        const optionDisabled = disabled || option.disabled;

        return (
          <label
            className={cn(
              "inline-flex cursor-pointer items-center justify-center rounded-sm px-md text-button font-semibold transition-colors focus-within:shadow-focus",
              size === "L" ? "py-sm" : "py-xs",
              selected && !optionDisabled &&
                "bg-action-primary text-foreground-inverse",
              !selected && !optionDisabled &&
                "text-foreground hover:bg-surface-muted",
              selected && optionDisabled &&
                "cursor-not-allowed bg-border-strong text-foreground-inverse",
              !selected && optionDisabled &&
                "cursor-not-allowed text-foreground-muted",
            )}
            key={option.value}
          >
            <input
              checked={selected}
              className="sr-only"
              disabled={option.disabled}
              name={name}
              onChange={() => {
                setInternalValue(option.value);
                onValueChange?.(option.value);
              }}
              type="radio"
              value={option.value}
            />
            {option.label}
          </label>
        );
      })}
    </fieldset>
  );
}
