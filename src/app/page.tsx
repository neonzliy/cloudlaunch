import Link from "next/link";
import { FAQSection } from "@/components/faq-section";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">base<span className="text-amber-500">261</span></Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#services" className="hover:text-gray-900 transition">Services</a>
            <a href="#credits" className="hover:text-gray-900 transition">Cloud Credits</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </div>
          <Link href="/auth/signup" className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition">Join Free</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            The launchpad your startup needs to <span className="text-amber-500">grow</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            base261 helps early-stage startups access cloud credits, technical resources, and the tools you need to build, launch, and scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/auth/signup" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/20">
              Get Started Free
            </Link>
            <a href="#services" className="inline-flex items-center justify-center border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-lg text-lg transition">
              Explore Services
            </a>
          </div>
          <p className="text-sm text-gray-400">Free to join. No credit card required.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">WHAT WE OFFER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything to get your startup off the ground</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">We connect founders with the resources that matter most in the early days.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border-2 border-amber-200 p-8 relative">
              <div className="absolute -top-2.5 left-4 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Flagship</div>
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Cloud Credits</h3>
              <p className="text-sm text-gray-500 mb-3">We help startups apply for up to $10,000 in AWS Activate credits and guide you through the entire process.</p>
              <a href="#credits" className="text-amber-500 text-sm font-medium hover:underline">Learn more</a>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-amber-200 transition">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Technical Guidance</h3>
              <p className="text-sm text-gray-500 mb-3">Architecture reviews, cloud infrastructure planning, and best practices to help you build on a solid foundation.</p>
              <span className="text-gray-400 text-sm font-medium">Coming soon</span>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-amber-200 transition">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Founder Community</h3>
              <p className="text-sm text-gray-500 mb-3">Connect with other early-stage founders, share learnings, and find collaborators building on AWS.</p>
              <span className="text-gray-400 text-sm font-medium">Coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get cloud credits in three steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">1</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Join base261</h3>
              <p className="text-sm text-gray-500">Create a free account in 30 seconds. No credit card, no commitment.</p>
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
        </div>
      </section>

      {/* Credit Tiers */}
      <section id="credits" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">AWS ACTIVATE TIERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How much can you get?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">We guide you through the AWS Activate application process and help you maximize your credit allocation.</p>
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
              <p className="text-sm text-gray-500">For startups affiliated with an Activate Provider. We help you find the right path to higher credits.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">All credits are issued directly by AWS through the official Activate program. You keep full ownership of your AWS account.</p>
        </div>
      </section>

      {/* Why base261 */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why base261?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">AWS Activate expertise</h3>
                <p className="text-sm text-gray-500">We know the Activate program inside and out, and help you put together the strongest possible application.</p>
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
                <h3 className="font-semibold text-gray-900 mb-1">More than just credits</h3>
                <p className="text-sm text-gray-500">Cloud credits are just the start. We&apos;re building a full suite of resources to help startups launch and scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to launch?</h2>
          <p className="text-lg text-gray-400 mb-8">Join base261 and get access to cloud credits, technical resources, and a community of founders building on AWS.</p>
          <Link href="/auth/signup" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/25">
            Join base261 Free
          </Link>
          <p className="text-sm text-gray-500 mt-4">No credit card required. Free to join and apply for credits.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white font-bold text-xl">base<span className="text-amber-500">261</span></div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#credits" className="hover:text-white transition">Cloud Credits</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
          <div className="text-sm text-gray-500">&copy; 2026 base261. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
