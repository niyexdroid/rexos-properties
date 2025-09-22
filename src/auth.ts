export const runtime = "nodejs"; // ensure Node.js APIs available where imported

import type { NextAuthOptions, User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import { getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyAdmin, getAdmin } from "@/data/admin";

// NextAuth configuration (v4 style). Using jwt strategy for simplicity.
type RoleUser = (User | AdapterUser) & { role?: string };
type JWTCallbackParams = {
  token: import("next-auth/jwt").JWT;
  user?: RoleUser;
  [key: string]: unknown;
};
type SessionCallbackParams = {
  session: import("next-auth").Session;
  token: import("next-auth/jwt").JWT;
  user?: RoleUser;
  [key: string]: unknown;
};

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (
        creds
      ): Promise<{ id: string; name: string; role: "admin" } | null> => {
        if (!creds?.username || !creds?.password) return null;
        if (!verifyAdmin(creds.username, creds.password)) return null;
        const admin = getAdmin();
        return { id: admin.username, name: admin.username, role: "admin" };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: JWTCallbackParams) {
      const t = token as typeof token & { role?: string };
      if (user && user.role === "admin") {
        t.role = "admin";
      }
      return t;
    },
    async session({ session, token }: SessionCallbackParams) {
      const t = token as typeof token & { role?: string };
      const s = session as typeof session & { role?: string };
      if (t.role) s.role = t.role;
      return s;
    },
  },
};

// Helper for server route handlers / server components
export const auth = () => getServerSession(authOptions);
