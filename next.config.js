/** @type {import('next').NextConfig} */
const NextFederation = require('@module-federation/nextjs-mf')
const path = require('path')

const nextConfig = {
  webpack: (config, options) => {
    if (!options.isServer) {
      config.output = {
        ...config.output,
        publicPath: 'auto',
      }

      config.plugins.push(
        new NextFederation({
          name: 'automations',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './AutomationsApp': './src/pages/automations/index.tsx',
          },
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
            'react-dom': {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
          },
        })
      )
    }
    return config
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: '*' },
        ],
      },
      {
        source: '/_next/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
      {
        source: '/static/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ]
  },
}

module.exports = nextConfig
