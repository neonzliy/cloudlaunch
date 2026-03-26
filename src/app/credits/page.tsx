import Link from "next/link";
import { CreditsFAQ } from "@/components/faq-section";

export default function CreditsPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">base<span className="text-amber-500">261</span></Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <Link href="/#model" className="hover:text-gray-900 transition">Our Model</Link>
            <Link href="/#startups" className="hover:text-gray-900 transition">For Startups</Link>
            <Link href="/credits" className="text-gray-900 font-medium">Cloud Credits</Link>
          </div>
          <Link href="/auth/signup" className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition">Check Eligibility</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Cloud credits to fuel your startup
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            We help early-stage startups access cloud infrastructure credits and guide you through the application process. No upfront cost, no risk.
          </p>
          <Link href="/auth/signup" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/20">
            Check Your Eligibility
          </Link>
          <p className="text-sm text-gray-400 mt-4">Free to join. You only pay if we help you get approved.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Three steps to cloud credits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">1</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Join base261</h3>
              <p className="text-sm text-gray-500">Create a free account in 30 seconds. No credit card, no commitment.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">2</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">We guide your application</h3>
              <p className="text-sm text-gray-500">Tell us about your startup. We help draft your cloud credits application, review it, and guide you through submission.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">3</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Credits land in your account</h3>
              <p className="text-sm text-gray-500">Once approved, credits appear directly on your cloud billing console. Most applications are reviewed within 5-10 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Programs */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">CLOUD CREDITS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Programs we help you access</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Cloud providers offer credit programs for startups. We help you navigate the application process and maximize your allocation.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-amber-200 transition">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">AWS Activate Founders</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">$1,000</p>
              <p className="text-sm text-amber-500 mb-3">in cloud credits</p>
              <p className="text-sm text-gray-500">For self-funded startups exploring cloud infrastructure for the first time.</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-amber-300 p-8 relative">
              <div className="absolute -top-2.5 left-4 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Recommended</div>
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">AWS Activate Portfolio</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">Up to $10,000</p>
              <p className="text-sm text-amber-500 mb-3">in cloud credits</p>
              <p className="text-sm text-gray-500">For startups affiliated with an Activate Provider. Higher credit amounts and faster processing.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">Credits are issued directly by the cloud provider. You keep full ownership of your account at all times.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">PRICING</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success-based pricing</h2>
            <p className="text-lg text-gray-500">Free to join. Free to apply. You only pay when your credits are approved.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm">
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">25%</h3>
            <p className="text-lg text-gray-500 mb-8">of approved credit amount</p>
            <div className="bg-gray-50 rounded-xl p-6 max-w-sm mx-auto">
              <p className="text-sm text-gray-500 mb-3">Example: You receive $10,000 in credits</p>
              <div className="flex items-center justify-center gap-4">
                <div><p className="text-2xl font-bold text-gray-900">$7,500</p><p className="text-xs text-gray-500">You keep</p></div>
                <div className="text-gray-300 text-xl">+</div>
                <div><p className="text-2xl font-bold text-amber-500">$2,500</p><p className="text-xs text-gray-500">Our fee</p></div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-6">If we can&apos;t help you get approved, you pay nothing.</p>
          </div>
        </div>
      </section>

      <CreditsFAQ />

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop paying full price for cloud</h2>
          <p className="text-lg text-gray-400 mb-8">Check if your startup qualifies for up to $10,000 in cloud credits. It takes 30 seconds.</p>
          <Link href="/auth/signup" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/25">
            Check Your Eligibility
          </Link>
          <p className="text-sm text-gray-500 mt-4">No credit card required. Free to join and apply.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-white font-bold text-xl">base<span className="text-amber-500">261</span></Link>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/#model" className="hover:text-white transition">Our Model</Link>
            <Link href="/#startups" className="hover:text-white transition">For Startups</Link>
            <Link href="/credits" className="hover:text-white transition">Cloud Credits</Link>
            <a href="mailto:team@base261.com" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-sm text-gray-500">&copy; 2026 base261. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
