const { Qahiri } = require('next/font/google')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
  

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        
        {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            port: '',
            pathname: '/**',
          },

      ],
    },
  }