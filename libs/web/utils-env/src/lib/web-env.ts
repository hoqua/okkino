import * as process from 'node:process'
import { z } from 'zod'

const webEnvSchema = z.object({
  isProd: z.boolean(),
  api: z.object({
    gqlUrl: z.string().url()
  }),
  storage: z.object({
    url: z.string().url(),
    endpoint: z.string()
  })
})

type TWebEnv = z.infer<typeof webEnvSchema>

const getEnv = process.env['OKKINO_ENV'] === 'build' ? (env: TWebEnv) => env : webEnvSchema.parse

export const webEnv = getEnv({
  isProd: process.env['OKKINO_ENV'] === 'production',
  api: {
    gqlUrl: process.env['OKKINO_WEB_GQL_URL']
  },
  storage: {
    url: process.env['OKKINO_WEB_STORAGE_URL'],
    endpoint: process.env['OKKINO_WEB_STORAGE_ENDPOINT']
  }
})
