import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "encrypted-tbn0.gstatic.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "i.ytimg.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
