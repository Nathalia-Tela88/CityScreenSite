/**
 * Company details are facts, not copy, so they are the same in both languages.
 *
 * These live here rather than in `lib/i18n/navigation.ts` because that module
 * is `"use client"` — it exports a hook — and the chat route handler needs the
 * same facts on the server. `navigation.ts` re-exports them, so every existing
 * client import keeps working and there is still exactly one definition.
 */
export const company = {
  name: "CityScreen",
  address: "Av. do Rio Douro, lote 33 Parque Industrial Sapec Bay 2910-267",
  phone: "265 702 052",
  /* Dialled form carries the country code even though the printed form does
     not: a visitor tapping this on a phone roaming outside Portugal needs the
     +351 to connect, and the national format alone would fail. */
  phoneHref: "tel:+351265702052",
  email: "info@cityscreen.pt",
};

export const ctaHref = "/contact-us";
