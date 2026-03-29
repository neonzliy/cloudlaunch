import Link from "next/link";
import { Nav } from "@/components/nav";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a]">
      <Nav variant="light" />

      {/* Hero - centered like Invoke */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.0] mb-8 font-heading">
            Novel Solutions for Growing Startups
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We are a digital innovation studio. We work with founders, entrepreneurs and early-stage companies to incubate ideas, secure cloud infrastructure, and prepare startups for growth.
          </p>
        </div>
      </section>

      {/* Services grid - like Invoke case studies */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/credits" className="group block bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-400 transition">
              <div className="flex items-start justify-between mb-16">
                <div>
                  <p className="font-mono-label mb-1">Flagship</p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#1a1a1a] transition -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-heading">Cloud Credits</h3>
              <p className="text-gray-500 text-[15px]">Starting $10,000 in cloud infrastructure credits for early-stage startups.</p>
            </Link>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-start justify-between mb-16">
                <div>
                  <p className="font-mono-label mb-1">Service</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-heading">Incubation</h3>
              <p className="text-gray-500 text-[15px]">From market research to technical architecture, we provide the scaffolding for your first product.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-start justify-between mb-16">
                <div>
                  <p className="font-mono-label mb-1">Service</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-heading">Pre-underwriting</h3>
              <p className="text-gray-500 text-[15px]">We assess startup readiness and prepare applications for credit programs and early-stage funding.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-start justify-between mb-16">
                <div>
                  <p className="font-mono-label mb-1">Service</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-heading">Growth Support</h3>
              <p className="text-gray-500 text-[15px]">Cloud spend optimization, infrastructure planning, and partnerships to help you scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History / About - like Invoke "since 2000" */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight mb-12 max-w-3xl">
            We&apos;ve been building alongside founders since day one
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center">
              <p className="text-gray-300 text-sm font-mono-label">Team photo coming soon</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center">
              <p className="text-gray-300 text-sm font-mono-label">Office photo coming soon</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center">
              <p className="text-gray-300 text-sm font-mono-label">Workshop photo coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with - like Invoke 3 client types */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-300 pt-16">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-3 font-heading">Early-Stage Founders</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">You have an idea and need help bringing it to life. We provide the technical foundation, cloud infrastructure, and guidance to go from concept to prototype.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 font-heading">Startups in Development</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">You&apos;re building your product and need cloud credits to keep costs down. We handle credit applications and help you optimize your infrastructure.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 font-heading">Scaling Companies</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">You have traction and need to scale efficiently. We help with infrastructure planning, cost optimization, and preparing for your next stage of growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach - like Invoke iterative stages */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-300 pt-16 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight max-w-3xl">
              Validation and iterative guidance at every stage, from idea to growth
            </h2>
          </div>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white border border-gray-200 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold font-heading text-gray-200">01</p>
                  <p className="text-gray-300 text-sm mt-2">Consultation</p>
                </div>
              </div>
              <div>
                <p className="font-mono-label mb-3">Step 01</p>
                <h3 className="text-2xl font-bold mb-4 font-heading">Free Consultation</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">We start with a conversation. Tell us about your startup, your stage, and your needs. We assess your eligibility for cloud credits and map out a plan.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 bg-white border border-gray-200 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold font-heading text-gray-200">02</p>
                  <p className="text-gray-300 text-sm mt-2">Application</p>
                </div>
              </div>
              <div className="md:order-1">
                <p className="font-mono-label mb-3">Step 02</p>
                <h3 className="text-2xl font-bold mb-4 font-heading">Application & Preparation</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">We help you better present your startup and guide you through application best practices. We review everything for completeness before submission.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white border border-gray-200 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold font-heading text-gray-200">03</p>
                  <p className="text-gray-300 text-sm mt-2">Launch</p>
                </div>
              </div>
              <div>
                <p className="font-mono-label mb-3">Step 03</p>
                <h3 className="text-2xl font-bold mb-4 font-heading">Credits & Growth</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">Once approved, credits land directly in your cloud account. We continue supporting your infrastructure optimization and help you prepare for what comes next.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - like Invoke */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-300 pt-16">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Looking for a digital innovation studio to bring your ideas to life?</h2>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  No matter the size of the idea or time in market, we&apos;re ready to incubate new ideas and optimize for your next move.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - like Invoke */}
      <footer className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div>
              <p className="text-white font-bold text-lg mb-4 tracking-tight">base<span className="text-[#c27c3e]">261</span></p>
              <p className="text-gray-600 text-sm leading-relaxed">Digital Innovation Studio</p>
              <a href="mailto:team@base261.com" className="text-gray-500 text-sm hover:text-white transition block mt-2">team@base261.com</a>
            </div>
            <div className="flex items-center justify-center">
              {/* Center logo mark */}
              <svg width="40" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="6" fill="#c27c3e" />
                <rect x="8" y="8" width="4" height="4" fill="white" fillOpacity="0.9" />
                <rect x="8" y="16" width="4" height="4" fill="white" fillOpacity="0.9" />
                <rect x="16" y="12" width="4" height="4" fill="white" fillOpacity="0.6" />
                <rect x="16" y="8" width="4" height="4" fill="white" fillOpacity="0.4" />
                <rect x="16" y="16" width="4" height="4" fill="white" fillOpacity="0.4" />
              </svg>
            </div>
            <div className="md:text-right">
              <a href="/#contact" className="text-gray-500 text-sm hover:text-white transition block mb-2">Get in touch</a>
              <div className="flex md:justify-end gap-4 mt-4">
                <Link href="/" className="text-gray-600 text-sm hover:text-white transition">Home</Link>
                <Link href="/credits" className="text-gray-600 text-sm hover:text-white transition">Cloud Credits</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-gray-700">&copy; 2026 base261 Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
