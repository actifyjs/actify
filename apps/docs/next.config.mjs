import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: 'export',
  transpilePackages: ['lucide-react']
}

export default withContentlayer(nextConfig)
