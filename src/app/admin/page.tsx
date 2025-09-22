"use client";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

type Property = {
  slug: string;
  name: string;
  location: string;
  heroImage: string;
  images: string[];
  description: string;
  amenities: string[];
  bedrooms?: number;
  bathrooms?: number;
  areaSqft?: number;
  propertyType?: string;
  status?: string;
  mapQuery?: string;
};

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

export default function AdminDashboard() {
  const [tab, setTab] = useState<"properties" | "messages" | "settings">(
    "properties"
  );
  const [pwState, setPwState] = useState<
    | { status: "idle" }
    | { status: "saving" }
    | { status: "error"; message: string }
    | { status: "success" }
  >({ status: "idle" });
  const [items, setItems] = useState<Property[]>([]);
  const [editing, setEditing] = useState<Property | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const emptyProperty: Property = useMemo(
    () => ({
      slug: "",
      name: "",
      location: "",
      heroImage: "",
      images: [],
      description: "",
      amenities: [],
    }),
    []
  );

  const load = async () => {
    const res = await fetch("/api/properties", { cache: "no-store" });
    if (res.ok) setItems(await res.json());
  };
  const loadMessages = async () => {
    const res = await fetch("/api/messages", { cache: "no-store" });
    if (res.ok) setMessages(await res.json());
  };
  useEffect(() => {
    load();
    loadMessages();
  }, []);

  const save = async (p: Property) => {
    setLoading(true);
    const res = await fetch("/api/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p),
    });
    setLoading(false);
    if (res.ok) {
      setEditing(null);
      load();
    } else alert("Failed to save property");
  };

  const remove = async (slug: string) => {
    if (!confirm("Delete this property?")) return;
    const res = await fetch(`/api/properties/${slug}`, { method: "DELETE" });
    if (res.ok) load();
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    const res = await fetch(`/api/messages/${id}`, { method: "DELETE" });
    if (res.ok) loadMessages();
  };

  const logout = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-semibold text-primary">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm underline">
              View site
            </Link>
            <button
              onClick={logout}
              className="text-sm bg-primary text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setTab("properties")}
            className={`px-3 py-1 rounded ${
              tab === "properties" ? "bg-primary text-white" : "bg-white border"
            }`}
          >
            Properties
          </button>
          <button
            onClick={() => setTab("messages")}
            className={`px-3 py-1 rounded ${
              tab === "messages" ? "bg-primary text-white" : "bg-white border"
            }`}
          >
            Messages
          </button>
          <button
            onClick={() => setTab("settings")}
            className={`px-3 py-1 rounded ${
              tab === "settings" ? "bg-primary text-white" : "bg-white border"
            }`}
          >
            Settings
          </button>
        </div>

        {tab === "properties" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded border p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold">All Properties</h2>
                <button
                  onClick={() => setEditing({ ...emptyProperty })}
                  className="bg-primary text-white px-3 py-1 rounded"
                >
                  New
                </button>
              </div>
              <div className="overflow-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-2 pr-4">Name</th>
                      <th className="py-2 pr-4">Slug</th>
                      <th className="py-2 pr-4">Location</th>
                      <th className="py-2 pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((p) => (
                      <tr key={p.slug} className="border-b">
                        <td className="py-2 pr-4">{p.name}</td>
                        <td className="py-2 pr-4">{p.slug}</td>
                        <td className="py-2 pr-4">{p.location}</td>
                        <td className="py-2 pr-4 flex gap-2">
                          <button
                            onClick={() => setEditing(p)}
                            className="text-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => remove(p.slug)}
                            className="text-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded border p-4">
              <h2 className="font-semibold mb-2">
                {editing ? "Edit" : "Create"} Property
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!editing) return;
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const images = String(data.get("images") || "")
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean);
                  const amenities = String(data.get("amenities") || "")
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean);
                  const payload: Property = {
                    slug: String(data.get("slug") || editing.slug),
                    name: String(data.get("name") || editing.name),
                    location: String(data.get("location") || editing.location),
                    heroImage: String(
                      data.get("heroImage") || editing.heroImage
                    ),
                    images: images.length ? images : editing.images,
                    description: String(
                      data.get("description") || editing.description
                    ),
                    amenities: amenities.length ? amenities : editing.amenities,
                    // Quick fact fields removed from form; preserve any existing values
                    bedrooms: editing.bedrooms,
                    bathrooms: editing.bathrooms,
                    areaSqft: editing.areaSqft,
                    propertyType: editing.propertyType,
                    status: editing.status,
                    mapQuery: String(
                      data.get("mapQuery") || editing.mapQuery || ""
                    ),
                  };
                  save(payload);
                }}
              >
                <div className="grid grid-cols-1 gap-3">
                  <input
                    name="name"
                    placeholder="Name"
                    className="border rounded px-2 py-1"
                    defaultValue={editing?.name}
                    required
                  />
                  <input
                    name="slug"
                    placeholder="Slug (unique)"
                    className="border rounded px-2 py-1"
                    defaultValue={editing?.slug}
                    required
                  />
                  <input
                    name="location"
                    placeholder="Location"
                    className="border rounded px-2 py-1"
                    defaultValue={editing?.location}
                    required
                  />
                  <input
                    name="heroImage"
                    placeholder="Hero image path e.g. /assets/houseimg-1.jpg"
                    className="border rounded px-2 py-1"
                    defaultValue={editing?.heroImage}
                    required
                  />
                  <input
                    name="images"
                    placeholder="Images (comma-separated)"
                    className="border rounded px-2 py-1"
                    defaultValue={editing?.images?.join(", ")}
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    className="border rounded px-2 py-1"
                    defaultValue={editing?.description}
                    rows={3}
                  />
                  <input
                    name="amenities"
                    placeholder="Amenities (comma-separated)"
                    className="border rounded px-2 py-1"
                    defaultValue={editing?.amenities?.join(", ")}
                  />
                  {/* Quick fact fields (bedrooms, bathrooms, area, propertyType, status) intentionally removed */}
                  <input
                    name="mapQuery"
                    placeholder="Map query (e.g., Oral Estate, Lekki, Lagos)"
                    className="border rounded px-2 py-1"
                    defaultValue={editing?.mapQuery}
                  />
                  <div className="flex gap-2">
                    <button
                      disabled={loading}
                      className="bg-primary text-white px-3 py-1 rounded"
                    >
                      {loading ? "Saving..." : "Save"}
                    </button>
                    {editing && (
                      <button
                        type="button"
                        onClick={() => setEditing(null)}
                        className="border px-3 py-1 rounded"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {tab === "messages" && (
          <div className="bg-white rounded border p-4">
            <h2 className="font-semibold mb-3">Contact Messages</h2>
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Email</th>
                    <th className="py-2 pr-4">Subject</th>
                    <th className="py-2 pr-4">Type</th>
                    <th className="py-2 pr-4">Phone</th>
                    <th className="py-2 pr-4">Message</th>
                    <th className="py-2 pr-4">When</th>
                    <th className="py-2 pr-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((m) => (
                    <tr key={m.id} className="border-b align-top">
                      <td className="py-2 pr-4">{m.name}</td>
                      <td className="py-2 pr-4">{m.email}</td>
                      <td className="py-2 pr-4">{m.subject || "-"}</td>
                      <td className="py-2 pr-4">{m.inquiryType || "-"}</td>
                      <td className="py-2 pr-4">{m.phone || "-"}</td>
                      <td className="py-2 pr-4 max-w-[400px]">{m.message}</td>
                      <td className="py-2 pr-4 whitespace-nowrap">
                        {new Date(m.createdAt).toLocaleString()}
                      </td>
                      <td className="py-2 pr-4 flex gap-3">
                        <a
                          href={`mailto:${m.email}?subject=Re:%20Your%20message%20to%20Rexos%20Properties`}
                          className="text-blue-600"
                        >
                          Reply
                        </a>
                        <button
                          onClick={() => deleteMessage(m.id)}
                          className="text-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div className="bg-white rounded border p-4 max-w-md">
            <h2 className="font-semibold mb-4">Settings</h2>
            <h3 className="text-sm font-medium mb-2 text-primary">
              Change Admin Password
            </h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const currentPassword = String(
                  data.get("currentPassword") || ""
                );
                const newPassword = String(data.get("newPassword") || "");
                if (!currentPassword || !newPassword) return;
                setPwState({ status: "saving" });
                const res = await fetch("/api/admin/password", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ currentPassword, newPassword }),
                });
                if (res.ok) {
                  setPwState({ status: "success" });
                  form.reset();
                  setTimeout(() => setPwState({ status: "idle" }), 3000);
                } else {
                  const json = await res.json().catch(() => ({}));
                  setPwState({
                    status: "error",
                    message: json.error || "Failed",
                  });
                }
              }}
              className="space-y-3"
            >
              {pwState.status === "error" && (
                <p className="text-red-600 text-sm">{pwState.message}</p>
              )}
              {pwState.status === "success" && (
                <p className="text-green-600 text-sm">Password updated.</p>
              )}
              <div>
                <label className="block text-xs font-medium mb-1 text-primary">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  title="Current Password"
                  placeholder="Enter current password"
                  className="border rounded px-2 py-1 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 text-primary">
                  New Password (min 6 chars)
                </label>
                <input
                  type="password"
                  name="newPassword"
                  title="New Password"
                  placeholder="Enter new password"
                  minLength={6}
                  className="border rounded px-2 py-1 w-full"
                  required
                />
              </div>
              <button
                disabled={pwState.status === "saving"}
                className="bg-primary text-white px-3 py-1 rounded"
              >
                {pwState.status === "saving"
                  ? "Updating..."
                  : "Update Password"}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              Note: This simple demo stores a hashed password in a local JSON
              file. For production, use a real user database & strong credential
              policies.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
