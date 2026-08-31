"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

/* ---------------------------------------------------------------------------
   The LED wall.

   A still is re-rendered as discrete red, green and blue diodes on a dark
   substrate, at a fixed pitch. Used behind interior page headers as a quiet
   echo of the product itself.

   Rendering is two draw calls: downsample to one pixel per cell, blocky-upscale
   that back, then multiply a repeating sub-pixel mask over the top. The mask is
   a tiled pattern rather than three fillRects per cell, which is the difference
   between ~70,000 draw calls a frame and three.

   The wall is decorative in the accessibility sense — the headline over it is
   real DOM text — so the canvas is hidden from assistive tech.
   --------------------------------------------------------------------------- */

/** Rule of thumb the industry actually uses: optimal viewing distance in
    metres is roughly the pixel pitch in millimetres. */
const PITCHES = [
  { mm: 0.9, cell: 4 },
  { mm: 1.5, cell: 5 },
  { mm: 2.5, cell: 7 },
  { mm: 3.9, cell: 10 },
  { mm: 6.6, cell: 14 },
  { mm: 10, cell: 20 },
] as const;

/**
 * One cell of the diode mask: three vertical bars leading on R, G and B, each
 * carrying a little of the other two, separated by the dark gap between
 * packages.
 *
 * Fully separated R/G/B bars are what a datasheet diagram shows, but on screen
 * they shred the luminance structure and the picture becomes confetti.
 */
function buildMask(cell: number): HTMLCanvasElement | null {
  const tile = document.createElement("canvas");
  tile.width = cell;
  tile.height = cell;
  const ctx = tile.getContext("2d");
  if (!ctx) return null;

  const gap = Math.max(1, Math.round(cell * 0.15));
  const lit = cell - gap;
  const subW = lit / 3;
  // How much of the other two channels each bar carries. This is the knob that
  // sets overall throughput: raising it lets the mask pass more light, which
  // matters because the alternative — compensating with brightness() — clips
  // the red channel on saturated sources and turns a red wall pink.
  const bleed = 112;

  // The gap is dark but not dead: light spreads across the mask between
  // packages, and a near-black gap costs about a stop across the whole image.
  ctx.fillStyle = "rgb(44,44,50)";
  ctx.fillRect(0, 0, cell, cell);

  if (cell >= 7) {
    ctx.fillStyle = `rgb(255,${bleed},${bleed})`;
    ctx.fillRect(0, 0, subW, lit);
    ctx.fillStyle = `rgb(${bleed},255,${bleed})`;
    ctx.fillRect(subW, 0, subW, lit);
    ctx.fillStyle = `rgb(${bleed},${bleed},255)`;
    ctx.fillRect(subW * 2, 0, subW, lit);
  } else {
    // Below this size the triad is smaller than a device pixel; the cell
    // becomes a single diode package instead.
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, lit, lit);
  }
  return tile;
}

