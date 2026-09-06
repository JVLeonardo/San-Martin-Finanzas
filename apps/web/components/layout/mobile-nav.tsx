"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { TextLink } from "@/components/ui";

import type {
  NavigationAction,
  NavigationItem,
} from "./navigation-model";
import {
  defaultNavigationItems,
  defaultPrimaryAction,
} from "./navigation-model";

export interface MobileNavProps {
  className?: string;
  defaultOpen?: boolean;
  items?: readonly NavigationItem[];
  primaryAction?: NavigationAction | null;
  theme?: "light" | "dark";
}

export function MobileNav({
  className,
  defaultOpen = false,
  items = defaultNavigationItems,
  primaryAction = defaultPrimaryAction,
  theme = "light",
}: MobileNavProps) {
  const [open, setOpen] = useState(defaultOpen);
  const menuId = useId();
  const dark = theme === "dark";

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const surfaceClasses = dark
    ? "bg-surface-inverse text-foreground-inverse"
    : "bg-background text-foreground";

  return (
    <header className={["w-full", surfaceClasses, className].filter(Boolean).join(" ")}>
      <nav aria-label="Navegación principal móvil">
        <div className="flex min-h-4xl items-center gap-sm border-b border-outline px-md py-sm">
          <button
            aria-controls={menuId}
            aria-expanded={open}
            className="shrink-0 rounded-sm px-xs py-2xs text-label-md font-semibold hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:shadow-focus"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
          <Link
            aria-label="San Martín Finanzas, inicio"
            className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:shadow-focus"
            href="/"
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-[23px] w-xl object-contain"
              height={23}
              priority
              src="/brand/symbols/isotype.png"
              width={32}
            />
          </Link>
          {!open && primaryAction ? (
            <Link
              aria-label={primaryAction.ariaLabel}
              className="ml-auto inline-flex items-center justify-center rounded-sm bg-action-primary px-md py-xs text-button font-semibold text-foreground-inverse hover:bg-action-primary-hover focus-visible:outline-none focus-visible:shadow-focus"
              href={primaryAction.href}
            >
              {primaryAction.label}
            </Link>
          ) : (
            <span className="ml-auto" />
          )}
        </div>

        {open ? (
          <div className="border-b border-outline px-md py-lg" id={menuId}>
            <ul className="flex flex-col gap-lg">
              {items.map((item) => (
                <li key={`${item.label}-${String(item.href)}`}>
                  <TextLink
                    className="flex w-full"
                    href={item.href}
                    onClick={() => setOpen(false)}
                    tone={dark ? "inverse" : "default"}
                  >
                    {item.label}
                  </TextLink>
                </li>
              ))}
            </ul>
            {primaryAction ? (
              <Link
                aria-label={primaryAction.ariaLabel}
                className="mt-lg flex w-full items-center justify-center rounded-sm bg-action-primary px-md py-sm text-button font-semibold text-foreground-inverse hover:bg-action-primary-hover focus-visible:outline-none focus-visible:shadow-focus"
                href={primaryAction.href}
                onClick={() => setOpen(false)}
              >
                {primaryAction.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
