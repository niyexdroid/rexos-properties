import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const isAuthed = (req: NextRequest) =>
  req.cookies.get("session")?.value === "admin";
const dataDir = path.join(process.cwd(), "data");
const messagesPath = path.join(dataDir, "messages.json");

interface MessageRec {
  id: string;
  [key: string]: unknown;
}
const readMessages = (): MessageRec[] =>
  JSON.parse(fs.readFileSync(messagesPath, "utf8"));
const writeMessages = (items: MessageRec[]) =>
  fs.writeFileSync(messagesPath, JSON.stringify(items, null, 2), "utf8");

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  if (!isAuthed(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const items = readMessages().filter((m) => m.id !== params.id);
  writeMessages(items);
  return NextResponse.json({ ok: true });
}
