import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org", 
      "www.hindustantimes.com", 
      "upload.wikimedia.org",
      "example.com" // Add more domains as needed
    ],
  },
};

export default nextConfig;
