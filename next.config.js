/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  distDir: process.env.NODE_ENV === 'production' ? 'out' : '.next',
  basePath: process.env.NODE_ENV === 'production' ? '/above' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/above/' : '',
  trailingSlash: true,
  // Development-specific optimizations
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  // Increase static generation performance
  experimental: {
    workerThreads: true,
    optimizeCss: true,
  }
}

module.exports = nextConfig 