import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const metadata = {
  title: "Admin Dashboard",
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
