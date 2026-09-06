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
      <div className="hidden min-h-svh w-full grid-cols-[minmax(320px,380px)_minmax(0,1fr)] lg:grid xl:grid-cols-[minmax(320px,560px)_minmax(0,1fr)]">
        {showBrandPanel ? (
          <AuthBrandPanel
            description={brandDescription}
            title={brandTitle}
          />
        ) : null}
        <div
          className={[
            "flex min-w-0 items-center justify-center px-xl py-4xl xl:px-5xl",
            showBrandPanel ? "" : "col-span-2",
          ].join(" ")}
        >
          <div className="w-full max-w-[720px]">{children}</div>
        </div>
      </div>

      <div className="min-h-svh lg:hidden">
        <header className="flex min-h-[104px] items-center justify-center bg-surface-inverse px-lg py-xl">
          <Link
            aria-label="San Martín Finanzas, inicio"
            className="rounded-sm focus-visible:outline-none focus-visible:shadow-focus"
            href="/"
          >
            <Image
              alt="San Martín Finanzas"
              className="h-auto w-[144px]"
              height={48}
              priority
              src="/brand/logos/logo-horizontal-negative.png"
              width={144}
            />
          </Link>
        </header>
        <div className="flex min-h-[calc(100svh-104px)] items-start justify-center px-lg py-xl sm:px-xl">
          <div className="w-full max-w-[480px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
