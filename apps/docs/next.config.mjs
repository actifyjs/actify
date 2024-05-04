import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true
}

export default withContentlayer(nextConfig)
