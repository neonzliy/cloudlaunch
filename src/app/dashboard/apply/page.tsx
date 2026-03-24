"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TIER_AMOUNTS: Record<string, number> = {
  founders: 1000,
  portfolio: 5000,
  portfolio_plus: 10000,
  portfolio_max: 100000,
};

const TIER_LABELS: Record<string, string> = {
  founders: "Founders — $1,000",
  portfolio: "Portfolio — $5,000",
  portfolio_plus: "Portfolio+ — $10,000",
  portfolio_max: "Portfolio Max — $100,000",
};

export default function ApplyPage() {
  const router = useRouter();
  const [awsAccountId, setAwsAccountId] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [creditTier, setCreditTier] = useState("");
  const [requestedAmount, setRequestedAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleTierChange(tier: string) {
    setCreditTier(tier);
    if (TIER_AMOUNTS[tier]) {
      setRequestedAmount(String(TIER_AMOUNTS[tier]));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        aws_account_id: awsAccountId,
        company_description: companyDescription,
        credit_tier: creditTier,
        requested_amount: Number(requestedAmount),
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Something went wrong");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold text-gray-900">
            Cloud<span className="text-amber-500">Trim</span>
          </Link>
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">
            &larr; Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Apply for AWS Activate Credits</h1>
        <p className="text-gray-500 text-sm mb-8">Fill out the form below and we&apos;ll handle the application process for you.</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">{error}</div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">AWS Account ID</label>
            <input
              type="text"
              value={awsAccountId}
              onChange={(e) => setAwsAccountId(e.target.value)}
              placeholder="123456789012"
              required
              pattern="\d{12}"
              title="AWS Account ID must be 12 digits"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-1">12-digit AWS account number</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Credit Tier</label>
            <select
              value={creditTier}
              onChange={(e) => handleTierChange(e.target.value)}
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="" disabled>Select a credit tier</option>
              {Object.entries(TIER_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Requested Amount ($)</label>
            <input
              type="number"
              value={requestedAmount}
              onChange={(e) => setRequestedAmount(e.target.value)}
              required
              min={1000}
              max={100000}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
            <textarea
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              required
              rows={4}
              placeholder="Tell us about your startup, what you're building, and how you plan to use AWS..."
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition text-sm disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
