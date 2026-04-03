import { createAdminClient } from "@/lib/supabase/admin";
import { notFound } from "next/navigation";
import { EngageClient } from "./engage-client";

export default async function EngagePage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ status?: string }> }) {
  const { id } = await params;
  const { status: queryStatus } = await searchParams;

  const supabase = createAdminClient();
  const { data: engagement } = await supabase
    .from("engagements")
    .select("*")
    .eq("id", id)
    .single();

  if (!engagement) notFound();

  return <EngageClient engagement={engagement} queryStatus={queryStatus} />;
}
