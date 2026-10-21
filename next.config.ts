import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers no incluye el optimizador de imagenes de Next.
  images: { unoptimized: true },
};

export default nextConfig;
