import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export type TextLinkProps = LinkProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "children" | "className" | "href"
  > & {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  emphasis?: "primary" | "secondary";
  leadingIcon?: ReactNode;
  size?: "M" | "S";
  trailingIcon?: ReactNode;
};

export function TextLink({
  children,
  className,
  disabled = false,
  emphasis = "primary",
  leadingIcon,
  size = "M",
  trailingIcon,
  ...props
}: TextLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-2xs rounded-sm p-[2px] font-semibold transition-colors focus-visible:outline-none focus-visible:shadow-focus",
    size === "S" ? "text-label-sm" : "text-label-md",
    emphasis === "primary"
      ? "text-brand-strong hover:bg-surface-muted"
      : "text-foreground-muted hover:bg-surface-muted hover:text-foreground",
    disabled && "cursor-not-allowed text-foreground-muted",
    className,
  );

  const content = (
    <>
      {leadingIcon ? <span aria-hidden="true">{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span aria-hidden="true">{trailingIcon}</span> : null}
    </>
  );

  if (disabled) {
    return (
      <span aria-disabled="true" className={classes}>
        {content}
      </span>
    );
  }

  return (
    <Link {...props} className={classes}>
      {content}
    </Link>
  );
}
