'use server'

import { webAdminEnv } from '@okkino/web/utils-env-admin'
import { currentUser } from '@clerk/nextjs'

export async function redeploy() {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged in to redeploy')

  await fetch(webAdminEnv.deployHook, { method: 'GET' })
}
