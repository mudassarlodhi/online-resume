/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_HOST === 'github' || process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/online-resume' : '', 
  assetPrefix: isProd ? '/online-resume/' : '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
