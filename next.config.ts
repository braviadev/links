import type { NextConfig } from 'next'

import './src/env'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bravía.com'
      }
    ]
  }
}

export default nextConfig
