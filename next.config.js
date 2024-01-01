/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["fsw-store.s3.sa-easttre-1.amazonaws.com"],
    // // formats: ["image/avif", "image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "fsw-store.s3.sa-easttre-1.amazonaws.com",
    //     port: "3000",
    //     pathname: "**",
    //   },
    // ],
    unoptimized: true,
  },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
