import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {hostname: "inspiration-bucket.s3.us-east-1.amazonaws.com"}
    ]
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    }
  }
};

export default nextConfig;
