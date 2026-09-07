import type { SpecTable } from "@/lib/services";

export type PlatformSlug =
  | "professional"
  | "commercial"
  | "rental"
  | "dooh";

/**
 * One frame of a series' product presentation.
 *
 * `tone` is the property that matters and the one that is easy to get wrong.
 * This artwork comes from two manufacturers who each drew it for their own
 * deck, so some frames are white diagrams with black captions and others are
 * cut-outs with white captions on transparency. Rendered on the wrong ground
 * the caption vanishes — a black "IP67 Waterproof Module" on a black page is
 * gone completely, not merely faint.
 *
 * So each frame records the ground it was drawn for and the page mounts it on
 * a plate that holds that ground in *both* themes. That is the same reasoning
 * `.on-wall` already uses in globals.css: a surface does not change because
 * the room around it did.
 */
export type Frame = {
  /** Path under public/. */
  src: string;
  /** The ground this artwork was drawn against. */
  tone: "dark" | "light";
};

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
  /**
   * The frame a client meets the product on — always frame 1 of `frames`,
   * duplicated here because the cards and the mega-menu want the hero without
   * caring about the rest of the sequence.
   */
  image?: string;
  /**
   * The manufacturer's own presentation sequence for this series, in the
   * order the source deck used: frame 1 is the shot a client should meet the
   * product on, and the rest are the supporting detail behind it.
   *
   * Captions live in lib/i18n/frames.ts because they are localised. What
   * stays here is the pair of facts that are not: where the file is, and
   * which ground it was drawn for.
   */
  frames?: Frame[];
};

/* Every series below now carries the manufacturer's own per-series artwork,
   supplied as an ordered deck by LAMPRO and Unilumin and converted in place.
   These are no longer the platform-level stand-in renders this file used to
   hold: the cabinet on the LSK page is an LSK, and the frames under it are the
   frames LSK's own deck used, in its order.

   Adding a series means dropping its frames in public/img/series/<slug>/ as
   1.webp, 2.webp … in presentation order, listing them here with the ground
   each was drawn for, and writing the captions in lib/i18n/frames.ts. A series
   with no captions still renders; the frames simply carry their number alone.
   See public/img/SERIES-IMAGES.md. */

