/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeFonts: true
  }
}

module.exports = nextConfig
