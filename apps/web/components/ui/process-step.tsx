import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export type ProcessStepState = "default" | "active" | "completed" | "disabled";

export interface ProcessStepProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  description: ReactNode;
  state?: ProcessStepState;
  stepNumber: ReactNode;
  title: ReactNode;
}

const numberClasses: Record<ProcessStepState, string> = {
  default: "bg-surface-muted text-foreground-muted",
  active: "bg-action-primary text-foreground-inverse",
  completed: "bg-success text-foreground-inverse",
  disabled: "bg-surface-muted text-foreground-muted",
};

export function ProcessStep({
  className,
  description,
  state = "default",
  stepNumber,
  title,
  ...props
}: ProcessStepProps) {
  return (
    <div
      {...props}
      aria-current={state === "active" ? "step" : undefined}
      aria-disabled={state === "disabled" || undefined}
      className={cn(
        "flex min-w-0 items-start gap-sm",
        state === "disabled" && "opacity-75",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-2xl shrink-0 items-center justify-center rounded-full text-label-md font-semibold",
          numberClasses[state],
        )}
      >
        {stepNumber}
      </span>
      <div className="min-w-0">
        <h3 className="text-label-md font-semibold text-foreground">{title}</h3>
        <div className="mt-2xs text-body-sm text-foreground-muted">
          {description}
        </div>
      </div>
    </div>
  );
}