export const series: Series[] = [
  // Professional — COB fine pitch for control rooms and boardrooms.
  { slug: "lmini", name: "LMini Series", platform: "professional",
    image: "/img/series/lmini/1.webp",
    frames: [
      { src: "/img/series/lmini/1.webp", tone: "light" },
      { src: "/img/series/lmini/2.webp", tone: "dark" },
      { src: "/img/series/lmini/3.webp", tone: "light" },
    ],
  },
  { slug: "lmini-p", name: "LMini P Series", platform: "professional",
    image: "/img/series/lmini-p/1.webp",
    frames: [
      { src: "/img/series/lmini-p/1.webp", tone: "dark" },
      { src: "/img/series/lmini-p/2.webp", tone: "dark" },
      { src: "/img/series/lmini-p/3.webp", tone: "dark" },
      { src: "/img/series/lmini-p/4.webp", tone: "light" },
    ],
  },
  { slug: "lhp", name: "LHP Series", platform: "professional",
    image: "/img/series/lhp/1.webp",
    frames: [
      { src: "/img/series/lhp/1.webp", tone: "light" },
      { src: "/img/series/lhp/2.webp", tone: "light" },
      { src: "/img/series/lhp/3.webp", tone: "dark" },
      { src: "/img/series/lhp/4.webp", tone: "dark" },
    ],
  },

  // Commercial — retail and interior.
  { slug: "bnx-ii", name: "BNXⅡ Series", platform: "commercial",
    image: "/img/series/bnx-ii/1.webp",
    frames: [
      { src: "/img/series/bnx-ii/1.webp", tone: "light" },
      { src: "/img/series/bnx-ii/2.webp", tone: "dark" },
      { src: "/img/series/bnx-ii/3.webp", tone: "dark" },
      { src: "/img/series/bnx-ii/4.webp", tone: "dark" },
    ],
  },
  // U-Natural is a Unilumin commercial product — a decorative texture screen
  // for reception desks, screen walls and hospitality interiors. It is a fixed
  // architectural surface, not something that goes out on a truck.
  { slug: "u-natural", name: "U-Natural", platform: "commercial",
    image: "/img/series/u-natural/1.webp",
    frames: [
      { src: "/img/series/u-natural/1.webp", tone: "dark" },
      { src: "/img/series/u-natural/2.webp", tone: "light" },
      { src: "/img/series/u-natural/3.webp", tone: "light" },
    ],
  },

  // Rental — event and stage.
  { slug: "lrs", name: "LRS Series", platform: "rental",
    image: "/img/series/lrs/1.webp",
    frames: [
      { src: "/img/series/lrs/1.webp", tone: "dark" },
      { src: "/img/series/lrs/2.webp", tone: "dark" },
      { src: "/img/series/lrs/3.webp", tone: "light" },
      { src: "/img/series/lrs/4.webp", tone: "dark" },
    ],
  },
  { slug: "rn-ii", name: "RNⅡ Series", platform: "rental",
    image: "/img/series/rn-ii/1.webp",
    frames: [
      { src: "/img/series/rn-ii/1.webp", tone: "dark" },
      { src: "/img/series/rn-ii/2.webp", tone: "light" },
      { src: "/img/series/rn-ii/3.webp", tone: "dark" },
      { src: "/img/series/rn-ii/4.webp", tone: "dark" },
    ],
  },
  { slug: "lrm", name: "LRM Series", platform: "rental",
    image: "/img/series/lrm/1.webp",
    frames: [
      { src: "/img/series/lrm/1.webp", tone: "dark" },
      { src: "/img/series/lrm/2.webp", tone: "light" },
      { src: "/img/series/lrm/3.webp", tone: "dark" },
      { src: "/img/series/lrm/4.webp", tone: "dark" },
    ],
  },
  // LRM Pro arrived with the manufacturer bundle and had no entry here before.
  // It carries no datasheet of its own yet, so its page falls back to the
  // rental envelope and says so.
  { slug: "lrm-pro", name: "LRM Pro Series", platform: "rental",
    image: "/img/series/lrm-pro/1.webp",
    frames: [
      { src: "/img/series/lrm-pro/1.webp", tone: "dark" },
      { src: "/img/series/lrm-pro/2.webp", tone: "dark" },
      { src: "/img/series/lrm-pro/3.webp", tone: "dark" },
      { src: "/img/series/lrm-pro/4.webp", tone: "dark" },
    ],
  },

  // DOOH — outdoor media.
  { slug: "lx-ii-pro", name: "LXⅡ Pro Series", platform: "dooh",
    image: "/img/series/lx-ii-pro/1.webp",
    frames: [
      { src: "/img/series/lx-ii-pro/1.webp", tone: "dark" },
      { src: "/img/series/lx-ii-pro/2.webp", tone: "light" },
      { src: "/img/series/lx-ii-pro/3.webp", tone: "light" },
      { src: "/img/series/lx-ii-pro/4.webp", tone: "light" },
    ],
  },
  { slug: "ls-pro", name: "LS Pro Series", platform: "dooh",
    image: "/img/series/ls-pro/1.webp",
    frames: [
      { src: "/img/series/ls-pro/1.webp", tone: "dark" },
      { src: "/img/series/ls-pro/2.webp", tone: "dark" },
      { src: "/img/series/ls-pro/3.webp", tone: "dark" },
      { src: "/img/series/ls-pro/4.webp", tone: "light" },
      { src: "/img/series/ls-pro/5.webp", tone: "dark" },
    ],
  },
  { slug: "lst", name: "LST Series", platform: "dooh",
    image: "/img/series/lst/1.webp",
    frames: [
      { src: "/img/series/lst/1.webp", tone: "dark" },
      { src: "/img/series/lst/2.webp", tone: "dark" },
      { src: "/img/series/lst/3.webp", tone: "dark" },
      { src: "/img/series/lst/4.webp", tone: "dark" },
      { src: "/img/series/lst/5.webp", tone: "dark" },
    ],
  },
  { slug: "lsk", name: "LSK Series", platform: "dooh",
    image: "/img/series/lsk/1.webp",
    frames: [
      { src: "/img/series/lsk/1.webp", tone: "dark" },
      { src: "/img/series/lsk/2.webp", tone: "dark" },
      { src: "/img/series/lsk/3.webp", tone: "dark" },
      { src: "/img/series/lsk/4.webp", tone: "dark" },
      { src: "/img/series/lsk/5.webp", tone: "dark" },
      { src: "/img/series/lsk/6.webp", tone: "dark" },
    ],
  },
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
