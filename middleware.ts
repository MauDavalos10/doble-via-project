import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  // Always set Spanish as the content language for SEO
  response.headers.set("content-language", "es");
  response.headers.set("accept-language", "es");

  return response;
}

export const config = {
  matcher: [
    // Match all paths except for API routes, static files, etc.
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
