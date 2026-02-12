/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for Cloudflare Pages
  output: 'export',
  images: {
    // No server-side optimizer in static export; Open Library CDN handles optimization
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        pathname: '/b/**',
      },
    ],
  },
  // Enable compression
  compress: true,
  // Reduce powered-by header
  poweredByHeader: false,
  // React strict mode for dev correctness
  reactStrictMode: true,
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize package imports to reduce bundle size
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig
