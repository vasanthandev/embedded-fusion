import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    distDir:"dist",
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable image optimization for static exports
    },
};

export default nextConfig;
