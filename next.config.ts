import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    globalNotFound: true,
  },
}

export default createNextIntlPlugin()(nextConfig)
