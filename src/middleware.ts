import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { REDIRECT_URLS } from "./lib/helpers/coreconstants";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  // console.log("m: Token Retrieved: ", token);

  if (req.nextUrl.pathname.startsWith(REDIRECT_URLS.ADMIN) && !token) {
    // console.log("m: Redirecting to /login due to missing token");
    return NextResponse.redirect(new URL(REDIRECT_URLS.LOGIN, req.url));
  }

  if (req.nextUrl.pathname.startsWith(REDIRECT_URLS.LOGIN) && token) {
    // console.log("m: Redirecting to /admin because user is authenticated");
    return NextResponse.redirect(new URL(REDIRECT_URLS.ADMIN, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
