import { NextRequest, NextResponse } from "next/server";
import { getAdmin, updatePassword, verifyAdmin } from "../../../../data/admin";
import { auth } from "@/auth";

export const runtime = "nodejs"; // ensure Node APIs available for fs/crypto in data layer

export async function GET() {
  const admin = getAdmin();
  return NextResponse.json({ username: admin.username });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  const role = (session as unknown as { role?: string } | null)?.role;
  if (!session || role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const { currentPassword, newPassword } = body || {};
  if (!currentPassword || !newPassword) {
    return NextResponse.json(
      { error: "currentPassword and newPassword required" },
      { status: 400 }
    );
  }
  const admin = getAdmin();
  const ok = verifyAdmin(admin.username, currentPassword);
  if (!ok) {
    return NextResponse.json(
      { error: "Current password incorrect" },
      { status: 401 }
    );
  }
  if (String(newPassword).length < 6) {
    return NextResponse.json(
      { error: "New password must be at least 6 characters" },
      { status: 400 }
    );
  }
  updatePassword(newPassword);
  return NextResponse.json({ ok: true });
}
