/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/online-resume',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
