export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { getAllProperties, upsertProperty, Property } from "@/data/properties";
import { auth } from "@/auth";

export async function GET() {
  return NextResponse.json(getAllProperties());
}

export async function POST(req: NextRequest) {
  const session = await auth();
  const role = (session as unknown as { role?: string } | null)?.role;
  if (!session || role !== "admin")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await req.json()) as Property;
  if (!body?.slug || !body?.name) {
    return NextResponse.json(
      { error: "Missing slug or name" },
      { status: 400 }
    );
  }
  upsertProperty(body);
  return NextResponse.json({ ok: true });
}
