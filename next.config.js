/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [],
  },
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/above' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/above/' : '',
  // Ensure no page is using an Image component with a remote source
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  trailingSlash: true,
}

// This is crucial for GitHub pages deployment
if (process.env.NODE_ENV === 'production') {
  console.log('Building for production with export output to ./out directory')
} 