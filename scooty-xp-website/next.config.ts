import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // output: "standalone",
    output: "export",
  // Optional: If deploying to a subdirectory like [https://username.github.io/scooty-xp-website/](https://username.github.io/scooty-xp-website/)
    // basePath: "/scooty-xp-website",
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    unoptimized: true, // Image optimization API is unsupported on GitHub Pages
  }
    
};
module.exports = {
  allowedDevOrigins: ['127.0.0.1'],
}
export default nextConfig;
