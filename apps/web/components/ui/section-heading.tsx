import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export interface SectionHeadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  alignment?: "left" | "center";
  description?: ReactNode;
  eyebrow?: ReactNode;
  headingLevel?: 2 | 3;
  size?: "M" | "L";
  title: ReactNode;
}

export function SectionHeading({
  alignment = "left",
  className,
  description,
  eyebrow,
  headingLevel = 2,
  size = "L",
  title,
  ...props
}: SectionHeadingProps) {
  const HeadingTag = headingLevel === 2 ? "h2" : "h3";

  return (
    <div
      {...props}
      className={cn(
        "flex max-w-[560px] flex-col gap-xs",
        alignment === "center" ? "mx-auto items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-label-sm font-semibold uppercase tracking-wide text-brand-strong">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={cn(
          "font-semibold text-foreground text-balance",
          size === "L"
            ? "font-display text-heading-2"
            : "font-sans text-heading-3",
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <div className="text-body-md text-foreground-muted">{description}</div>
      ) : null}
    </div>
  );
}
