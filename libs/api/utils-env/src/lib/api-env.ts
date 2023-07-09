import * as process from 'node:process'
import { z } from 'zod'

const apiEnvSchema = z.object({
  isProd: z.boolean(),
  api: z.object({
    port: z.number()
  }),
  db: z.object({
    url: z.string().url()
  }),
  auth: z.object({
    jwtVerifyKey: z.string()
  })
})

export type TApiEnv = z.infer<typeof apiEnvSchema>

export const apiEnv = apiEnvSchema.parse({
  isProd: process.env['OKKINO_ENV'] === 'production',
  api: {
    port: Number(process.env['OKKINO_API_PORT'])
  },
  db: {
    url: process.env['OKKINO_DB_URL']
  },
  auth: {
    jwtVerifyKey: process.env['CLERK_JWT_VERIFICATION_KEY']
  }
})
