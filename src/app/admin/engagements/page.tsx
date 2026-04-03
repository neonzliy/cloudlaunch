import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SignOutButton } from "@/components/sign-out-button";
import { CreateEngagement } from "@/components/create-engagement";
import { EngagementRow } from "@/components/engagement-row";

export default async function AdminEngagementsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) redirect("/dashboard");

  const adminClient = createAdminClient();
  const { data: engagements } = await adminClient
    .from("engagements")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-gray-900">
              base<span className="text-amber-500">261</span>
            </Link>
            <span className="text-xs bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-sm text-gray-500 hover:text-gray-700">Applications</Link>
            <Link href="/admin/engagements" className="text-sm text-gray-900 font-medium">Engagements</Link>
            <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">Dashboard</Link>
            <span className="text-sm text-gray-500">{user.email}</span>
            <SignOutButton />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Engagements</h1>
            <p className="text-gray-500 text-sm">{engagements?.length || 0} total engagements</p>
          </div>
          <CreateEngagement />
        </div>

        {!engagements || engagements.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
            No engagements yet. Create one to send a client a payment link.
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Client</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Company</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Credits</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Fee (25%)</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Link</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {engagements.map((eng) => (
                  <EngagementRow key={eng.id} engagement={eng} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
