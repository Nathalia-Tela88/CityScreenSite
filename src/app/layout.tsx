import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { BOOT_SCRIPT } from "@/components/site/preferences";

// The only face on the site. The product is sold on numbers, so everything —
// headlines and prose included — gets the voice of an instrument readout.
//
// 600 is loaded because the display headings and every `label-data` are set at
// semibold. Without it the browser synthesises the weight by smearing the 500,
// which on a monospace face at billboard size is very visible.
//
// Archivo and Plex Sans used to be loaded here for the headlines and the body.
// Nothing references them now, so they are gone rather than left downloading:
// restoring them is the first step if this typography is ever reverted.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CityScreen: LED display systems for Portugal",
    template: "%s | CityScreen",
  },
  description:
    "CityScreen supplies, installs and services LED display systems across Portugal. Structural engineering through final pixel calibration, under one contract.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // `dark` is the server-rendered default; the boot script below swaps it to
    // the visitor's stored choice before the first paint. suppressHydrationWarning
    // covers that deliberate mismatch on the html element only.
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${plexMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
        {/* Reveals start hidden and are un-hidden by an observer after
            hydration. With scripting off that observer never runs, so the
            hidden state is cancelled outright rather than leaving a blank
            page behind perfectly good server-rendered markup. */}
        <noscript>
          <style>{`.opacity-0{opacity:1!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-obsidian text-filament">
        {/* Nav and footer come from the Relume Navbar3 / Footer3 rendered by
            each page, so they are not repeated at the layout level. */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
