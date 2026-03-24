"use client";

import { useState } from "react";

const PRICING = {
  standard: {
    monthly: { price: "$10", period: "/mo", label: "Standard Monthly" },
    yearly: { price: "$96", period: "/yr", label: "Standard Yearly", savings: "Save 20%" },
  },
  premium: {
    monthly: { price: "$30", period: "/mo", label: "Premium Monthly" },
    yearly: { price: "$288", period: "/yr", label: "Premium Yearly", savings: "Save 20%" },
  },
};

export function UpgradeButton() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(plan: "standard" | "premium", billing: "monthly" | "yearly") {
    setLoading(`${plan}-${billing}`);
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan, billing }),
    });
    const { url } = await res.json();
    if (url) window.location.href = url;
    setLoading(null);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
      >
        Upgrade Plan
      </button>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Choose a Plan</h3>
        <button onClick={() => setOpen(false)} className="text-sm text-gray-400 hover:text-gray-600">Cancel</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {(["standard", "premium"] as const).map((plan) => (
          <div key={plan} className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-semibold text-gray-900 capitalize mb-3">{plan}</h4>
            <p className="text-xs text-amber-500 mb-4">
              Up to {plan === "standard" ? "$5,000" : "$10,000"} AWS credits
            </p>
            <div className="space-y-2">
              {(["yearly", "monthly"] as const).map((billing) => {
                const info = PRICING[plan][billing];
                const key = `${plan}-${billing}`;
                return (
                  <button
                    key={key}
                    onClick={() => handleCheckout(plan, billing)}
                    disabled={loading !== null}
                    className="w-full flex items-center justify-between px-4 py-2.5 border border-gray-200 hover:border-amber-500 rounded-lg text-sm transition disabled:opacity-50"
                  >
                    <span className="text-gray-700">
                      <strong className="text-gray-900">{info.price}</strong>{info.period}
                    </span>
                    <span>
                      {"savings" in info && (
                        <span className="text-green-600 text-xs font-semibold">{info.savings}</span>
                      )}
                      {loading === key && <span className="text-gray-400 text-xs ml-2">Loading...</span>}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
