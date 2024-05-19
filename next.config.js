/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['react-hotjar'],
  // Add configuration for next-images plugin
  ...withImages()
}

module.exports = nextConfig
