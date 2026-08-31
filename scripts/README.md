# Image generation

Site photography is generated with **nano-banana-2 at 2K** through the
[kie.ai](https://kie.ai) jobs API and written straight into `public/img/`.

## Running it

```bash
powershell -NoProfile -File scripts/gen-images.ps1 \
  -Manifest scripts/manifest-core.json \
  -OutDir public/img \
  -ApiKey "<your kie.ai key>"
```

The script skips any manifest entry whose `.jpg` already exists in `OutDir`, so
a partial or failed run is cheap to resume — just run it again.

Each 2K generation costs roughly **12 credits**. A full manifest of 20 images is
about 240 credits; if the balance runs out mid-run the remaining entries fail
with `Credits insufficient` and the rest of the run still completes.

## Manifests

A manifest is a JSON array of `{ name, aspect, prompt }`:

- `name` — output filename without extension. Referenced from `lib/projects.ts`,
  `lib/services.ts` or a page directly.
- `aspect` — one of the API's supported ratios (`21:9`, `16:9`, `4:3`, `3:2`,
  `4:5`, `1:1`, …).
- `prompt` — the subject only. A shared house style is appended by the script,
  which is what keeps forty separate generations reading as one photographic
  set. Edit `$style` in `gen-images.ps1` to shift the whole look at once.

## Currently generated

`manifest-core.json` holds twenty entries. Six resolved before the API balance
ran out and are live on the site:

| File | Used by |
| --- | --- |
| `hero-facade.jpg` | homepage hero source, lead project card |
| `hero-facade-src.jpg` | downscaled copy the hero canvas samples |
| `hero-facade-alt.jpg` | corner-wrap project card |
| `app-professional.jpg` | `/professional`, `/products` header, control-room project |
| `app-commercial.jpg` | `/commercial`, `/about-us`, shopfront project |
| `app-rental.jpg` | `/rental`, festival project |
| `app-dooh.jpg` | `/dooh`, `/warranty-service`, billboard project |

The remaining fourteen entries (product studio shots, spec close-ups, six more
gallery installs, the calibration bay) are still in the manifest and will fill
in on the next run once the balance is topped up.

## Note on the hero source

`hero-facade-src.jpg` is a 1024 px copy of `hero-facade.jpg`. The hero canvas
samples roughly one pixel per LED cell, so it never needs the full 3 MB file.
Regenerate it if the hero image changes.
