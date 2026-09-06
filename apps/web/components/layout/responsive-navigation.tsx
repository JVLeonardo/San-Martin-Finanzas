import { MobileNav, type MobileNavProps } from "./mobile-nav";
import { Navbar, type NavbarProps } from "./navbar";

export interface ResponsiveNavigationProps
  extends Omit<NavbarProps, "className" | "scrolled"> {
  className?: string;
  mobileDefaultOpen?: MobileNavProps["defaultOpen"];
  scrolled?: boolean;
}

export function ResponsiveNavigation({
  className,
  items,
  mobileDefaultOpen,
  primaryAction,
  scrolled,
  secondaryAction,
  theme,
}: ResponsiveNavigationProps) {
  return (
    <div className={className}>
      <div className="hidden lg:block">
        <Navbar
          items={items}
          primaryAction={primaryAction}
          scrolled={scrolled}
          secondaryAction={secondaryAction}
          theme={theme}
        />
      </div>
      <div className="lg:hidden">
        <MobileNav
          defaultOpen={mobileDefaultOpen}
          items={items}
          primaryAction={primaryAction}
          theme={theme}
        />
      </div>
    </div>
  );
}
