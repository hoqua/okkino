import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module, no-var
var Negotiator = require('negotiator')
import { i18n } from './i18n/i18n-config'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  for (const [key, value] of request.headers.entries()) {
    negotiatorHeaders[key] = value
  }

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  return matchLocale(languages, locales, i18n.defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/logo.svg'
      // Your other files in `public`
    ].includes(pathname) ||
    pathname.startsWith('/static-images/')
  )
    return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
