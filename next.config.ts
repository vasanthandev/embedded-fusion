import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath:"/embedded-fusion",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
