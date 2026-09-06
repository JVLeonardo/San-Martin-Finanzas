import type { HTMLAttributes, ReactNode } from "react";

export interface BreakdownRowProps extends HTMLAttributes<HTMLDivElement> {
  emphasis?: "default" | "strong";
  label: ReactNode;
  value: ReactNode;
}

export function BreakdownRow({
  className,
  emphasis = "default",
  label,
  value,
  ...props
}: BreakdownRowProps) {
  return (
    <div
      {...props}
      className={`flex w-full min-w-0 items-start justify-between gap-md ${
        emphasis === "strong"
          ? "border-t border-outline pb-[10px] pt-sm text-[15px] leading-5 font-semibold text-foreground"
          : "py-[10px] text-body-sm text-foreground-muted"
      } ${className ?? ""}`}
    >
      <span className="min-w-0">{label}</span>
      <span
        className={`shrink-0 text-right text-foreground ${
          emphasis === "strong" ? "font-semibold" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
