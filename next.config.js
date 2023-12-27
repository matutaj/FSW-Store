/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fsw-store.s3.sa-easttre-1.amazonaws.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "fsw-store.s3.sa-easttre-1.amazonaws.com",
    //   },
    // ],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
