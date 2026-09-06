import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./_internal/class-names";

export type FormMessageTone = "helper" | "error" | "success" | "warning";

export interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  icon?: ReactNode;
  tone?: FormMessageTone;
}

const toneClasses: Record<FormMessageTone, string> = {
  helper: "text-foreground-muted",
  error: "text-error",
  success: "text-success",
  warning: "text-warning",
};

export function FormMessage({
  children,
  className,
  icon,
  tone = "helper",
  ...props
}: FormMessageProps) {
  return (
    <p
      {...props}
      className={cn("flex items-start gap-2xs text-body-sm", toneClasses[tone], className)}
      role={tone === "error" ? "alert" : props.role}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </p>
  );
}
