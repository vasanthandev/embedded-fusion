import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/embedded-fusion", // ✅ Set this to your repo name
  assetPrefix: "/embedded-fusion/", // ✅ Set this for static assets
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
