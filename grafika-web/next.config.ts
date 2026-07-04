import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.grafika.com.tr",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "grafika.com.tr",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
