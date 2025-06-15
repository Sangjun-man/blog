const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  reactStrictMode: true,
}

module.exports = withContentlayer(nextConfig)
