import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SignOutButton } from "@/components/sign-out-button";
import { AdminStatusSelect } from "@/components/admin-status-select";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  // Check admin status
  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!profile?.is_admin) redirect("/dashboard");

  // Fetch all applications with admin client (bypasses RLS)
  const adminClient = createAdminClient();
  const { data: applications } = await adminClient
    .from("activate_applications")
    .select("*, profiles(full_name)")
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
            <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">Dashboard</Link>
            <span className="text-sm text-gray-500">{user.email}</span>
            <SignOutButton />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin — Applications</h1>
        <p className="text-gray-500 text-sm mb-8">{applications?.length || 0} total applications</p>

        {!applications || applications.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
            No applications yet.
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Applicant</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Tier</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Requested</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Approved</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">
                      {(app.profiles as { full_name: string } | null)?.full_name || "—"}
                    </td>
                    <td className="py-3 px-4 text-gray-500">
                      {app.credit_tier?.replace("_", " ").toUpperCase() || "—"}
                    </td>
                    <td className="py-3 px-4 text-gray-900">
                      {app.requested_amount ? `$${app.requested_amount.toLocaleString()}` : "—"}
                    </td>
                    <td className="py-3 px-4 text-gray-900">
                      {app.approved_amount ? `$${app.approved_amount.toLocaleString()}` : "—"}
                    </td>
                    <td className="py-3 px-4">
                      <AdminStatusSelect applicationId={app.id} currentStatus={app.status} />
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-xs">
                      {new Date(app.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
