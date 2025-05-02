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
    domains: [],
    remotePatterns: [],
  },
  module.exports = {
    output: 'export',
    // Add other configurations here if needed
  };  
  distDir: '.next',
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

export default nextConfig
