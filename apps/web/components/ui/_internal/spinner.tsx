import { cn } from "./class-names";

interface SpinnerProps {
  className?: string;
  size?: "M" | "L";
}

export function Spinner({ className, size = "M" }: SpinnerProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-current border-r-transparent",
        size === "L" ? "size-[var(--smf-radius-xl)]" : "size-md",
        className,
      )}
    />
  );
}
