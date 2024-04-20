import { authMiddleware } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

const ignoreRoute = '/api/uploadthing'
export default authMiddleware({
  publicRoutes: ['/sign-in', '/'],
  afterAuth(auth, req, evt) {
    if (req.url.includes(ignoreRoute)) {
      return NextResponse.next()
    }
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/sign-in', req.url)
      return NextResponse.redirect(signInUrl)
    } else if (auth.userId && auth.isPublicRoute) {
      const homeUrl = new URL('/dashboard', req.url)
      return NextResponse.redirect(homeUrl)
    }
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
