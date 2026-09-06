import type { CSSProperties, InputHTMLAttributes } from "react";

import type { AmountRange } from "../model/simulation";
import { formatReferenceAmount } from "../model/simulation";
import styles from "./amount-slider.module.css";

interface SliderStyle extends CSSProperties {
  "--range-progress": string;
}

export interface AmountSliderProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "max" | "min" | "onChange" | "step" | "type" | "value"
  > {
  ariaValueText?: string;
  onAmountChange: (amount: number) => void;
  range: AmountRange;
  value: number;
}

export function AmountSlider({
  ariaValueText,
  className,
  disabled,
  onAmountChange,
  range,
  value,
  ...props
}: AmountSliderProps) {
  const progress = ((value - range.min) / (range.max - range.min)) * 100;
  const style: SliderStyle = {
    "--range-progress": `${Math.min(100, Math.max(0, progress))}%`,
  };

  return (
    <div className={`flex w-full min-w-0 flex-col gap-xs ${className ?? ""}`}>
      <input
        {...props}
        aria-label="Seleccionar monto referencial"
        aria-valuetext={ariaValueText ?? formatReferenceAmount(value)}
        className={styles.range}
        disabled={disabled}
        max={range.max}
        min={range.min}
        onChange={(event) => onAmountChange(event.currentTarget.valueAsNumber)}
        step={range.step}
        style={style}
        type="range"
        value={value}
      />
      <div
        aria-hidden="true"
        className="flex w-full justify-between text-caption text-foreground-muted"
      >
        <span>Mín.</span>
        <span>Máx.</span>
      </div>
    </div>
  );
}
