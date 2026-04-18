import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Turbopack options are experimental in some versions but required here
  turbopack: {
    root: "F:/New folder (3)/premium-blog-app",
  },
};

export default nextConfig;