export function LedWall({
  src,
  className,
  interactive = true,
  defaultPitch = 3,
}: {
  src: string;
  className?: string;
  /** Show the pitch control. Decorative walls elsewhere on the site don't. */
  interactive?: boolean;
  defaultPitch?: number;
}) {
  const { t } = useT();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const imageRef = React.useRef<HTMLImageElement | null>(null);
  const samplerRef = React.useRef<HTMLCanvasElement | null>(null);
  const maskRef = React.useRef<CanvasPattern | null>(null);
  const maskCellRef = React.useRef(0);

  const [pitchIndex, setPitchIndex] = React.useState(defaultPitch);
  const [ready, setReady] = React.useState(false);
  const pitch = PITCHES[pitchIndex];

  const draw = React.useCallback(
    (noise = 0) => {
      const canvas = canvasRef.current;
      const source = imageRef.current;
      if (!canvas || !source) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const sw = source.naturalWidth;
      const sh = source.naturalHeight;
      if (!sw || !sh) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssW = canvas.clientWidth;
      const cssH = canvas.clientHeight;
      if (!cssW || !cssH) return;

      const targetW = Math.floor(cssW * dpr);
      const targetH = Math.floor(cssH * dpr);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        maskRef.current = null; // pattern is tied to this context
      }

      const cell = pitch.cell * dpr;
      const cols = Math.ceil(canvas.width / cell);
      const rows = Math.ceil(canvas.height / cell);

      // 1. Downsample the source to exactly one pixel per LED cell.
      let sampler = samplerRef.current;
      if (!sampler) {
        sampler = document.createElement("canvas");
        samplerRef.current = sampler;
      }
      if (sampler.width !== cols || sampler.height !== rows) {
        sampler.width = cols;
        sampler.height = rows;
      }
      const sctx = sampler.getContext("2d");
      if (!sctx) return;

      const scale = Math.max(cols / sw, rows / sh);
      const dw = sw * scale;
      const dh = sh * scale;
      // Grade here, not on the upscale. Every cell is a flat colour, so the
      // filter only has to touch the sampler rather than the full canvas.
      // Saturate first: after brightness it cannot recover a clipped channel.
      sctx.filter = "saturate(1.22) brightness(1.3)";
      sctx.drawImage(source, (cols - dw) / 2, (rows - dh) / 2, dw, dh);
      sctx.filter = "none";

      // 2. Blocky-upscale it back.
      ctx.globalCompositeOperation = "source-over";
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(sampler, 0, 0, canvas.width, canvas.height);

      // 3. Multiply the diode mask over the whole surface.
      const cellPx = Math.max(2, Math.round(cell));
      if (!maskRef.current || maskCellRef.current !== cellPx) {
        const tile = buildMask(cellPx);
        maskRef.current = tile ? ctx.createPattern(tile, "repeat") : null;
        maskCellRef.current = cellPx;
      }
      if (maskRef.current) {
        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = maskRef.current;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
      }

      // Power-on calibration noise, only during the boot sequence.
      if (noise > 0) {
        ctx.globalAlpha = noise * 0.5;
        ctx.fillStyle = "#ff2233";
        for (let i = 0; i < 90; i++) {
          const y = Math.random() * canvas.height;
          ctx.fillRect(0, y, canvas.width, cell * (0.5 + Math.random()));
        }
        ctx.globalAlpha = 1;
      }
    },
    [pitch.cell],
  );

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageRef.current = img;
      setReady(true);
    };
  }, [src]);

  // Draw, and run the power-on calibration pass the first time.
  React.useEffect(() => {
    if (!ready) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      draw(0);
      return;
    }

    // Six frames of decaying noise, not sixty — the wall settles rather than
    // animating, and the cost stays off the main thread's critical path.
    const steps = [0.85, 0.6, 0.38, 0.2, 0.08, 0];
    let step = 0;
    let timer: number;
    const advance = () => {
      draw(steps[step]);
      step += 1;
      if (step < steps.length) timer = window.setTimeout(advance, 90);
    };
    advance();
    return () => window.clearTimeout(timer);
  }, [ready, draw]);

  // Repaint on resize; the cell grid is derived from the element's box.
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => draw(0));
    });
    observer.observe(canvas);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [draw]);

  return (
    <div className={cn("relative isolate overflow-hidden bg-obsidian", className)}>
      <canvas
        ref={canvasRef}
        aria-hidden
        className={cn(
          "absolute inset-0 h-full w-full transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Calibration sweep — a single pass on load, then it is gone. */}
      {ready && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 bg-gradient-to-r from-transparent via-filament/12 to-transparent motion-safe:animate-[calibrate-sweep_1.4s_cubic-bezier(0.4,0,0.2,1)_forwards] motion-reduce:hidden"
        />
      )}

      {/* Just enough falloff at the edges to seat the wall in the page. The
          caller adds whatever it needs behind its own text. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/65 via-transparent to-obsidian/45"
      />

      {interactive && (
        <div className="absolute bottom-0 right-0 z-10 hidden border-l border-t border-seam bg-obsidian/85 p-5 backdrop-blur-sm md:block">
          <label htmlFor="pitch" className="label-data block text-graphite-dim">
            {t.specPrimer.pitchLabel}
          </label>
          <div className="mt-2.5 flex items-baseline gap-1.5">
            <span className="tabular text-3xl font-medium leading-none text-signal">
              P{pitch.mm.toFixed(1)}
            </span>
            <span className="label-data text-graphite-dim">mm</span>
          </div>
          <input
            id="pitch"
            type="range"
            min={0}
            max={PITCHES.length - 1}
            step={1}
            value={pitchIndex}
            onChange={(e) => setPitchIndex(Number(e.target.value))}
            className="mt-4 w-52 accent-[var(--color-signal)]"
          />
          {/* Split on the placeholder so the number keeps the tabular
              face while the sentence around it stays translatable — the two
              locales put the figure in different places. */}
          <p className="mt-3 text-xs text-graphite">
            {t.specPrimer.viewingDistance
              .split("{d}")
              .flatMap((part, i) =>
                i === 0
                  ? [part]
                  : [
                      <span key={i} className="tabular text-filament">
                        {pitch.mm.toFixed(1)}
                      </span>,
                      part,
                    ],
              )}
          </p>
        </div>
      )}
    </div>
  );
}
