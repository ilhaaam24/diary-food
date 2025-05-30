import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,
  },

  turbo: {
    enabled: false, // Nonaktifkan Turbopack
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yaoxcisksxcoidwuqurx.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "/**",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
