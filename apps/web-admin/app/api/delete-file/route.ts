import { UTApi } from 'uploadthing/server'
import { currentUser } from '@clerk/nextjs/server'
import { z } from 'zod'
import { NextResponse } from 'next/server'

const utapi = new UTApi()

export async function POST(request: Request) {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged in to upload a profile picture')

  const image = z.object({ key: z.string() }).parse(await request.json())
  await utapi.deleteFiles(image.key)

  return NextResponse.json({ success: true })
}
