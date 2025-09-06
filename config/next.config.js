/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  eslint: {
    // jangan block build kalau ada error lint
    ignoreDuringBuilds: true
  },
  images: {
    domains: [
      "lh3.googleusercontent.com", // Google OAuth profile images
      "avatars.githubusercontent.com", // GitHub profile images
      "cdn.discordapp.com", // Discord avatars
      "res.cloudinary.com", // Cloudinary assets
      "supabase.co", // Supabase storage
      "replicate.delivery" // Replicate output
    ]
  },
  typescript: {
    // jangan block build kalau ada error ts
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
