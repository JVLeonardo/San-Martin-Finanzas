import Image from "next/image";
import Link from "next/link";

import { TextLink } from "@/components/ui";

import type {
  NavigationAction,
  NavigationItem,
} from "./navigation-model";
import {
  defaultNavigationItems,
  defaultPrimaryAction,
  defaultSecondaryAction,
} from "./navigation-model";

export interface NavbarProps {
  className?: string;
  items?: readonly NavigationItem[];
  primaryAction?: NavigationAction | null;
  scrolled?: boolean;
  secondaryAction?: NavigationAction | null;
  theme?: "light" | "dark";
}

export function Navbar({
  className,
  items = defaultNavigationItems,
  primaryAction = defaultPrimaryAction,
  scrolled = false,
  secondaryAction = defaultSecondaryAction,
  theme = "light",
}: NavbarProps) {
  const dark = theme === "dark";

  return (
    <header
      className={[
        "w-full transition-shadow",
        dark ? "bg-surface-inverse text-foreground-inverse" : "bg-background",
        scrolled ? "shadow-subtle" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex min-h-[79px] w-full max-w-[1200px] items-center gap-xl px-xl py-md"
      >
        <Link
          aria-label="San Martín Finanzas, inicio"
          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:shadow-focus"
          href="/"
        >
          <Image
            alt="San Martín Finanzas"
            className="h-auto w-[140px]"
            height={47}
            priority
            src={
              dark
                ? "/brand/logos/logo-horizontal-negative.png"
                : "/brand/logos/logo-horizontal-positive.png"
            }
            width={140}
          />
        </Link>

        <ul className="ml-auto flex min-w-0 items-center gap-xl">
          {items.map((item) => (
            <li key={`${item.label}-${String(item.href)}`}>
              <TextLink
                href={item.href}
                tone={dark ? "inverse" : "default"}
              >
                {item.label}
              </TextLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-md">
          {secondaryAction ? (
            <TextLink
              aria-label={secondaryAction.ariaLabel}
              emphasis="secondary"
              href={secondaryAction.href}
              tone={dark ? "inverse" : "default"}
            >
              {secondaryAction.label}
            </TextLink>
          ) : null}
          {primaryAction ? (
            <Link
              aria-label={primaryAction.ariaLabel}
              className="inline-flex items-center justify-center rounded-sm bg-action-primary px-md py-xs text-button font-semibold text-foreground-inverse transition-colors hover:bg-action-primary-hover focus-visible:outline-none focus-visible:shadow-focus"
              href={primaryAction.href}
            >
              {primaryAction.label}
            </Link>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
