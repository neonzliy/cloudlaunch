"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Engagement {
  id: string;
  client_name: string;
  client_email: string;
  company_name: string | null;
  credit_amount: number;
  fee_amount: number;
  status: string;
  stripe_customer_id: string | null;
  admin_notes: string | null;
  created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  card_on_file: "bg-blue-100 text-blue-800",
  charged: "bg-green-100 text-green-800",
  failed: "bg-red-100 text-red-800",
};

export function EngagementRow({ engagement }: { engagement: Engagement }) {
  const [charging, setCharging] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const engageUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/engage/${engagement.id}`;

  async function handleCharge() {
    if (!confirm(`Charge $${engagement.fee_amount.toLocaleString()} to ${engagement.client_name}?`)) return;
    setCharging(true);

    const res = await fetch("/api/engage/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ engagementId: engagement.id }),
    });

    setCharging(false);
    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json();
      alert(`Charge failed: ${data.error}`);
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(engageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4">
        <div className="text-gray-900">{engagement.client_name}</div>
        <div className="text-gray-400 text-xs">{engagement.client_email}</div>
      </td>
      <td className="py-3 px-4 text-gray-500">{engagement.company_name || "-"}</td>
      <td className="py-3 px-4 text-gray-900">${engagement.credit_amount.toLocaleString()}</td>
      <td className="py-3 px-4 text-gray-900">${engagement.fee_amount.toLocaleString()}</td>
      <td className="py-3 px-4">
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${STATUS_COLORS[engagement.status] || "bg-gray-100 text-gray-600"}`}>
          {engagement.status.replace("_", " ")}
        </span>
      </td>
      <td className="py-3 px-4">
        <button onClick={copyLink} className="text-xs text-blue-600 hover:text-blue-800">
          {copied ? "Copied!" : "Copy link"}
        </button>
      </td>
      <td className="py-3 px-4">
        {engagement.status === "card_on_file" && (
          <button
            onClick={handleCharge}
            disabled={charging}
            className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {charging ? "Charging..." : `Charge $${engagement.fee_amount.toLocaleString()}`}
          </button>
        )}
        {engagement.status === "charged" && (
          <span className="text-xs text-green-600">Paid</span>
        )}
        {engagement.status === "pending" && (
          <span className="text-xs text-gray-400">Awaiting card</span>
        )}
      </td>
    </tr>
  );
}
