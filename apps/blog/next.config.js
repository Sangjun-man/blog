const { withContentlayer } = require('next-contentlayer2')

const outputMode = process.env.NEXT_OUTPUT_MODE
const isSupportedOutputMode = outputMode === 'standalone' || outputMode === 'export'

if (outputMode && !isSupportedOutputMode) {
  throw new Error(`Invalid NEXT_OUTPUT_MODE='${outputMode}'. Use 'standalone' or 'export'.`)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  reactStrictMode: true,
  ...(isSupportedOutputMode ? { output: outputMode } : {}),
  ...(outputMode === 'export'
    ? {
        images: {
          unoptimized: true,
        },
      }
    : {}),
}

module.exports = withContentlayer(nextConfig)
