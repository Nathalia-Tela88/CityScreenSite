"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";
import { company, ctaHref, useNavigation } from "@/lib/i18n/navigation";
import { LocaleSwitch, ThemeSwitch } from "@/components/site/controls";
import { ProductsMegaMenu } from "@/components/site/products-mega-menu";

/**
 * Two logo files rather than a CSS filter: inverting the wordmark for dark mode
 * would take the red target with it and turn it cyan. Both are rendered and CSS
 * picks one, so the swap costs nothing at switch time.
 */
function Wordmark({ homeAria }: { homeAria: string }) {
  return (
    <Link
      href="/"
      // Home is up the hierarchy from everywhere, so the wordmark always
      // reads as a return rather than a step forward.
      transitionTypes={["nav-back"]}
      className="flex shrink-0 items-center"
      aria-label={`${company.name}, ${homeAria}`}
    >
      <Image
        src="/brand/cityscreen-logo-dark.png"
        alt=""
        aria-hidden
        width={1810}
        height={312}
        priority
        className="hidden h-6 w-auto dark:block sm:h-7 md:h-8"
      />
      <Image
        src="/brand/cityscreen-logo-light.png"
        alt=""
        aria-hidden
        width={1810}
        height={312}
        priority
        className="block h-6 w-auto dark:hidden sm:h-7 md:h-8"
      />
    </Link>
  );
}

/**
 * The two boundaries the condensed header switches on.
 *
 * Deliberately far apart. A single threshold meant a few pixels of wheel or
 * trackpad wobble around that one point flipped the header between its two
 * heights over and over — a 16px jump each time, which is what reads as a
 * stutter. With the boundaries 48px apart no incidental movement can cross
 * both, so the header only changes on a scroll you meant to make.
 */
