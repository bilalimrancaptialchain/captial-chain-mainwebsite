"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type SubmitState = "idle" | "submitting" | "success" | "error";

const TOPICS = [
  "Technical Issue",
  "General Issue",
  "Community Engagement Free Program Issue",
];

export default function SupportTicketPage() {
  const [state, setState] = useState<SubmitState>("idle");
  const [form, setForm] = useState({
    email: "",
    name: "",
    topic: TOPICS[0],
    message: "",
    hp: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "submitting") return;
    setState("submitting");
    try {
      const res = await fetch("/api/intercom/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      setForm({ email: "", name: "", topic: TOPICS[0], message: "", hp: "" });
      setTimeout(() => setState("idle"), 4000);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 md:pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white">Create a Support Ticket</h1>
            <p className="text-white/70 mt-2">Choose a topic and describe the issue. We'll reach out via email.</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6 border border-[#00E0E0] bg-[#041933] rounded-lg p-6">
            {/* Honeypot */}
            <input type="text" name="hp" value={form.hp} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-3 py-3 bg-[#022143] border-[0.5px] border-[#00E0E0] rounded-lg text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-3 bg-[#022143] border-[0.5px] border-[#00E0E0] rounded-lg text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Topic</label>
              <select
                name="topic"
                value={form.topic}
                onChange={onChange}
                className="w-full px-3 py-3 bg-[#022143] border-[0.5px] border-[#00E0E0] rounded-lg text-white focus:outline-none"
              >
                {TOPICS.map((t) => (
                  <option key={t} value={t} className="bg-[#022143]">{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                required
                placeholder="Describe the issue..."
                className="w-full px-3 py-3 bg-[#022143] border-[0.5px] border-[#00E0E0] rounded-lg text-white placeholder-gray-400 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={state === "submitting"}
              className={`w-full font-display px-6 py-3 rounded-lg text-white transition-colors ${
                state === "submitting"
                  ? "bg-gray-500 cursor-not-allowed"
                  : state === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : state === "error"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gradient-to-b from-[#00E0E0] to-[#10B981]"
              }`}
            >
              {state === "submitting" ? "Submitting..." : state === "success" ? "✓ Sent" : state === "error" ? "✗ Failed" : "Submit Ticket"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}


