import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

async function isAdmin(supabase: Awaited<ReturnType<typeof createClient>>, userId: string) {
  const { data } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", userId)
    .single();
  return data?.is_admin === true;
}

export async function PATCH(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!(await isAdmin(supabase, user.id))) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { applicationId, status, approved_amount } = await request.json();

  if (!applicationId || !status) {
    return NextResponse.json({ error: "applicationId and status required" }, { status: 400 });
  }

  const updateData: Record<string, unknown> = { status };
  if (approved_amount !== undefined) {
    updateData.approved_amount = Number(approved_amount);
  }
  if (status === "approved") {
    updateData.approved_at = new Date().toISOString();
  }

  // Use admin client to bypass RLS for admin updates
  const { createAdminClient } = await import("@/lib/supabase/admin");
  const adminClient = createAdminClient();

  const { data, error } = await adminClient
    .from("activate_applications")
    .update(updateData)
    .eq("id", applicationId)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
