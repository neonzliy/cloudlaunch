import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { aws_account_id, company_description, credit_tier, requested_amount } = body;

  if (!aws_account_id || !company_description || !credit_tier || !requested_amount) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const validTiers = ["founders", "portfolio"];
  if (!validTiers.includes(credit_tier)) {
    return NextResponse.json({ error: "Invalid credit tier" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("activate_applications")
    .insert({
      user_id: user.id,
      aws_account_id,
      company_description,
      credit_tier,
      requested_amount: Number(requested_amount),
      status: "submitted",
      submitted_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
