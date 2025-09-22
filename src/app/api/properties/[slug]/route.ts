import { NextRequest, NextResponse } from "next/server";
import {
  getAllProperties,
  getPropertyBySlug,
  saveAllProperties,
  Property,
} from "@/data/properties";

const isAuthed = (req: NextRequest) =>
  req.cookies.get("session")?.value === "admin";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const params = await context.params;
  const item = getPropertyBySlug(params.slug);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const params = await context.params;
  if (!isAuthed(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await req.json()) as Property;
  if (body.slug && body.slug !== params.slug) {
    return NextResponse.json({ error: "Slug mismatch" }, { status: 400 });
  }
  const items = getAllProperties();
  const idx = items.findIndex((p) => p.slug === params.slug);
  if (idx < 0)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  items[idx] = { ...items[idx], ...body, slug: params.slug };
  saveAllProperties(items);
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const params = await context.params;
  if (!isAuthed(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const items = getAllProperties().filter((p) => p.slug !== params.slug);
  saveAllProperties(items);
  return NextResponse.json({ ok: true });
}
