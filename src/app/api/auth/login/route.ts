import { NextRequest, NextResponse } from "next/server";

// In a real app, use hashed passwords and env secrets
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "password";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { username, password } = body || {};
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("session", "admin", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 4, // 4 hours
    });
    return res;
  }
  return NextResponse.json(
    { ok: false, error: "Invalid credentials" },
    { status: 401 }
  );
}
