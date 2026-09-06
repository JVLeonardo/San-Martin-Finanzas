import Image from "next/image";
import Link from "next/link";

import { TextLink } from "@/components/ui";

import type { NavigationItem } from "./navigation-model";
import { defaultNavigationItems } from "./navigation-model";

export interface FooterLinkGroup {
  items: readonly NavigationItem[];
  title: string;
}

export interface FooterProps {
  className?: string;
  copyright?: string;
  description?: string;
  groups?: readonly FooterLinkGroup[];
  showDescription?: boolean;
  showLegalRow?: boolean;
  theme?: "light" | "dark";
}

const defaultLegalItems: readonly NavigationItem[] = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
];

const defaultGroups: readonly FooterLinkGroup[] = [
  { title: "Navegación", items: defaultNavigationItems },
  { title: "Legal", items: defaultLegalItems },
];

export function Footer({
  className,
  copyright = "San Martín Finanzas",
  description = "Una experiencia financiera pensada desde San Martín.",
  groups = defaultGroups,
  showDescription = true,
  showLegalRow = true,
  theme = "light",
}: FooterProps) {
  const dark = theme === "dark";

  return (
    <footer
      className={[
        dark ? "bg-surface-inverse text-foreground-inverse" : "bg-surface-muted text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-[1200px] px-md py-3xl sm:px-xl lg:px-4xl lg:py-4xl">
        <div className="grid min-w-0 gap-xl sm:grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)] lg:gap-4xl">
          <div className="min-w-0">
            <Link
              aria-label="San Martín Finanzas, inicio"
              className="inline-block rounded-sm focus-visible:outline-none focus-visible:shadow-focus"
              href="/"
            >
              <Image
                alt="San Martín Finanzas"
                className="h-auto w-[120px]"
                height={40}
                src={
                  dark
                    ? "/brand/logos/logo-horizontal-negative.png"
                    : "/brand/logos/logo-horizontal-positive.png"
                }
                width={120}
              />
            </Link>
            {showDescription ? (
              <p
                className={[
                  "mt-md max-w-[280px] text-body-sm",
                  dark ? "text-foreground-inverse/75" : "text-foreground-muted",
                ].join(" ")}
              >
                {description}
              </p>
            ) : null}
          </div>

          <nav aria-label="Navegación del pie" className="grid min-w-0 gap-xl sm:grid-cols-2">
            {groups.map((group) => (
              <div className="min-w-0" key={group.title}>
                <h2 className="text-label-md font-semibold">{group.title}</h2>
                <ul className="mt-sm flex flex-col gap-sm">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.label}-${String(item.href)}`}>
                      <TextLink
                        emphasis="secondary"
                        href={item.href}
                        size="S"
                        tone={dark ? "inverse" : "default"}
                      >
                        {item.label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {showLegalRow ? (
          <div
            className={[
              "mt-4xl border-t pt-xl text-label-sm font-semibold",
              dark ? "border-white/50" : "border-outline",
            ].join(" ")}
          >
            {copyright}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
