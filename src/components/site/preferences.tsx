"use client";

import * as React from "react";

/* ---------------------------------------------------------------------------
   Theme and language, both stored the same way.

   Each preference lives in one place — an attribute on <html> — and the
   controls read it back from there rather than holding a second copy in React
   state. That keeps the no-flash boot script (which runs before hydration and
   sets those attributes directly) and the toggles from ever disagreeing.
   --------------------------------------------------------------------------- */

export type Theme = "light" | "dark";
export type Locale = "en" | "pt";

export const THEME_KEY = "cityscreen-theme";
export const LOCALE_KEY = "cityscreen-locale";

/**
 * Runs before first paint, so the page never renders in the wrong theme and
 * then snaps. Inlined into <head> — keep it small and dependency-free.
 */
export const BOOT_SCRIPT = `
(function(){
  try {
    var d = document.documentElement;
    var t = localStorage.getItem('${THEME_KEY}');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    d.classList.remove('light','dark');
    d.classList.add(t);
    var l = localStorage.getItem('${LOCALE_KEY}');
    if (l !== 'en' && l !== 'pt') l = 'en';
    d.setAttribute('lang', l);
  } catch (e) {}
})();
`;

/** Subscribe to an attribute on <html> and read it as the source of truth. */
function useHtmlState<T extends string>(read: () => T, fallback: T): T {
  return React.useSyncExternalStore(
    (onChange) => {
      const observer = new MutationObserver(onChange);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "lang"],
      });
      return () => observer.disconnect();
    },
    read,
    () => fallback,
  );
}

export function useTheme() {
  const theme = useHtmlState<Theme>(
    () =>
      document.documentElement.classList.contains("light") ? "light" : "dark",
    "dark",
  );

  const setTheme = React.useCallback((next: Theme) => {
    const d = document.documentElement;
    d.classList.remove("light", "dark");
    d.classList.add(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* private mode — the choice just won't outlive the tab */
    }
  }, []);

  return { theme, setTheme };
}

export function useLocale() {
  const locale = useHtmlState<Locale>(
    () => (document.documentElement.lang === "pt" ? "pt" : "en"),
    "en",
  );

  const setLocale = React.useCallback((next: Locale) => {
    document.documentElement.setAttribute("lang", next);
    try {
      localStorage.setItem(LOCALE_KEY, next);
    } catch {
      /* as above */
    }
  }, []);

  return { locale, setLocale };
}
