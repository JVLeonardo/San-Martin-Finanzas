import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { AuthBrandPanel, type AuthBrandPanelProps } from "./auth-brand-panel";

export interface AuthShellProps {
  brandDescription?: AuthBrandPanelProps["description"];
  brandTitle?: AuthBrandPanelProps["title"];
  children: ReactNode;
  className?: string;
  showBrandPanel?: boolean;
}

export function AuthShell({
  brandDescription,
  brandTitle,
  children,
  className,
  showBrandPanel = true,
}: AuthShellProps) {
  return (
    <div
      className={[
        "min-h-svh w-full bg-background",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto hidden min-h-svh w-full max-w-[1200px] grid-cols-[minmax(320px,560px)_minmax(0,1fr)] lg:grid">
        {showBrandPanel ? (
          <AuthBrandPanel
            description={brandDescription}
            title={brandTitle}
          />
        ) : null}
        <div
          className={[
            "flex min-w-0 items-center justify-center px-3xl py-4xl",
            showBrandPanel ? "" : "col-span-2",
          ].join(" ")}
        >
          <div className="w-full max-w-[480px]">{children}</div>
        </div>
      </div>

      <div className="min-h-svh lg:hidden">
        <header className="flex min-h-4xl items-center bg-surface-inverse px-md py-sm sm:px-lg">
          <Link
            aria-label="San Martín Finanzas, inicio"
            className="rounded-sm focus-visible:outline-none focus-visible:shadow-focus"
            href="/"
          >
            <Image
              alt="San Martín Finanzas"
              className="h-auto w-[120px]"
              height={40}
              priority
              src="/brand/logos/logo-horizontal-negative.png"
              width={120}
            />
          </Link>
        </header>
        <div className="flex min-h-[calc(100svh-64px)] items-center justify-center px-md py-3xl sm:px-lg">
          <div className="w-full max-w-[480px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
