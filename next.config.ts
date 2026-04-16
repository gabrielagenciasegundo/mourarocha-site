import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.171'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "segundodesign.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