const CONDENSE_AT = 72;
const EXPAND_AT = 24;

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useT();
  const { mainNav, ctaLabel } = useNavigation();

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  // Collapse everything on navigation, otherwise the mobile panel stays open
  // on top of the page you just moved to. Adjusting during render rather than
  // in an effect avoids a second commit that would flash the open menu.
  const [lastPath, setLastPath] = React.useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  React.useEffect(() => {
    let frame = 0;

    // Batched into a frame. Scroll fires far more often than the page paints,
    // and every call re-entered this component — which rebuilds the whole nav
    // array and the service lookup map on each render. Returning `prev`
    // unchanged lets React bail out rather than commit a no-op.
    const read = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > EXPAND_AT : y > CONDENSE_AT));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Hover intent. The panel hangs below the trigger with a gap between them,
     and a pointer moving diagonally toward a far column crosses that gap —
     closing on the first `mouseleave` makes the menu impossible to reach. A
     short grace period lets the pointer arrive; entering either the trigger or
     the panel cancels it. */
  const closeTimer = React.useRef(0);
  React.useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const keepOpen = React.useCallback((href: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenDropdown(href);
  }, []);

  const scheduleClose = React.useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 180);
  }, []);

  const closeNow = React.useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setOpenDropdown(null);
  }, []);

  // Escape closes it from anywhere inside, which keyboard users expect and
  // which is the only way out if the pointer never enters the panel.
  React.useEffect(() => {
    if (!openDropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNow();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openDropdown, closeNow]);

  return (
    <header
      // Named for the View Transitions API so the header is lifted out of the
      // page slide and stays put. Without a fixed anchor the whole viewport
      // appears to move, which is what makes directional transitions feel
      // disorienting rather than purposeful.
      style={{ viewTransitionName: "site-header" }}
      // Transparent at rest; frosted glass once past 50px. The background is
      // the theme's own base colour at 75% rather than a hard-coded white, so
      // the effect works in both themes instead of only the light one.
      //
      // The bar sits above the hero in normal flow rather than over it, so
      // "transparent" here means the page surface — it always matches the
      // active theme and needs no special handling.
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-seam bg-obsidian/75 backdrop-blur-[15px] backdrop-saturate-150"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          // Spacing tightens between xl and 2xl. The nav appears at xl, and at
          // exactly 1280px the wordmark, six routes, both switches and the CTA
          // only just fit — at the larger nav size they did not, by 84px. The
          // gutters stay at px-6/px-10 so the header keeps aligning with the
          // page content; it is the gaps that give, and they open back up once
          // there is room for them.
          "flex items-center gap-3 px-6 transition-[height] duration-300 md:px-10 2xl:gap-6",
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20",
        )}
      >
        <Wordmark homeAria={t.nav.homeAria} />

        <nav className="ml-auto hidden items-center gap-3 xl:flex 2xl:gap-7">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                onMouseEnter={() => keepOpen(item.href)}
                onMouseLeave={scheduleClose}
                // `focus-within` is what opens it for a keyboard user: tabbing
                // onto the trigger reveals the panel, and tabbing off the last
                // link inside it closes it again, with no key bindings to learn.
                onFocus={() => keepOpen(item.href)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    closeNow();
                  }
                }}
              >
                <Link
                  href={item.href}
                  transitionTypes={["nav-forward"]}
                  aria-expanded={openDropdown === item.href}
                  id={`nav-${item.href.replace(/\W/g, "")}`}
                  className={cn(
                    "label-nav group flex items-center gap-1.5 whitespace-nowrap py-2 transition-colors",
                    isActive(item.href)
                      ? "text-filament"
                      : "text-graphite hover:text-filament",
                  )}
                >
                  {/* Wrapped so the rule measures the word and stops there,
                      rather than running on under the chevron. */}
                  <span className="rule-center">{item.label}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "text-[0.6rem] transition-transform duration-200",
                      openDropdown === item.href && "rotate-180",
                    )}
                  >
                    ▾
                  </span>
                </Link>
                {/* Full-bleed rather than anchored to the trigger: the panel
                    spans the page, so it hangs off the header itself. The
                    wrapper above is deliberately not `relative` — that would
                    make it the containing block and squeeze the panel down to
                    the width of the word "Products". */}
                <ProductsMegaMenu
                  open={openDropdown === item.href}
                  onKeepOpen={() => keepOpen(item.href)}
                  onRequestClose={closeNow}
                  labelledBy={`nav-${item.href.replace(/\W/g, "")}`}
                />
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                transitionTypes={["nav-forward"]}
                className={cn(
                  "label-nav group whitespace-nowrap py-2 transition-colors",
                  isActive(item.href)
                    ? "text-filament"
                    : "text-graphite hover:text-filament",
                )}
              >
                <span className="rule-center">{item.label}</span>
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 xl:ml-0 xl:gap-3">
          {/* Both switches move into the menu panel on phones — the logo plus
              four controls does not fit inside 390px. */}
          <LocaleSwitch className="hidden sm:flex" />
          <ThemeSwitch className="hidden sm:flex" />

          <Link
            href={ctaHref}
            transitionTypes={["nav-forward"]}
            // No `transition-colors` here: it emits its own `transition-property`
            // and would silently replace the one `press` sets, taking the
            // transform with it and leaving the button colour-only.
            className="label-nav press hidden whitespace-nowrap bg-signal px-3.5 py-3 text-obsidian hover:bg-filament xl:inline-block 2xl:px-5"
          >
            {ctaLabel}
          </Link>

          <button
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            className="press flex size-11 flex-col items-center justify-center gap-1.5 xl:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={cn(
                "h-px w-6 bg-filament transition-transform duration-200",
                menuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-filament transition-opacity duration-200",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-filament transition-transform duration-200",
                menuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-seam bg-obsidian px-6 pb-8 pt-2 xl:hidden">
          {mainNav.map((item) => (
            <div key={item.href} className="border-b border-seam">
              <Link
                href={item.href}
                transitionTypes={["nav-forward"]}
                className={cn(
                  "block py-4 font-display text-xl",
                  isActive(item.href) ? "text-filament" : "text-graphite",
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pb-3 pl-5">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      transitionTypes={["nav-forward"]}
                      className="block py-2 text-sm text-graphite"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 flex items-center gap-3 sm:hidden">
            <LocaleSwitch />
            <ThemeSwitch />
          </div>

          <Link
            href={ctaHref}
            transitionTypes={["nav-forward"]}
            className="label-data press mt-6 block bg-signal px-5 py-4 text-center text-obsidian"
          >
            {ctaLabel}
          </Link>
        </nav>
      )}
    </header>
  );
}
