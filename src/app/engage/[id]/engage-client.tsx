"use client";

import { useState } from "react";
import Link from "next/link";

interface Engagement {
  id: string;
  client_name: string;
  client_email: string;
  company_name: string | null;
  credit_amount: number;
  fee_amount: number;
  status: string;
}

export function EngageClient({ engagement, queryStatus }: { engagement: Engagement; queryStatus?: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isSuccess = queryStatus === "success" || engagement.status === "card_on_file";
  const isCharged = engagement.status === "charged";
  const isPending = engagement.status === "pending";

  async function handleSetup() {
    setLoading(true);
    setError("");

    const res = await fetch("/api/engage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ engagementId: engagement.id }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.url) {
      window.location.href = data.url;
    } else {
      setError(data.error || "Something went wrong");
    }
  }

  return (
    <div className="bg-[#fafaf8] min-h-screen text-[#1a1a1a]">
      <nav className="border-b border-gray-200/60 px-6 py-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg tracking-tight">
            <span className="font-bold">base</span><span className="font-light">261</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-20">
        {isCharged ? (
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 className="text-2xl font-bold mb-2 font-heading">Payment complete</h1>
            <p className="text-gray-500 text-[15px]">Thank you for working with base261.</p>
          </div>
        ) : isSuccess ? (
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 className="text-2xl font-bold mb-2 font-heading">Card saved successfully</h1>
            <p className="text-gray-500 text-[15px] mb-6">We&apos;ll only charge your card after your cloud credits are approved. You&apos;ll receive an email confirmation.</p>
            <div className="bg-[#f0f0ec] rounded-xl p-6 text-left">
              <div className="flex justify-between mb-3"><span className="text-gray-500 text-sm">Credits applied for</span><span className="font-medium">${engagement.credit_amount.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-500 text-sm">Fee (25%, charged on approval)</span><span className="font-medium">${engagement.fee_amount.toLocaleString()}</span></div>
            </div>
          </div>
        ) : isPending ? (
          <>
            <p className="font-mono-label mb-4">Service Agreement</p>
            <h1 className="text-3xl font-bold mb-6 font-heading">Cloud Credits Engagement</h1>

            <div className="bg-[#f0f0ec] rounded-xl p-6 mb-8 space-y-4">
              <div className="flex justify-between"><span className="text-gray-500 text-sm">Client</span><span className="font-medium">{engagement.client_name}</span></div>
              {engagement.company_name && <div className="flex justify-between"><span className="text-gray-500 text-sm">Company</span><span className="font-medium">{engagement.company_name}</span></div>}
              <div className="flex justify-between"><span className="text-gray-500 text-sm">Credit amount</span><span className="font-medium">${engagement.credit_amount.toLocaleString()}</span></div>
              <div className="border-t border-gray-300 pt-4 flex justify-between"><span className="text-gray-500 text-sm">Service fee (25%)</span><span className="font-bold">${engagement.fee_amount.toLocaleString()}</span></div>
            </div>

            <div className="space-y-4 text-[15px] text-gray-500 leading-relaxed mb-8">
              <p>By adding your payment method, you agree to the following:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>base261 will guide your cloud credit application process</li>
                <li>Your card will only be charged after credits are approved and applied to your account</li>
                <li>The fee is 25% of the approved credit amount</li>
                <li>If your application is not approved, you will not be charged</li>
              </ul>
            </div>

            {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg mb-4">{error}</div>}

            <button
              onClick={handleSetup}
              disabled={loading}
              className="w-full bg-[#1a1a1a] hover:bg-[#333] text-white font-medium py-3.5 rounded-lg transition text-sm disabled:opacity-50"
            >
              {loading ? "Redirecting to Stripe..." : "Add Payment Method"}
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">Secured by Stripe. Your card will not be charged now.</p>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2 font-heading">Engagement in progress</h1>
            <p className="text-gray-500 text-[15px]">Status: {engagement.status}</p>
          </div>
        )}
      </div>
    </div>
  );
}
