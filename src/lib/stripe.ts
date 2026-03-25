import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-02-25.clover" as Stripe.LatestApiVersion,
      typescript: true,
    });
  }
  return _stripe;
}

// Lazy proxy so importing this module doesn't crash at build time
export const stripe = new Proxy({} as Stripe, {
  get(_, prop) {
    return (getStripe() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

export const PLANS = {
  free: {
    name: "Founders",
    credits: "$1,000",
    tier: "founders",
  },
  portfolio: {
    name: "Portfolio",
    credits: "$10,000",
    tier: "portfolio",
  },
} as const;

export type PlanKey = keyof typeof PLANS;
