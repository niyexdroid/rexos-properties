"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "General",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toasts, setToasts] = useState<
    { id: number; kind: "success" | "error"; msg: string }[]
  >([]);

  const pushToast = (kind: "success" | "error", msg: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, kind, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 5000);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // validation
    const newErrors: Record<string, string> = {};
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (form.phone && !/^\+?\d{7,15}$/.test(form.phone))
      newErrors.phone = "Invalid phone";
    if (form.subject.trim().length < 3) newErrors.subject = "Subject too short";
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setStatus(null);
      return;
    }
    setErrors({});
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("Message sent. We'll get back to you soon.");
      pushToast("success", "Message sent successfully");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "General",
        message: "",
      });
    } else setStatus("Failed to send message.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Heading */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tight text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-primary/70 leading-relaxed">
              We&apos;d love to hear from you! Fill the form below or reach out
              through any of our contact channels and we will get back to you as
              soon as possible.
            </p>
          </div>

          {/* Form Section (now on top) */}
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-semibold text-primary mb-8 leading-snug">
                Connect with our specialists for expert consultation and market
                insights
              </h2>
              <form onSubmit={submit} className="space-y-6" noValidate>
                {/* Row 1: Full name */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-primary"
                    htmlFor="fullName"
                  >
                    Full name
                  </label>
                  <input
                    id="fullName"
                    placeholder="Enter full name"
                    className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-primary"
                      htmlFor="phone"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      placeholder="+234"
                      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-primary"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Example@gmail.com"
                      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>
                {/* Row 3: Subject & Inquiry Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-primary"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      placeholder="e.g. Partnership"
                      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      required
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-600">{errors.subject}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="inquiryType"
                      className="text-sm font-medium text-primary"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      className="border rounded px-3 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={form.inquiryType}
                      onChange={(e) =>
                        setForm({ ...form, inquiryType: e.target.value })
                      }
                    >
                      <option>General</option>
                      <option>Sales</option>
                      <option>Support</option>
                      <option>Media</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>
                {/* Row 4: Message */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-primary"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter message"
                    className="border rounded px-3 py-2 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition disabled:opacity-50"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
                {status && status !== "sending" && (
                  <p className="text-sm text-primary/80">{status}</p>
                )}
              </form>
              {/* Toasts */}
              <div className="fixed bottom-4 right-4 space-y-2 z-50">
                {toasts.map((t) => (
                  <div
                    key={t.id}
                    className={`px-4 py-2 rounded shadow text-sm text-white ${
                      t.kind === "success" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {t.msg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch Section moved below */}
        <div className="mt-24 bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-semibold text-primary mb-8 leading-snug">
                  Get in Touch
                </h2>
                <ul className="space-y-6 text-primary/80 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">📍</span>
                    <span>
                      No 8B, Abiodun Ikorii Street, Lekki Phase 1, Lagos State.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">📞</span>
                    <span>+(234) 814412060</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">✉️</span>
                    <span>Rexosproperties@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden border h-72 w-full">
                <iframe
                  title="Office location map"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=Lekki%20Phase%201%20Lagos&output=embed`}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
