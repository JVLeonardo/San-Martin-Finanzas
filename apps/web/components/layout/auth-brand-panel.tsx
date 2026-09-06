import Image from "next/image";
import type { ReactNode } from "react";

export interface AuthBrandPanelProps {
  className?: string;
  description?: ReactNode;
  title?: ReactNode;
}

export function AuthBrandPanel({
  className,
  description = "Continúa paso a paso con una experiencia simple y ordenada.",
  title = "Tu información, en un proceso claro",
}: AuthBrandPanelProps) {
  return (
    <aside
      className={[
        "relative flex min-h-full min-w-0 items-center justify-center overflow-hidden bg-surface-inverse px-3xl py-4xl text-center text-foreground-inverse",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/brand/graphics/topography-dark.png')] bg-cover bg-center opacity-30 mix-blend-screen"
      />
      <div className="relative z-10 flex max-w-[420px] flex-col items-center">
        <Image
          alt="San Martín Finanzas"
          className="h-auto w-[160px]"
          height={53}
          priority
          src="/brand/logos/logo-horizontal-negative.png"
          width={160}
        />
        <h2 className="mt-xl text-heading-2 font-display font-semibold text-balance">
          {title}
        </h2>
        <p className="mt-xs max-w-[360px] text-body-md text-foreground-inverse/75">
          {description}
        </p>
      </div>
    </aside>
  );
}
