import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SignOutButton } from "@/components/sign-out-button";
import { ManageBillingButton } from "@/components/manage-billing-button";
import { UpgradeButton } from "@/components/upgrade-button";

const PLAN_DISPLAY = {
  free: { label: "Free", credits: "$1,000", color: "bg-gray-100 text-gray-700" },
  standard: { label: "Standard", credits: "$5,000", color: "bg-blue-100 text-blue-700" },
  premium: { label: "Premium", credits: "$10,000", color: "bg-amber-100 text-amber-700" },
  enterprise: { label: "Enterprise", credits: "$100,000", color: "bg-purple-100 text-purple-700" },
} as const;

const STATUS_DISPLAY: Record<string, { label: string; color: string }> = {
  draft: { label: "Draft", color: "bg-gray-100 text-gray-700" },
  submitted: { label: "Submitted", color: "bg-blue-100 text-blue-700" },
  under_review: { label: "Under Review", color: "bg-yellow-100 text-yellow-700" },
  submitted_to_aws: { label: "Sent to AWS", color: "bg-indigo-100 text-indigo-700" },
  approved: { label: "Approved", color: "bg-green-100 text-green-700" },
  denied: { label: "Denied", color: "bg-red-100 text-red-700" },
  credits_loaded: { label: "Credits Loaded", color: "bg-green-100 text-green-700" },
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const { data: applications } = await supabase
    .from("activate_applications")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const plan = (subscription?.plan || "free") as keyof typeof PLAN_DISPLAY;
  const planInfo = PLAN_DISPLAY[plan];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Cloud<span className="text-amber-500">Launch</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user.email}</span>
            <SignOutButton />
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        {/* Plan Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Current Plan</p>
              <div className="flex items-center gap-3">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${planInfo.color}`}>
                  {planInfo.label}
                </span>
                <span className="text-sm text-gray-500">
                  Up to {planInfo.credits} in AWS Activate credits
                </span>
              </div>
              {subscription?.current_period_end && (
                <p className="text-xs text-gray-400 mt-2">
                  Renews {new Date(subscription.current_period_end).toLocaleDateString()}
                </p>
              )}
            </div>
            <div className="flex gap-3">
              {plan === "free" && <UpgradeButton />}
              {plan !== "free" && <ManageBillingButton />}
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">AWS Activate Applications</h2>
            <Link
              href="/dashboard/apply"
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
            >
              New Application
            </Link>
          </div>

          {!applications || applications.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg mb-2">No applications yet</p>
              <p className="text-sm">Submit your first AWS Activate application to get started.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => {
                const status = STATUS_DISPLAY[app.status] || STATUS_DISPLAY.draft;
                return (
                  <div key={app.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{app.credit_tier?.replace("_", " ").toUpperCase() || "Application"}</p>
                      <p className="text-sm text-gray-500">
                        {app.requested_amount ? `$${app.requested_amount.toLocaleString()} requested` : "Draft"}
                        {app.approved_amount ? ` · $${app.approved_amount.toLocaleString()} approved` : ""}
                      </p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
