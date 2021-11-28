/** @type {import('next').NextConfig} */
const withImages = require('next-images')
module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ['images.unsplash.com']
  },
  env: {
    URL: 'http://localhost:5000/',
  },
  webpack(config, options) {
    return config
  }
})
