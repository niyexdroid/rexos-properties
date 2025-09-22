import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description:
    "Rexos Properties admin dashboard for managing properties, messages, and settings.",
};

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  const role = (session as unknown as { role?: string } | null)?.role;
  if (!session || role !== "admin") {
    redirect("/auth/login");
  }
  return <>{children}</>;
}
