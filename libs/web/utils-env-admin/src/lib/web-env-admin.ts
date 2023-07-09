import * as process from 'node:process'
import { z } from 'zod'

const webAdminEnvSchema = z.object({
  isProd: z.boolean(),
  api: z.object({
    gqlUrl: z.string().url()
  }),
  storage: z.object({
    url: z.string().url(),
    endpoint: z.string()
  }),
  auth: z.object({
    publicKey: z.string(),
    secretKey: z.string()
  })
})

type TWebAdminEnv = z.infer<typeof webAdminEnvSchema>

const getEnv =
  process.env['OKKINO_ENV'] === 'build' ? (env: TWebAdminEnv) => env : webAdminEnvSchema.parse

export const webAdminEnv = getEnv({
  isProd: process.env['OKKINO_ENV'] === 'production',
  api: {
    gqlUrl: process.env['OKKINO_WEB_ADMIN_GQL_URL']
  },
  storage: {
    url: process.env['OKKINO_WEB_ADMIN_STORAGE_URL'],
    endpoint: process.env['OKKINO_WEB_ADMIN_STORAGE_ENDPOINT']
  },
  auth: {
    publicKey: process.env['NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'],
    secretKey: process.env['CLERK_SECRET_KEY']
  }
})
