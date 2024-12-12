import { NextRequest, NextResponse } from 'next/server';

const supportedLocales = ['en', 'ar']; // Define supported locales
const defaultLocale = 'en'; // Default locale

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already includes a locale
  const localeMatch = pathname.match(/^\/(ar|en)/);

  if (!localeMatch) {
    // Try to get the locale from cookies
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

    // Try to get the locale from the Accept-Language header
    const headerLocale = request.headers.get('accept-language')?.split(',')[0].split('-')[0]; // e.g., "en-US" -> "en"
    const detectedLocale =
      cookieLocale && supportedLocales.includes(cookieLocale)
        ? cookieLocale
        : headerLocale && supportedLocales.includes(headerLocale)
          ? headerLocale
          : defaultLocale;

    // Redirect to the detected or default locale
    const url = request.nextUrl.clone();
    url.pathname = `/${detectedLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // If a locale is in the path, set it in the cookie for future requests
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', localeMatch[1]);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ], // Apply middleware to all routes except static files
};
