/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any image domains you need here
  },
  // Enable server components by default
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'your-production-domain.com'],
      bodySizeLimit: '2mb'
    }
  }
}

module.exports = nextConfig
