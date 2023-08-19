//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx')

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
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
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
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com'
      }
    ]
  }
}

module.exports = withSentryConfig(withNx(nextConfig), sentryWebpackPluginOptions)
