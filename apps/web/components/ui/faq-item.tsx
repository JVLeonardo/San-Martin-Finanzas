import type { DetailsHTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export interface FAQItemProps
  extends Omit<DetailsHTMLAttributes<HTMLDetailsElement>, "children"> {
  answer: ReactNode;
  question: ReactNode;
}

export function FAQItem({
  answer,
  className,
  question,
  ...props
}: FAQItemProps) {
  return (
    <details
      {...props}
      className={cn("group w-full border-b border-outline", className)}
    >
      <summary className="cursor-pointer py-md text-label-md font-semibold text-foreground marker:text-brand-strong hover:text-brand-strong focus-visible:outline-none focus-visible:shadow-focus">
        {question}
      </summary>
      <div className="pb-md text-body-md text-foreground-muted">{answer}</div>
    </details>
  );
}
