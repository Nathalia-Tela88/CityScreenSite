import type { SpecTable } from "@/lib/services";

export type PlatformSlug =
  | "professional"
  | "commercial"
  | "rental"
  | "dooh";

export type Series = {
  /** URL segment under /products. */
  slug: string;
  name: string;
  platform: PlatformSlug;

  /* ---------------------------------------------------------------------
     Everything below is series-specific and has to come off the real
     datasheet. It is deliberately optional and deliberately unset.

     Inventing figures here would be worse than leaving them out: a buyer
     comparing an LMini against an LHP would be comparing numbers nobody
     measured, and could specify hardware on them. The page renders what is
     present and says plainly what is still on request.
     --------------------------------------------------------------------- */

  /** One line on what this series is for. */
  tagline?: string;
  /** A paragraph on where it sits against the others in its platform. */
  summary?: string;
  /** The two or three figures that define it. */
  heroStats?: { label: string; value: string }[];
  /** What it does differently from its siblings. */
  highlights?: { title: string; body: string }[];
  /** Its own datasheet, in the same shape as the platform tables. */
  specTables?: SpecTable[];
  /** Product photography, once it exists. */
  image?: string;
  /**
   * True when `image` is a cut-out with a real alpha channel rather than a
   * render on its own background.
   *
   * The series header uses this to decide how to mount it: a cut-out sits
   * straight on the page so the cabinet reads as an object beside the type,
   * while anything with its own ground keeps a bordered panel — without one it
   * would show as a hard rectangle of somebody else's background colour.
   */
  cutout?: boolean;
  /**
   * Further frames of the same product — a second angle, the service side, an
   * installed view. These are the only frames the gallery shows: `image` is
   * already full size in the header directly above it, and including it here
   * opened every series page with the same render twice.
   *
   * Unset on a series that has no second frame yet, and the page then carries
   * the header render alone. See public/img/SERIES-IMAGES.md.
   */
  gallery?: string[];
};

/* The `image` on each series is a manufacturer render of the cabinet for that
   platform, not a photograph of that exact series — LAMPRO publishes per-series
   photography behind the dealer login, and it has not been pulled in yet. The
   series page therefore shows it as a labelled product render beside the
   heading rather than passing it off as an installed photograph. Swapping in
   the real per-series file later needs no code change: only the path below.
   See public/img/SERIES-IMAGES.md. */

export const series: Series[] = [
  // Professional — COB fine pitch for control rooms and boardrooms.
  { slug: "lmini", name: "LMini Series", platform: "professional",
    image: "/img/series-lmini.webp", cutout: true },
  { slug: "lmini-p", name: "LMini P Series", platform: "professional",
    image: "/img/series-lmini-p.webp", cutout: true,
    gallery: ["/img/series-lmini-p-2.jpg"] },
  { slug: "lhp", name: "LHP Series", platform: "professional",
    image: "/img/series-lhp.webp", cutout: true },

  // Commercial — retail and interior.
  { slug: "bnx-ii", name: "BNXⅡ Series", platform: "commercial",
    image: "/img/series-bnx-ii.webp", cutout: true },
  // U-Natural is a Unilumin commercial product — a decorative texture screen
  // for reception desks, screen walls and hospitality interiors. It was
  // previously filed under rental, which it has never been: it is a fixed
  // architectural surface, not something that goes out on a truck.
  { slug: "u-natural", name: "U-Natural", platform: "commercial",
    image: "/img/series-u-natural.webp" },

  // Rental — event and stage.
  { slug: "lrs", name: "LRS Series", platform: "rental",
    image: "/img/series-lrs.webp", cutout: true,
    gallery: ["/img/series-lrs-2.webp", "/img/series-lrs-3.webp"] },
  { slug: "rn-ii", name: "RNⅡ Series", platform: "rental",
    image: "/img/series-rn-ii.webp", cutout: true,
    gallery: ["/img/series-rn-ii-2.webp", "/img/series-rn-ii-3.webp"] },
  { slug: "lrm", name: "LRM Series", platform: "rental",
    image: "/img/series-lrm.webp", cutout: true,
    gallery: ["/img/series-lrm-2.webp", "/img/series-lrm-3.webp"] },

  // DOOH — outdoor media.
  { slug: "lx-ii-pro", name: "LXⅡ Pro Series", platform: "dooh",
    image: "/img/series-lx-ii-pro.jpg" },
  { slug: "ls-pro", name: "LS Pro Series", platform: "dooh",
    image: "/img/series-ls-pro.jpg" },
  { slug: "lst", name: "LST Series", platform: "dooh",
    image: "/img/series-lst.jpg" },
  { slug: "lsk", name: "LSK Series", platform: "dooh",
    image: "/img/series-lsk.webp", cutout: true },
];

export const seriesBySlug = Object.fromEntries(
  series.map((s) => [s.slug, s]),
) as Record<string, Series>;

export const seriesByPlatform = series.reduce<Record<string, Series[]>>(
  (acc, s) => {
    (acc[s.platform] ??= []).push(s);
    return acc;
  },
  {},
);

/** True once someone has filled in the datasheet for this series. */
export const hasDetail = (s: Series) =>
  Boolean(s.summary || s.specTables?.length || s.highlights?.length);
