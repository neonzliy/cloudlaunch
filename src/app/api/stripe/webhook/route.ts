import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createAdminClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.user_id;
      const plan = session.metadata?.plan;
      const billingCycle = session.metadata?.billing_cycle;

      if (!userId || !plan) break;

      const sub = await stripe.subscriptions.retrieve(
        session.subscription as string
      );
      const periodEnd = (sub as unknown as { current_period_end: number }).current_period_end;

      await supabase
        .from("subscriptions")
        .update({
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: session.subscription as string,
          plan,
          billing_cycle: billingCycle,
          status: "active",
          current_period_end: new Date(periodEnd * 1000).toISOString(),
        })
        .eq("user_id", userId);
      break;
    }

    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      const subId = (invoice as unknown as { subscription: string | null }).subscription;
      if (!subId) break;

      const sub = await stripe.subscriptions.retrieve(subId);
      const periodEnd = (sub as unknown as { current_period_end: number }).current_period_end;

      await supabase
        .from("subscriptions")
        .update({
          status: "active",
          current_period_end: new Date(periodEnd * 1000).toISOString(),
        })
        .eq("stripe_subscription_id", subId);
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const subId = (invoice as unknown as { subscription: string | null }).subscription;
      if (!subId) break;

      await supabase
        .from("subscriptions")
        .update({ status: "past_due" })
        .eq("stripe_subscription_id", subId);
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;

      await supabase
        .from("subscriptions")
        .update({ status: "canceled", plan: "free" })
        .eq("stripe_subscription_id", subscription.id);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
