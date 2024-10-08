import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged in to upload a profile picture')

  return NextResponse.json({ success: true })
}
