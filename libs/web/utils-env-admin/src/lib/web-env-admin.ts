import * as process from 'node:process'
import { z } from 'zod'

const webAdminEnvSchema = z.object({
  auth: z.object({
    publicKey: z.string(),
    secretKey: z.string()
  }),
  deployHook: z.string().url(),
  email: z.object({
    name: z.string(),
    pass: z.string()
  })
})

type TWebAdminEnv = z.infer<typeof webAdminEnvSchema>

const getEnv =
  process.env['NODE_ENV'] === 'development' ? (env: TWebAdminEnv) => env : webAdminEnvSchema.parse

export const webAdminEnv = getEnv({
  auth: {
    publicKey: process.env['NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'],
    secretKey: process.env['CLERK_SECRET_KEY']
  },
  deployHook: process.env['DEPLOY_HOOK_URL'],
  email: {
    name: process.env['EMAIL_NAME'],
    pass: process.env['EMAIL_PASS']
  }
})
