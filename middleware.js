import { NextResponse } from 'next/server'

const LOCALES = ['en', 'pt', 'es']
const DEFAULT_LOCALE = 'en'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Check if the pathname already has a locale prefix
  const pathnameHasLocale = LOCALES.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Rewrite to default locale (English) — URL stays clean (no /en/ prefix)
  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next|api|admin|.*\\..*).*)'],
}
