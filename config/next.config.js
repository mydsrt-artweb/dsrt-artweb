/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    appDir: true, // App Router enabled
  },

  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com", "cdn.jsdelivr.net"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
