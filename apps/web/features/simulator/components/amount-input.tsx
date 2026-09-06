import type { InputHTMLAttributes } from "react";

import { Input } from "@/components/ui";

import { formatReferenceAmount, normalizeAmountInput } from "../model/simulation";

export interface AmountInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "id" | "inputMode" | "onChange" | "type" | "value"
  > {
  errorMessage?: string;
  helperText: string;
  id: string;
  onAmountChange: (amount: number | null) => void;
  value: number | null;
}

export function AmountInput({
  errorMessage,
  helperText,
  id,
  onAmountChange,
  value,
  ...props
}: AmountInputProps) {
  return (
    <Input
      {...props}
      autoComplete="off"
      helperText={errorMessage ?? helperText}
      id={id}
      inputMode="numeric"
      label="Monto"
      onChange={(event) => onAmountChange(normalizeAmountInput(event.target.value))}
      placeholder="S/ —"
      status={errorMessage ? "error" : "default"}
      type="text"
      value={value === null ? "" : formatReferenceAmount(value)}
    />
  );
}
