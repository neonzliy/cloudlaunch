"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateEngagement() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/admin/engagements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientName: form.get("clientName"),
        clientEmail: form.get("clientEmail"),
        companyName: form.get("companyName"),
        creditAmount: Number(form.get("creditAmount")),
      }),
    });

    setLoading(false);
    if (res.ok) {
      setOpen(false);
      router.refresh();
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        + New Engagement
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-lg font-bold mb-4">New Engagement</h2>
        <div className="space-y-3">
          <input name="clientName" placeholder="Client name" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          <input name="clientEmail" type="email" placeholder="Client email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          <input name="companyName" placeholder="Company (optional)" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          <input name="creditAmount" type="number" placeholder="Credit amount ($)" required min="1" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
        </div>
        <div className="flex gap-2 mt-6">
          <button type="button" onClick={() => setOpen(false)} className="flex-1 border border-gray-300 text-gray-700 text-sm py-2 rounded-lg hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" disabled={loading} className="flex-1 bg-gray-900 text-white text-sm py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50">
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
