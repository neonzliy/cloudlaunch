import Link from "next/link";
import { PricingSection } from "@/components/pricing-toggle";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">Cloud<span className="text-amber-500">Activate</span></Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#aws-activate" className="hover:text-white transition">AWS Activate</a>
            <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
          <Link href="/auth/signup" className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition">Get Started</Link>
        </div>
      </nav>

      {/* Hero - Dark */}
      <section className="pt-28 pb-24 px-6 bg-slate-900 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-sm text-gray-300 px-4 py-2 rounded-full mb-8">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Official AWS Activate Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Offset your startup&apos;s AWS bills with up to <span className="text-amber-500">$100,000</span> in credits
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">We help early-stage startups access AWS Activate credits so you can build, test, and scale on AWS — without worrying about cloud costs.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/25">Claim Your Credits →</Link>
              <a href="#aws-activate" className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-lg transition">Learn More</a>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span><strong className="text-white">$3M+</strong> credits secured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span><strong className="text-white">500+</strong> startups helped</span>
              </div>
            </div>
          </div>

          {/* Hero illustration - cloud infrastructure */}
          <div className="flex-1 hidden md:flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 w-80">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">AWS Credits</p>
                    <p className="text-gray-400 text-xs">Applied to your account</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">EC2 Compute</span>
                    <span className="text-green-400 text-sm font-medium">Covered</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full w-4/5" /></div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">S3 Storage</span>
                    <span className="text-green-400 text-sm font-medium">Covered</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full w-3/5" /></div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Lambda Functions</span>
                    <span className="text-green-400 text-sm font-medium">Covered</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full w-2/5" /></div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Total Credits</span>
                    <span className="text-amber-500 font-bold text-xl">$25,000</span>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Approved ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AWS Activate */}
      <section id="aws-activate" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">WHAT IS AWS ACTIVATE?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">AWS credits to fuel your startup</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">AWS Activate provides startups with free credits, technical support, and training. As an official AWS Activate Provider, we help you claim up to $100,000 in credits to offset your AWS bills.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition group">
              <div className="w-11 h-11 bg-amber-50 group-hover:bg-amber-100 rounded-xl flex items-center justify-center mb-5 transition"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg></div>
              <h3 className="font-semibold text-slate-800 mb-2">Full AWS Access</h3>
              <p className="text-sm text-gray-500">Use credits across 200+ AWS services including EC2, S3, Lambda, RDS, and more.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition group">
              <div className="w-11 h-11 bg-amber-50 group-hover:bg-amber-100 rounded-xl flex items-center justify-center mb-5 transition"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="font-semibold text-slate-800 mb-2">Build at $0 Cost</h3>
              <p className="text-sm text-gray-500">Test prototypes, run staging environments, and deploy production workloads without upfront cloud spend.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition group">
              <div className="w-11 h-11 bg-amber-50 group-hover:bg-amber-100 rounded-xl flex items-center justify-center mb-5 transition"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="font-semibold text-slate-800 mb-2">Expert Guidance</h3>
              <p className="text-sm text-gray-500">Our team guides you through the entire application process with 1-on-1 support and application review.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition group">
              <div className="w-11 h-11 bg-amber-50 group-hover:bg-amber-100 rounded-xl flex items-center justify-center mb-5 transition"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="font-semibold text-slate-800 mb-2">Available Globally</h3>
              <p className="text-sm text-gray-500">Whether you&apos;re in the US, Europe, Asia, or anywhere — our program supports startups worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">From signup to credits in 4 steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/25"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wide mb-1">Step 1</p>
              <h3 className="font-semibold text-slate-800 mb-2">Sign Up</h3>
              <p className="text-sm text-gray-500">Choose a subscription plan and create your account.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/25"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wide mb-1">Step 2</p>
              <h3 className="font-semibold text-slate-800 mb-2">Apply</h3>
              <p className="text-sm text-gray-500">We help you draft and submit your AWS Activate application.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/25"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wide mb-1">Step 3</p>
              <h3 className="font-semibold text-slate-800 mb-2">Get Approved</h3>
              <p className="text-sm text-gray-500">AWS reviews your application — most are approved within days.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/25"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wide mb-1">Step 4</p>
              <h3 className="font-semibold text-slate-800 mb-2">Start Building</h3>
              <p className="text-sm text-gray-500">Your credits are loaded. Build, test, and launch on AWS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Tiers */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">CREDIT TIERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">AWS Activate credit programs</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">The amount of credits depends on your startup stage and affiliation with an Activate Provider like us.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-7 hover:border-amber-200 transition">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">FOUNDERS</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">$1,000</p>
              <p className="text-sm text-amber-500 mb-4">in AWS credits</p>
              <p className="text-sm text-gray-500">For solo founders and early ideas exploring AWS for the first time.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-7 hover:border-amber-200 transition">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">PORTFOLIO</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">$5,000</p>
              <p className="text-sm text-amber-500 mb-4">in AWS credits</p>
              <p className="text-sm text-gray-500">For startups affiliated with an Activate Provider building their first product.</p>
            </div>
            <div className="bg-amber-50 rounded-xl border-2 border-amber-200 p-7">
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">PORTFOLIO+</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">$10,000</p>
              <p className="text-sm text-amber-500 mb-4">in AWS credits</p>
              <p className="text-sm text-gray-500">For startups with traction, scaling their infrastructure on AWS.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-7 hover:border-amber-200 transition">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">PORTFOLIO MAX</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">$100,000</p>
              <p className="text-sm text-amber-500 mb-4">in AWS credits</p>
              <p className="text-sm text-gray-500">For funded startups with significant AWS usage and growth potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">PRICING</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Simple, transparent plans</h2>
            <p className="text-lg text-gray-500">Choose the plan that fits your stage. All paid plans include AWS Activate application support.</p>
          </div>
          <PricingSection />
        </div>
      </section>

      {/* Social Proof - Early Access (replaces fake testimonials) */}
      <section id="social-proof" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">EARLY ACCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Join startups already saving on AWS</h2>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">We&apos;re onboarding our first cohort of startups. Sign up now to be among the first to receive AWS Activate credits through CloudActivate.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">$100K</div>
              <p className="text-sm text-gray-500">Maximum credits available per startup</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">5-10 days</div>
              <p className="text-sm text-gray-500">Average approval time</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">200+</div>
              <p className="text-sm text-gray-500">AWS services covered</p>
            </div>
          </div>
          <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/25">
            Join Early Access →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 text-sm">What is AWS Activate?<svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <p className="px-5 pb-5 text-sm text-gray-500">AWS Activate is a program by Amazon Web Services that provides startups with free credits, technical support, and training to help them build and grow on AWS. Credits can be used across 200+ AWS services.</p>
            </details>
            <details className="group bg-white border border-gray-200 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 text-sm">How much credits can I get?<svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <p className="px-5 pb-5 text-sm text-gray-500">It depends on your startup stage and plan. Free plan members can claim $1,000 via the Founders program. Standard members can access up to $5,000, and Premium/Enterprise members up to $10,000 or more through the Portfolio program.</p>
            </details>
            <details className="group bg-white border border-gray-200 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 text-sm">What can I use the credits for?<svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <p className="px-5 pb-5 text-sm text-gray-500">Credits can be applied to most AWS services including EC2, S3, Lambda, RDS, CloudFront, and more. Use them for hosting, databases, AI/ML, compute, storage, and virtually any cloud workload.</p>
            </details>
            <details className="group bg-white border border-gray-200 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 text-sm">How long does the approval process take?<svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <p className="px-5 pb-5 text-sm text-gray-500">Most applications are reviewed and approved within 5-10 business days. Our team helps you prepare a strong application to maximize your chances of approval.</p>
            </details>
            <details className="group bg-white border border-gray-200 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 text-sm">Do the credits expire?<svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <p className="px-5 pb-5 text-sm text-gray-500">Yes, AWS Activate credits typically expire 1-2 years after issuance, depending on the program tier. We&apos;ll help you plan your usage to maximize value.</p>
            </details>
            <details className="group bg-white border border-gray-200 rounded-xl">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 text-sm">What happens after I subscribe?<svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <p className="px-5 pb-5 text-sm text-gray-500">After subscribing, we&apos;ll guide you through the AWS Activate application process. This includes drafting your application, reviewing it, and providing 1-on-1 support until your credits are approved and loaded.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Founder Resources */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">FOUNDER RESOURCES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Everything founders need to launch</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-5"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg></div>
              <h3 className="font-semibold text-slate-800 mb-2">AWS Activate Credits</h3>
              <p className="text-sm text-gray-500 mb-4">Up to $100K in AWS credits for every portfolio company.</p>
              <a href="#pricing" className="text-amber-500 text-sm font-medium hover:underline">Learn more →</a>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-5"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <h3 className="font-semibold text-slate-800 mb-2">Technical Resources</h3>
              <p className="text-sm text-gray-500">Dedicated engineering support and architecture reviews.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-5"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="font-semibold text-slate-800 mb-2">Legal &amp; Compliance</h3>
              <p className="text-sm text-gray-500">Incorporation, IP protection, and regulatory guidance.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center mb-5"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
              <h3 className="font-semibold text-slate-800 mb-2">Go-to-Market</h3>
              <p className="text-sm text-gray-500">Launch playbooks, growth hacking, and distribution partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build something extraordinary?</h2>
          <p className="text-lg text-gray-400 mb-10">Whether you have an idea or want to co-found with us, we&apos;d love to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-lg transition shadow-lg shadow-amber-500/25">Get in Touch →</Link>
            <a href="#pricing" className="inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 text-white font-semibold px-7 py-3.5 rounded-lg transition">AWS Activate Credits</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white font-bold text-xl">Cloud<span className="text-amber-500">Activate</span></div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#how-it-works" className="hover:text-white transition">Our Model</a>
            <a href="#aws-activate" className="hover:text-white transition">AWS Activate</a>
            <Link href="/auth/signup" className="hover:text-white transition">Get Started</Link>
          </div>
          <div className="text-sm text-gray-500">&copy; 2026 CloudActivate. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
