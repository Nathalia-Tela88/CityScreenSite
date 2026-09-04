# Series product photography

## Current state

All twelve series now carry a **manufacturer cabinet render** — see the
`series-*` files in this folder, wired up in `src/lib/series.ts`. These are
platform-level renders, not photographs of each specific series: the LSK render
is a DOOH cabinet, the LRS render is a rental cabinet, and so on. The series
header labels them "Manufacturer cabinet render" for exactly that reason.

Replacing one with true per-series photography from the dealer portal needs no
code change — only the path in `src/lib/series.ts`. Drop the correct file in and
the header, the card and the gallery all pick it up.

Platform feature figures (`feat-*`) are separate: they sit on the four platform
pages and are wired through `visuals` in `src/lib/i18n/services.ts`.

## Adding or replacing an image

The twelve series pages under `/products/<slug>` fall back to a typographic
panel when no image is set. To wire one in:

1. Drop the file in this folder using the filename below.
2. Add the `image` field to that series in `src/lib/series.ts`.

The card and the page header both switch to the photograph automatically.

```ts
// src/lib/series.ts
{ slug: "lrs", name: "LRS Series", platform: "rental",
  image: "/img/series-lrs.jpg" },
```

## Expected filenames

| Platform | Series | Slug | File |
| --- | --- | --- | --- |
| Professional | LMini Series | `lmini` | `series-lmini.jpg` |
| Professional | LMini P Series | `lmini-p` | `series-lmini-p.jpg` |
| Professional | LHP Series | `lhp` | `series-lhp.jpg` |
| Commercial | BNXⅡ Series | `bnx-ii` | `series-bnx-ii.jpg` |
| Rental | LRS Series | `lrs` | `series-lrs.jpg` |
| Rental | RNⅡ Series | `rn-ii` | `series-rn-ii.jpg` |
| Rental | LRM Series | `lrm` | `series-lrm.jpg` |
| Rental | U-Natural | `u-natural` | `series-u-natural.jpg` |
| DOOH | LXⅡ Pro Series | `lx-ii-pro` | `series-lx-ii-pro.jpg` |
| DOOH | LS Pro Series | `ls-pro` | `series-ls-pro.jpg` |
| DOOH | LST Series | `lst` | `series-lst.jpg` |
| DOOH | LSK Series | `lsk` | `series-lsk.jpg` |

## Format

- **Aspect ratio** 4:3 — the card and header both crop to it.
- **Width** 1600 px is plenty; `next/image` generates the smaller sizes.
- **JPEG** for photographs, **PNG** only if the cabinet needs a transparent
  background.

## Source

These series are LAMPRO products. The manufacturer's own product photography
is the right source — it is licensed for dealer use, higher resolution than
anything scraped from a public page, and it comes alongside the datasheets
that the spec sections on these pages are still waiting for.

- Dealer login: `lampro.net/member/login`
- Downloads: `lampro.net/support/download`
