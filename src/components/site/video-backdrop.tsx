"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * A full-bleed background video.
 *
 * Autoplay only works muted, and the clip carries no meaningful audio, so the
 * element is muted and hidden from assistive tech — it is decoration behind
 * real DOM text, never content in its own right.
 *
 * It plays for everyone, including visitors who have asked for reduced motion.
 * That is a deliberate call, and it is why the pause control below is always
 * on screen rather than appearing only for some people: WCAG 2.2.2 asks that
 * anything moving for more than five seconds can be stopped, and a control
 * anyone can reach satisfies that far better than silently freezing the hero
 * for a subset of visitors who then have no idea a video exists.
 */
export function VideoBackdrop({
  src,
  poster,
  loopEnd,
  className,
  pauseLabel = "Pause background video",
  playLabel = "Play background video",
}: {
  src: string;
  poster?: string;
  /**
   * Loop back to the start at this timestamp rather than playing to the end.
   * The supplied clip cuts to a second, much dimmer shot part way through;
   * holding the bright opening keeps the hero consistent. Omit to play it all.
   */
  loopEnd?: number;
  className?: string;
  pauseLabel?: string;
  playLabel?: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = React.useState(false);
  /** Set when the browser refuses to start it, so the control reads correctly. */
  const [blocked, setBlocked] = React.useState(false);

  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (paused) {
      el.pause();
      return;
    }

    // The `autoPlay` attribute does the work in almost every case; this is the
    // fallback for the ones where it does not — a restored tab, a bfcache
    // navigation, or a policy that only relents after the element is muted in
    // script rather than in markup.
    el.muted = true;
    void el.play().then(
      () => setBlocked(false),
      () => setBlocked(true),
    );

    // Wrap the loop early so the dim second shot never plays.
    const onTimeUpdate = () => {
      if (loopEnd && el.currentTime >= loopEnd) el.currentTime = 0;
    };
    el.addEventListener("timeupdate", onTimeUpdate);

    // Stop decoding whenever the hero is not actually on screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.01 },
    );
    observer.observe(el);

    const onVisibility = () => {
      if (document.hidden) el.pause();
      else void el.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      el.removeEventListener("timeupdate", onTimeUpdate);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, [paused, loopEnd]);

  const stopped = paused || blocked;

  return (
    <div className={cn("relative overflow-hidden bg-obsidian", className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Seat the footage in the page without crushing it — the brightest
          surface in this clip sits low in frame. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-obsidian/45"
      />

      {/* Deliberately not `isolate` on the wrapper: this button has to out-stack
          the hero's content layer, which is a sibling of this element. */}
      {/* Icon only. The label lives in aria-label rather than on screen, so the
          control stays out of the way while still being announced properly.
          40px square keeps it comfortably above the 24px minimum target size
          without it reading as a piece of the layout. */}
      <button
        type="button"
        onClick={() => setPaused((v) => !v)}
        aria-label={stopped ? playLabel : pauseLabel}
        title={stopped ? playLabel : pauseLabel}
        className="absolute bottom-0 right-0 z-20 flex size-10 items-center justify-center border-l border-t border-seam bg-obsidian/70 text-[0.6rem] text-graphite backdrop-blur-sm transition-colors hover:text-filament"
      >
        <span aria-hidden>{stopped ? "▶" : "❚❚"}</span>
      </button>
    </div>
  );
}
