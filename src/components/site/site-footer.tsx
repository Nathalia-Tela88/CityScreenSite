"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { useT } from "@/lib/i18n";
import { company, useNavigation } from "@/lib/i18n/navigation";
import { SectionSeam } from "@/components/site/primitives";

const social = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

function Column({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="label-data text-graphite-dim">{heading}</p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              transitionTypes={["nav-forward"]}
              className="group text-md text-graphite transition-colors hover:text-filament"
            >
              <span className="rule-left">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The site footer.
 *
 * Three labelled columns rather than one run of every route. The flat version
 * fitted twelve links onto a single line at 14px, which is why it read as
 * cramped: nothing grouped them, so finding one meant scanning all twelve.
 * Grouping them under Products / Company / Legal means you scan a heading
 * first and three or four items second.
 *
 * Still laid out across the page rather than down it — the contact block holds
 * the left, the columns run along the right — so the footer gains height from
 * having room to breathe, not from stacking into a tower.
 */
export function SiteFooter() {
  const { t } = useT();
  const { productLinks, footerColumns } = useNavigation();

  const companyLinks = [
    { label: t.nav.home, href: "/" },
    ...footerColumns[1],
  ];

  const legalLinks = [
    { label: t.footer.privacy, href: "/privacy-policy" },
    { label: t.footer.terms, href: "/terms-of-service" },
    { label: t.footer.cookies, href: "/cookies-settings" },
  ];

  return (
    <footer className="relative bg-obsidian px-6 md:px-10">
      <SectionSeam />

      <div className="mx-auto grid max-w-[1560px] gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-24">
        <div>
          <Link
            href="/"
            transitionTypes={["nav-back"]}
            className="inline-flex items-center"
            aria-label={`${company.name} — ${t.nav.homeAria}`}
          >
            <Image
              src="/brand/cityscreen-logo-dark.png"
              alt=""
              aria-hidden
              width={1810}
              height={312}
              className="hidden h-7 w-auto dark:block md:h-8"
            />
            <Image
              src="/brand/cityscreen-logo-light.png"
              alt=""
              aria-hidden
              width={1810}
              height={312}
              className="block h-7 w-auto dark:hidden md:h-8"
            />
          </Link>

          {/* The two things a visitor might act on, at a size that says so.
              The number is the largest text in the footer on purpose. */}
          <div className="mt-8 space-y-2">
            <a
              href={company.phoneHref}
              className="tabular block font-display text-2xl font-medium text-filament transition-colors hover:text-signal"
            >
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="block text-md text-graphite transition-colors hover:text-filament"
            >
              {company.email}
            </a>
          </div>

          <p className="label-data mt-8 text-graphite-dim">
            {t.footer.office}
          </p>
          {/* A div, not a p: <address> is block-level and cannot legally nest
              inside a paragraph. The browser silently closes the <p> before it,
              which leaves the server and client trees different shapes and
              fails hydration outright. */}
          <address className="mt-3 max-w-xs text-base not-italic leading-relaxed text-graphite">
            {company.address}
          </address>
        </div>

        <nav
          aria-label={t.nav.company}
          className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:gap-x-16"
        >
          <Column heading={t.footer.products} links={productLinks} />
          <Column heading={t.footer.company} links={companyLinks} />
          <Column heading={t.footer.legal} links={legalLinks} />
        </nav>
      </div>

      <div className="mx-auto flex max-w-[1560px] flex-col gap-4 border-t border-seam py-7 text-base text-graphite-dim md:flex-row md:items-center md:justify-between md:gap-8">
        <p>
          © {new Date().getFullYear()} {company.name}. {t.footer.rights}
        </p>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {social.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="label-data transition-colors hover:text-filament"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
