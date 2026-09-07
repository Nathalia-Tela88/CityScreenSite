# Series product imagery

## Current state

Every series carries the **manufacturer's own presentation deck**, supplied by
LAMPRO and Unilumin and stored under `series/<slug>/`:

```
public/img/series/lsk/1.webp   ← frame 1, the presentation shot
public/img/series/lsk/2.webp   ← supporting detail, in the deck's own order
…
```

This replaced the platform-level stand-in renders this folder used to hold.
Those were a single rental cabinet reused across several series, with the page
labelling them as such because they were not photographs of the series they sat
on. That caveat no longer applies: the cabinet on the LSK page is an LSK.

Frame 1 doubles as the hero — it is what the series header, the platform cards
and the mega-menu show — and the presentation section under the header renders
the whole deck, frame 1 included, because the deck reads as a sequence.

## The one thing to get right: `tone`

Each frame is registered in `src/lib/series.ts` with the ground it was **drawn
for**:

```ts
frames: [
  { src: "/img/series/ls-pro/1.webp", tone: "dark" },
  { src: "/img/series/ls-pro/4.webp", tone: "light" },
]
```

This is not a styling preference. The two manufacturers each drew their decks
for their own page, so the bundle is a mix: some frames are cut-outs captioned
in **white** on transparency, others are white diagrams captioned in **black**.
Put one on the wrong ground and the caption does not go faint, it goes away —
LS Pro frame 4 is captioned "IP67 Waterproof Module" in black ink, and on this
site's dark page that text was simply not there.

Nothing in CSS can recolour ink baked into a raster, so the page instead holds
the ground the artwork expects, in **both** themes, via the `plate-dark` and
`plate-light` utilities in `globals.css`. A dark frame sits on a dark plate
whether the visitor is in light mode or not, and vice versa.

**How to pick the value:** open the frame and look at its captions. White or
light-coloured lettering → `dark`. Black or dark lettering, or a white
background → `light`. A clean cut-out with no lettering at all works on either;
prefer `dark` so it matches the site. Do not trust an automatic guess here —
most of these products are black cabinets, which fools any measurement of
"average lightness" into the wrong answer.

## Adding or replacing a series

1. Drop the frames in `public/img/series/<slug>/` as `1.webp`, `2.webp` … in
   presentation order. Frame 1 is the shot a client should meet the product on.
2. Register them in `src/lib/series.ts` with `image` pointing at frame 1 and a
   `frames` entry per file, each carrying its `tone`.
3. Write the captions in `src/lib/i18n/frames.ts`, English and Portuguese.

A series with no captions still renders — each frame carries its number and a
note that the caption is to follow. That is deliberate: a guess at what the
manufacturer meant by a frame is worse than an admission that nobody has
written it yet.

## Conversion

The source PNGs were 89 MB across 54 files; the converted WebP set is 10 MB.
`light` frames are composited onto white during conversion (several arrived
with an alpha channel despite being drawn for a white page), `dark` frames keep
their alpha, and everything is capped at 1600 px wide.

## Other imagery in this folder

`app-*` are the platform photographs, `feat-*` the platform feature figures
wired through `visuals` in `src/lib/i18n/services.ts`, and `hero-*` the home
page. None of them are per-series and none use the plate mechanism.
