import { ViewTransition } from "react";
import * as React from "react";

/**
 * The page-level transition wrapper.
 *
 * React pairs the old and new snapshots of whatever this wraps and hands them
 * to the browser's View Transitions API. The animation itself is CSS, in
 * `globals.css` under `.nav-forward` / `.nav-back`.
 *
 * Two things are deliberate:
 *
 * `default: "none"` means an untyped navigation — the browser back button, a
 * `router.refresh()`, a Suspense reveal — produces no directional slide. Only
 * links that explicitly declare a direction animate, so the motion always
 * means something rather than firing on every render.
 *
 * This has to sit in each `page.tsx` rather than in the layout. Layouts persist
 * across navigation, so a wrapper placed there never unmounts and its enter and
 * exit animations would never fire.
 */
const DIRECTIONAL = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter={DIRECTIONAL} exit={DIRECTIONAL} default="none">
      {/* One wrapping element on purpose. Handed a fragment, React names every
          top-level section separately and the browser then has to capture and
          animate a snapshot per section; naming the page body once means one
          snapshot and one animation. The div is layout-neutral — everything
          inside it is already a full-width block. */}
      <div>{children}</div>
    </ViewTransition>
  );
}
