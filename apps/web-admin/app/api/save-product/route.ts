import { currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const user = await currentUser()
  if (!user) throw new Error('You must be logged in to upload a profile picture')

  console.log(await request.json())
  return NextResponse.json({ success: true })
}
