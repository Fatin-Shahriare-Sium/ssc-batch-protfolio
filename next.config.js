/** @type {import('next').NextConfig} */
const withImages = require('next-images')
module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ['res.cloudinary.com']
  },
  env: {
    URL: 'http://localhost:5000/',
  },
  eslint: { ignoreDuringBuilds: true },
  webpack(config, options) {
    return config
  }
})
