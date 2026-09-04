import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js blocks cross-origin requests to dev-only assets by default — the
  // dev server only trusts `localhost` out of the box. Opening the site from
  // a phone on the LAN (http://<this-PC's-IP>:3001) counts as cross-origin,
  // so without this the HTML shell loads but every JS chunk and HMR request
  // gets silently blocked: the page looks blank below the header, with no
  // console error visible on the phone itself.
  //
  // The wildcard covers the whole home subnet rather than one literal IP,
  // because DHCP can hand this PC a different address after it reconnects to
  // Wi-Fi — Next's matcher checks this dot-by-dot from the right, so `*` here
  // only ever stands in for the last octet, not the whole address.
  allowedDevOrigins: ["192.168.1.*"],
  images: {
    // Quality values have to be allow-listed here, otherwise `quality={90}` on
    // an <Image> is silently ignored and the optimizer falls back to 75. The
    // full-bleed page headers use 90 because their compression artefacts sit
    // directly behind crisp headline type, where they are obvious.
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
