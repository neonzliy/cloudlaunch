"use client";

import { useState } from "react";
import Link from "next/link";

const TIERS = {
  free: {
    name: "Free",
    audience: "Students, solo founders, aspiring entrepreneurs",
    credits: "$1,000 Founders credits",
    features: [
      "AWS Activate Founders program",
      "Basic startup resources",
      "Community access",
      "Email support",
    ],
    cta: "Sign Up Free",
    highlighted: false,
  },
  standard: {
    name: "Standard",
    audience: "Startups, micro-businesses, incubators",
    monthly: "$10",
    yearly: "$96",
    credits: "Up to $5,000 Portfolio credits",
    features: [
      "AWS Activate Portfolio program",
      "Application drafting support",
      "1-on-1 guidance calls",
      "Priority email support",
      "Startup tools & resources",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  premium: {
    name: "Premium",
    audience: "Scaleups, accelerators, venture capital firms",
    monthly: "$30",
    yearly: "$288",
    credits: "Up to $10,000 Portfolio+ credits",
    features: [
      "Everything in Standard",
      "Dedicated account manager",
      "Application review & optimization",
      "AWS technical architecture advice",
      "Priority processing",
      "Partner perks marketplace",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  enterprise: {
    name: "Enterprise",
    audience: "Large organizations, universities, corporations",
    credits: "Up to $100,000 credits",
    features: [
      "Everything in Premium",
      "Custom enterprise solutions",
      "Unlimited team seats",
      "SLA support agreement",
      "Dedicated infrastructure review",
      "Custom billing",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className={`text-sm font-medium ${!isYearly ? "text-slate-800" : "text-gray-400"}`}>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative w-14 h-7 rounded-full transition ${isYearly ? "bg-amber-500" : "bg-gray-300"}`}
        >
          <span
            className="absolute top-1 w-5 h-5 bg-white rounded-full transition-transform"
            style={{ left: isYearly ? "1.75rem" : "0.25rem" }}
          />
        </button>
        <span className={`text-sm font-medium ${isYearly ? "text-slate-800" : "text-gray-400"}`}>
          Yearly <span className="text-green-500 font-semibold">Save 20%</span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {/* Free */}
        <PricingCard tier={TIERS.free} price="$0" period="/forever" isYearly={isYearly} />

        {/* Standard */}
        <PricingCard
          tier={TIERS.standard}
          price={isYearly ? TIERS.standard.yearly! : TIERS.standard.monthly!}
          period={isYearly ? " / year" : " / month"}
          isYearly={isYearly}
        />

        {/* Premium */}
        <PricingCard
          tier={TIERS.premium}
          price={isYearly ? TIERS.premium.yearly! : TIERS.premium.monthly!}
          period={isYearly ? " / year" : " / month"}
          isYearly={isYearly}
        />

        {/* Enterprise */}
        <PricingCard tier={TIERS.enterprise} price="Custom" period="" isYearly={isYearly} />
      </div>
    </div>
  );
}

function PricingCard({
  tier,
  price,
  period,
}: {
  tier: (typeof TIERS)[keyof typeof TIERS];
  price: string;
  period: string;
  isYearly: boolean;
}) {
  const borderClass = tier.highlighted
    ? "border-2 border-amber-500 relative shadow-lg"
    : "border border-gray-200";

  const buttonClass = tier.highlighted
    ? "bg-amber-500 hover:bg-amber-600 text-white"
    : "border border-gray-300 hover:border-slate-800 text-slate-800";

  return (
    <div className={`bg-white rounded-xl p-7 flex flex-col ${borderClass}`}>
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-800 mb-1">{tier.name}</h3>
      <p className="text-xs text-gray-500 mb-5">{tier.audience}</p>
      <p className="mb-1">
        <span className="text-3xl font-bold text-slate-800">{price}</span>
        <span className="text-sm text-gray-500">{period}</span>
      </p>
      <p className="text-sm text-amber-500 mb-6">{tier.credits}</p>
      <ul className="space-y-3 text-sm text-gray-500 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-amber-500">&#10003;</span> {f}
          </li>
        ))}
      </ul>
      <Link
        href="/auth/signup"
        className={`block text-center font-semibold py-3 rounded-lg transition text-sm ${buttonClass}`}
      >
        {tier.cta}
      </Link>
    </div>
  );
}
