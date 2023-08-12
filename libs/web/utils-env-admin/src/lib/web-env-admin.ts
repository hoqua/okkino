import * as process from 'node:process'
import { z } from 'zod'

const webAdminEnvSchema = z.object({
  auth: z.object({
    publicKey: z.string(),
    secretKey: z.string()
  })
})

type TWebAdminEnv = z.infer<typeof webAdminEnvSchema>

const getEnv =
  process.env['NODE_ENV'] === 'development' ? (env: TWebAdminEnv) => env : webAdminEnvSchema.parse

export const webAdminEnv = getEnv({
  auth: {
    publicKey: process.env['NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'],
    secretKey: process.env['CLERK_SECRET_KEY']
  }
})
