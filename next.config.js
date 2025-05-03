/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

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
  output: 'export',
  distDir: 'out',
  basePath: isProd ? '/above' : '',
  assetPrefix: isProd ? '/above/' : '',
  // Ensure no page is using an Image component with a remote source
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  trailingSlash: true,
};

// This is crucial for GitHub pages deployment
if (isProd) {
  console.log('Building for production with export output to ./out directory');
}

module.exports = nextConfig; 