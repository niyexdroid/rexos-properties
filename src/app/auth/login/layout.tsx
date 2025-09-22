import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
  description:
    "Access the Rexos Properties admin dashboard. Secure authentication required.",
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
