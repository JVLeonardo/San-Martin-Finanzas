import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export interface TrustItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  description: ReactNode;
  icon: ReactNode;
  layout?: "vertical" | "horizontal";
  title: ReactNode;
}

export function TrustItem({
  className,
  description,
  icon,
  layout = "vertical",
  title,
  ...props
}: TrustItemProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex min-w-0 gap-sm",
        layout === "vertical"
          ? "flex-col items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex size-xl shrink-0 items-center justify-center text-brand-strong"
      >
        {icon}
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
