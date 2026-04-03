import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  // Verify admin
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { clientName, clientEmail, companyName, creditAmount } = await request.json();

  if (!clientName || !clientEmail || !creditAmount) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const feeAmount = Math.round(creditAmount * 25 / 100);

  const adminClient = createAdminClient();
  const { data, error } = await adminClient
    .from("engagements")
    .insert({
      client_name: clientName,
      client_email: clientEmail,
      company_name: companyName || null,
      credit_amount: creditAmount,
      fee_amount: feeAmount,
      status: "pending",
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
