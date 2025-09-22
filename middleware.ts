import { NextRequest, NextResponse } from "next/server";

// Edge-friendly middleware: heuristic check for NextAuth session cookie only.
// Authoritative authorization still enforced in server route handlers via auth().
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAdminPath =
    pathname.startsWith("/admin") &&
    !pathname.startsWith("/auth/login") &&
    !pathname.startsWith("/api/auth");
  const isWriteApi =
    pathname.startsWith("/api") &&
    ["POST", "PUT", "DELETE"].includes(req.method) &&
    !pathname.startsWith("/api/auth");
  const isAdminSensitiveApi = pathname.startsWith("/api/admin");

  if (isAdminPath || isWriteApi || isAdminSensitiveApi) {
    const sessionCookie =
      req.cookies.get("__Secure-next-auth.session-token") ||
      req.cookies.get("next-auth.session-token");
    const authed = !!sessionCookie;
    if (!authed) {
      if (isAdminPath) {
        const url = req.nextUrl.clone();
        url.pathname = "/auth/login";
        return NextResponse.redirect(url);
      }
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/((?!auth).)*"
  ],
};
