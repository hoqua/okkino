//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io'
      }
    ]
  }
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx
]

module.exports = composePlugins(...plugins)(nextConfig)
