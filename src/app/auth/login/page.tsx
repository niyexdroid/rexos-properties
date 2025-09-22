"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (res?.ok) router.push("/admin");
    else setError("Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={onSubmit}
        className="bg-white w-full max-w-sm p-6 rounded-lg shadow"
      >
        <h1 className="text-xl font-semibold mb-4 text-primary">Admin Login</h1>
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <label htmlFor="username" className="block text-sm mb-1 text-primary">
          Username
        </label>
        <input
          id="username"
          name="username"
          placeholder="Enter username"
          title="Username"
          className="w-full border rounded px-3 py-2 mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password" className="block text-sm mb-1 text-primary">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          title="Password"
          className="w-full border rounded px-3 py-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-primary text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
