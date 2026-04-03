import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  const { engagementId, approvedAmount } = await request.json();

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

  if (!engagement.stripe_customer_id) {
    return NextResponse.json({ error: "No card on file" }, { status: 400 });
  }

  // Get the customer's default payment method
  const paymentMethods = await stripe.paymentMethods.list({
    customer: engagement.stripe_customer_id,
    type: "card",
  });

  if (paymentMethods.data.length === 0) {
    return NextResponse.json({ error: "No payment method found" }, { status: 400 });
  }

  const amount = approvedAmount || engagement.credit_amount;
  const feeAmount = Math.round(amount * 25 / 100);
  const feeCents = feeAmount * 100;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: feeCents,
      currency: "usd",
      customer: engagement.stripe_customer_id,
      payment_method: paymentMethods.data[0].id,
      off_session: true,
      confirm: true,
      description: `base261 service fee - 25% of $${amount.toLocaleString()} cloud credits`,
      metadata: { engagement_id: engagementId },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    await supabase
      .from("engagements")
      .update({
        status: "charged",
        credit_amount: amount,
        admin_notes: `Charged $${feeAmount} (25% of $${amount}). PaymentIntent: ${paymentIntent.id}`,
      })
      .eq("id", engagementId);

    return NextResponse.json({ success: true, charged: feeAmount });
  } catch (err) {
    await supabase
      .from("engagements")
      .update({ status: "failed", admin_notes: `Charge failed: ${err}` })
      .eq("id", engagementId);

    return NextResponse.json({ error: "Charge failed" }, { status: 500 });
  }
}
