import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
