"use client";

import { useT } from "@/lib/i18n";

/* Re-exported so the existing client imports keep pointing here, while the
   server side (the chat route) can read the same facts without pulling a
   `"use client"` module into its bundle. One definition, two entry points. */
export { company, ctaHref } from "@/lib/company";

/**
 * Routes never change with the language — only the labels do. Keeping the
 * hrefs out of the dictionary means a mistranslation can never produce a
 * broken link.
 */
export function useNavigation() {
  const { t } = useT();

  const productLinks = [
    { label: t.nav.allProducts, href: "/products" },
    { label: t.nav.professional, href: "/professional" },
    { label: t.nav.commercial, href: "/commercial" },
    { label: t.nav.rental, href: "/rental" },
    { label: t.nav.dooh, href: "/dooh" },
  ];

  return {
    productLinks,
    mainNav: [
      { label: t.nav.products, href: "/products", children: productLinks },
      { label: t.nav.projectGallery, href: "/project-gallery" },
      { label: t.nav.warranty, href: "/warranty-service" },
      { label: t.nav.resources, href: "/resources" },
      { label: t.nav.about, href: "/about-us" },
      { label: t.nav.faq, href: "/faq" },
    ],
    footerColumns: [
      [
        { label: t.nav.home, href: "/" },
        { label: t.nav.allProducts, href: "/products" },
        { label: t.nav.professional, href: "/professional" },
        { label: t.nav.commercial, href: "/commercial" },
        { label: t.nav.rental, href: "/rental" },
        { label: t.nav.dooh, href: "/dooh" },
      ],
      [
        { label: t.nav.projectGallery, href: "/project-gallery" },
        { label: t.nav.warranty, href: "/warranty-service" },
        { label: t.nav.resources, href: "/resources" },
        { label: t.nav.about, href: "/about-us" },
        { label: t.nav.faq, href: "/faq" },
        { label: t.nav.contact, href: "/contact-us" },
      ],
    ],
    ctaLabel: t.nav.quote,
  };
}
