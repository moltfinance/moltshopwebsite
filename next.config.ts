import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dynamic - using Cloudflare's edge runtime
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
