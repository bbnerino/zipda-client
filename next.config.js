/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "zipda-api.example.com"],
  },
  env: {
    API_URL: process.env.API_URL || "http://localhost:3000/api",
  },
};

module.exports = nextConfig;
