"use client";

import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The series media viewer.
 *
 * Three interactions, each earning its place rather than added because
 * galleries usually have them:
 *
 * - **Thumbnail sync** — the strip is the index and the state, so keyboard,
 *   swipe and click all drive the same `active` value and can never disagree.
 * - **Swipe** — pointer events, not a touch library. One code path covers
 *   touch, pen and a mouse drag, and `setPointerCapture` means a swipe that
 *   leaves the frame still completes instead of sticking half way.
 * - **Hover-to-zoom** — the cursor position becomes the transform origin, so
 *   the image magnifies *under the pointer* rather than toward the middle.
 *   Gated behind a fine pointer: on touch there is no hover to track, and the
 *   frame would simply be stuck zoomed after the first tap.
 *
 * With one frame it renders as a plain image — no strip, no swipe, no zoom
 * affordance for something that cannot move. With none it renders the same
 * typographic panel the cards use, because a placeholder photograph under a
 * specific model number would misrepresent the product.
 */
export function ProductGallery({
  images,
  name,
  className,
  zoomLabel,
}: {
  images: string[];
  name: string;
  className?: string;
  /** Announced to assistive tech in place of the pointer-only zoom hint. */
  zoomLabel?: string;
}) {
  const [active, setActive] = React.useState(0);
  const [zooming, setZooming] = React.useState(false);
  const [origin, setOrigin] = React.useState("50% 50%");

  const frameRef = React.useRef<HTMLDivElement>(null);
  const dragStart = React.useRef<number | null>(null);

  const count = images.length;
  const clamp = React.useCallback(
    (next: number) => Math.min(Math.max(next, 0), count - 1),
    [count],
  );

  // Empty state: the same panel the cards fall back to.
  if (count === 0) {
    return (
      <div
        className={cn(
          "flex aspect-[4/3] items-center justify-center border border-seam bg-cabinet-raised",
          className,
        )}
      >
        <span className="font-display text-lg font-medium text-graphite-dim md:text-xl">
          {name}
        </span>
      </div>
    );
  }

  const single = count === 1;

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (single) return;
    dragStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (single || dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    dragStart.current = null;
    // 40px of travel before it counts, so a tap with a shaky hand is not read
    // as a swipe.
    if (Math.abs(delta) < 40) return;
    setActive((current) => clamp(current + (delta < 0 ? 1 : -1)));
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!zooming) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (single) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActive((current) => clamp(current + 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActive((current) => clamp(current - 1));
    }
  };

  return (
    <div className={className}>
      <div
        ref={frameRef}
        data-gallery=""
        // A roving region: focusable so the arrow keys work, and labelled so a
        // screen reader knows what it is stepping through. `aria-roledescription`
        // is what distinguishes it from the site's other `role="group"` controls
        // — the theme and language switches use the same role.
        role={single ? undefined : "group"}
        aria-roledescription={single ? undefined : "carousel"}
        aria-label={single ? undefined : zoomLabel ?? name}
        tabIndex={single ? undefined : 0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (dragStart.current = null)}
        onPointerMove={onPointerMove}
        onPointerEnter={(event) => {
          // `pointerType` is the honest test. A media query would tell us what
          // the device supports; this tells us what is actually touching the
          // screen right now, which is what matters on a hybrid laptop.
          if (event.pointerType === "mouse") setZooming(true);
        }}
        onPointerLeave={() => {
          setZooming(false);
          setOrigin("50% 50%");
          dragStart.current = null;
        }}
        className={cn(
          "relative aspect-[4/3] touch-pan-y select-none overflow-hidden border border-seam bg-obsidian",
          !single && "cursor-grab active:cursor-grabbing",
        )}
      >
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={count > 1 ? `${name} — ${index + 1} of ${count}` : name}
            fill
            priority={index === 0}
            quality={90}
            // Images are natively draggable. Left alone, pressing on one and
            // moving starts an HTML5 image drag, the browser sends
            // `pointercancel`, and the swipe is destroyed before it begins —
            // every mouse drag over the frame simply did nothing.
            draggable={false}
            sizes="(max-width: 992px) 100vw, 55vw"
            className={cn(
              "object-cover transition-[opacity,transform] duration-500 ease-out",
              index === active ? "opacity-100" : "opacity-0",
            )}
            style={
              index === active && zooming
                ? { transform: "scale(1.85)", transformOrigin: origin }
                : { transform: "scale(1)", transformOrigin: origin }
            }
          />
        ))}

        {!single && (
          <span className="label-data pointer-events-none absolute bottom-3 right-3 border border-white/20 bg-black/70 px-2.5 py-1.5 text-white backdrop-blur-sm">
            {active + 1} / {count}
          </span>
        )}
      </div>

      {!single && (
        <ul className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((src, index) => (
            <li key={src} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-current={index === active}
                aria-label={`${name} — ${index + 1}`}
                className={cn(
                  "press relative block size-16 overflow-hidden border md:size-20",
                  index === active
                    ? "border-signal"
                    : "border-seam opacity-60 hover:opacity-100",
                )}
              >
                <Image
                  src={src}
                  alt=""
                  aria-hidden
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
