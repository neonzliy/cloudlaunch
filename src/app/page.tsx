import Link from "next/link";
import { FAQSection } from "@/components/faq-section";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">Cloud<span className="text-amber-500">Activate</span></Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#how-it-works" className="hover:text-gray-900 transition">How It Works</a>
            <a href="#credits" className="hover:text-gray-900 transition">Credits</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </div>
          <Link href="/auth/signup" className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition">Check Eligibility</Link>
        </div>
      </nav>

      {/* Hero - Customer-first */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Get up to <span className="text-amber-500">$10,000</span> in free AWS credits for your startup
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            We handle the entire AWS Activate application process. You get the credits. No upfront cost, no risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/auth/signup" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/20">
              Check Your Eligibility
            </Link>
            <a href="#how-it-works" className="inline-flex items-center justify-center border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-lg text-lg transition">
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-400">Free to sign up. You only pay if we get you approved.</p>
        </div>
      </section>

      {/* Pain point - empathy hook */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cloud bills add up fast</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              EC2 instances, RDS databases, S3 storage, Lambda invocations. AWS is powerful, but costs can eat through your runway before you find product-market fit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">$5K-$20K</p>
              <p className="text-sm text-gray-500">Average monthly AWS spend for a seed-stage startup</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">200+</p>
              <p className="text-sm text-gray-500">AWS services your credits can cover</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <p className="text-3xl font-bold text-amber-500 mb-2">$0</p>
              <p className="text-sm text-gray-500">What you pay upfront to apply through us</p>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 max-w-xl mx-auto">
            AWS Activate gives startups free credits to offset these costs. The catch? The application process can be confusing, and most founders don&apos;t know which tier they qualify for. That&apos;s where we come in.
          </p>
        </div>
      </section>

      {/* How It Works - 3 steps */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Three steps to free credits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">1</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Sign up free</h3>
              <p className="text-sm text-gray-500">Create an account in 30 seconds. No credit card, no commitment.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">2</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">We handle the application</h3>
              <p className="text-sm text-gray-500">Tell us about your startup. We draft and submit your AWS Activate application through our provider channel.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">3</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Credits land in your account</h3>
              <p className="text-sm text-gray-500">AWS approves your application (most within 5-10 business days) and credits appear on your billing console.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/auth/signup" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-lg transition shadow-lg shadow-amber-500/20">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Credit Tiers */}
      <section id="credits" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">AWS ACTIVATE TIERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How much can you get?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Credit amounts depend on your startup stage. We help you identify the right tier and maximize your allocation.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-amber-200 transition">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Activate Founders</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">$1,000</p>
              <p className="text-sm text-amber-500 mb-3">in AWS credits</p>
              <p className="text-sm text-gray-500">For self-funded startups exploring AWS for the first time. No provider affiliation required.</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-amber-300 p-8 relative">
              <div className="absolute -top-2.5 left-4 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Recommended</div>
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">Activate Portfolio</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">Up to $10,000</p>
              <p className="text-sm text-amber-500 mb-3">in AWS credits</p>
              <p className="text-sm text-gray-500">For startups affiliated with an Activate Provider like us. Higher credit amounts and faster processing.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">All credits are issued directly by AWS through the official Activate program. You keep full ownership of your AWS account.</p>
        </div>
      </section>

      {/* Trust signals - light touch */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why startups work with us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Official AWS Activate Provider</h3>
                <p className="text-sm text-gray-500">We submit applications through AWS&apos;s official provider channel, which means faster processing and higher approval rates.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Your account, your credits</h3>
                <p className="text-sm text-gray-500">We never ask for admin access. Credits go directly to your AWS account. You retain full ownership and control.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Zero risk, aligned incentives</h3>
                <p className="text-sm text-gray-500">We only get paid when you get credits. If your application isn&apos;t approved, you owe nothing.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">We do the heavy lifting</h3>
                <p className="text-sm text-gray-500">From figuring out which tier you qualify for to drafting the application, we handle the entire process so you can focus on building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop paying full price for AWS</h2>
          <p className="text-lg text-gray-400 mb-8">Check if your startup qualifies for up to $10,000 in free AWS credits. It takes 30 seconds.</p>
          <Link href="/auth/signup" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/25">
            Check Your Eligibility
          </Link>
          <p className="text-sm text-gray-500 mt-4">No credit card required. Free to sign up and apply.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white font-bold text-xl">Cloud<span className="text-amber-500">Activate</span></div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="#credits" className="hover:text-white transition">Credits</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
          <div className="text-sm text-gray-500">&copy; 2026 CloudActivate. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
