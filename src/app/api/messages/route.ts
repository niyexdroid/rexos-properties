export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { auth } from "@/auth";
const dataDir = path.join(process.cwd(), "data");
const messagesPath = path.join(dataDir, "messages.json");

type Message = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  inquiryType?: string;
  message: string;
  createdAt: string;
};

const readMessages = (): Message[] => {
  if (!fs.existsSync(messagesPath))
    fs.writeFileSync(messagesPath, "[]", "utf8");
  return JSON.parse(fs.readFileSync(messagesPath, "utf8"));
};
const writeMessages = (items: Message[]) =>
  fs.writeFileSync(messagesPath, JSON.stringify(items, null, 2), "utf8");

export async function GET() {
  const session = await auth();
  const role = (session as unknown as { role?: string } | null)?.role;
  if (!session || role !== "admin")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(readMessages());
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const items = readMessages();
  const msg: Message = {
    id: `${Date.now()}`,
    name: body.name,
    email: body.email,
    phone: body.phone,
    subject: body.subject,
    inquiryType: body.inquiryType,
    message: body.message,
    createdAt: new Date().toISOString(),
  };
  items.push(msg);
  writeMessages(items);
  return NextResponse.json({ ok: true, id: msg.id });
}
