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
  }),
  db: z.object({
    POSTGRES_PRISMA_URL: z.string(),
    POSTGRES_URL_NON_POOLING: z.string()
  }),
  email: z.object({
    pass: z.string()
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
    POSTGRES_PRISMA_URL: process.env['POSTGRES_PRISMA_URL'],
    POSTGRES_URL_NON_POOLING: process.env['POSTGRES_URL_NON_POOLING']
  },
  email: {
    pass: process.env['EMAIL_PASS']
  }
})
