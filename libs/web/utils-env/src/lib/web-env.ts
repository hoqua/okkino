import * as process from 'node:process'
import { z } from 'zod'

const webEnvSchema = z.object({
  stripe: z.object({
    publishableKey: z.string(),
    secretKey: z.string(),
    endpointSecret: z.string()
  }),
  sentry: z.object({
    auth: z.string()
  })
})

type TWebEnv = z.infer<typeof webEnvSchema>

const getEnv =
  process.env['NODE_ENV'] === 'development' ? (env: TWebEnv) => env : webEnvSchema.parse

export const webEnv = getEnv({
  stripe: {
    publishableKey: process.env['NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'],
    secretKey: process.env['STRIPE_SECRET_KEY'],
    endpointSecret: process.env['STRIPE_ENDPOINT_SECRET']
  },
  sentry: {
    auth: process.env['SENTRY_AUTH_TOKEN']
  },
  db: {
    DB_URL: process.env['DB_URL'],
    DB_URL_NON_POOLING: process.env['DB_URL_NON_POOLING']
  }
})
