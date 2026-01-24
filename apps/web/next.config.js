//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx')

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction

const { withSentryConfig, wrapApiHandlerWithSentry } = require('@sentry/nextjs')

const sentryWebpackPluginOptions = {
  org: 'okkino',
  project: 'okkino-web',

  // An auth token is required for uploading source maps.
  // You can get an auth token from https://sentry.io/settings/account/api/auth-tokens/
  // The token must have `project:releases` and `org:read` scopes for uploading source maps
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: true // Suppresses all logs
}

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  headers: async () => [
    {
      // Static assets - aggressive caching
      source: '/static-images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ],
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers
    // NB: cannot be enabled until we find a way to scrum cookies, otherwise it exceeds the cookie limit
    // tunnelRoute: '/monitoring',
    // Hides source maps from generated client bundles
    hideSourceMaps: true,
    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io'
      }
    ]
  }
}

module.exports = withSentryConfig(withNx(nextConfig), sentryWebpackPluginOptions)
