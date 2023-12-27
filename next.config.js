/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode:true,
  images: {
    domains: ["fsw-store.s3.sa-easttre-1.amazonaws.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
