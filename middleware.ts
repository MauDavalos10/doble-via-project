import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = ["es", "en"].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If no locale is present, redirect to Spanish
  if (pathnameIsMissingLocale && pathname !== "/") {
    return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
  }

  // For the root path, serve Spanish content
  if (pathname === "/") {
    const response = NextResponse.next();
    response.headers.set("content-language", "es");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except for API routes, static files, etc.
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
