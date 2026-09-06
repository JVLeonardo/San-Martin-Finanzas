import { SegmentedControl } from "@/components/ui";

import type { TermOption } from "../model/simulation";

export interface TermSelectorProps {
  disabled?: boolean;
  name: string;
  onValueChange: (value: string) => void;
  options: readonly TermOption[];
  value: string;
}

export function TermSelector({
  disabled,
  name,
  onValueChange,
  options,
  value,
}: TermSelectorProps) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-xs">
      <span className="text-label-md font-semibold text-foreground">Plazo</span>
      <SegmentedControl
        className="flex w-full min-w-0 [&>label]:min-w-0 [&>label]:flex-1 [&>label]:px-xs sm:[&>label]:px-md"
        disabled={disabled}
        label="Seleccionar plazo referencial"
        name={name}
        onValueChange={onValueChange}
        options={options}
        value={value}
      />
    </div>
  );
}
