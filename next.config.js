/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    images: {
      domains: [
        "firebasestorage.googleapis.com",
        "lh3.googleusercontent.com",

      ]
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },
}

module.exports = nextConfig
