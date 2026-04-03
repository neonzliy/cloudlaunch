import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  const { engagementId } = await request.json();

  if (!engagementId) {
    return NextResponse.json({ error: "Missing engagementId" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data: engagement, error } = await supabase
    .from("engagements")
    .select("*")
    .eq("id", engagementId)
    .single();

  if (error || !engagement) {
    return NextResponse.json({ error: "Engagement not found" }, { status: 404 });
  }

  if (engagement.status !== "pending") {
    return NextResponse.json({ error: "Engagement already processed" }, { status: 400 });
  }

  // Create Stripe customer
  const customer = await stripe.customers.create({
    email: engagement.client_email,
    name: engagement.client_name,
    metadata: {
      engagement_id: engagementId,
      company: engagement.company_name || "",
    },
  });

  // Create Setup Session (collects card, doesn't charge)
  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    mode: "setup",
    payment_method_types: ["card"],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || "https://base261.com"}/engage/${engagementId}?status=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "https://base261.com"}/engage/${engagementId}?status=cancelled`,
    metadata: { engagement_id: engagementId },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);

  // Update engagement with Stripe customer ID
  await supabase
    .from("engagements")
    .update({ stripe_customer_id: customer.id })
    .eq("id", engagementId);

  return NextResponse.json({ url: session.url });
}
