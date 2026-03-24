import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
  typescript: true,
});

export const PLANS = {
  free: {
    name: "Free",
    credits: "$1,000",
    tier: "founders",
  },
  standard: {
    name: "Standard",
    credits: "$5,000",
    tier: "portfolio",
    priceIds: {
      yearly: process.env.STRIPE_PRICE_STANDARD_YEARLY!,
      monthly: process.env.STRIPE_PRICE_STANDARD_MONTHLY!,
    },
  },
  premium: {
    name: "Premium",
    credits: "$10,000",
    tier: "portfolio_plus",
    priceIds: {
      yearly: process.env.STRIPE_PRICE_PREMIUM_YEARLY!,
      monthly: process.env.STRIPE_PRICE_PREMIUM_MONTHLY!,
    },
  },
  enterprise: {
    name: "Enterprise",
    credits: "$100,000",
    tier: "portfolio_max",
  },
} as const;

export type PlanKey = keyof typeof PLANS;
