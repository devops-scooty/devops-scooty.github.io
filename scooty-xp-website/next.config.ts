import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // output: "standalone",
    output: "export",
  // Optional: If deploying to a subdirectory like [https://username.github.io/scooty-xp-website/](https://username.github.io/scooty-xp-website/)
  basePath: "/scooty-xp-website",
  images: {
    unoptimized: true, // Image optimization API is unsupported on GitHub Pages
  }
    
};

export default nextConfig;
