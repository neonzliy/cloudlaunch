import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { ContactForm } from "@/components/contact-form";
import { CreditsFAQ } from "@/components/faq-section";

export const metadata: Metadata = {
  alternates: { canonical: "https://base261.com/credits" },
  title: "Cloud Credits",
  description: "Get up to $10,000 in free cloud infrastructure credits for your startup. We guide you through the application process.",
};

export default function CreditsPage() {
  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a]">
      <Nav variant="light" />

      {/* Hero */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono-label mb-5">Cloud Credits</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] leading-[1.05] mb-8 font-heading max-w-3xl">
            Cloud credits to fuel your startup
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
            Most early-stage startups qualify for thousands in free cloud credits but never apply. We walk you through the process and handle the heavy lifting.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#1a1a1a] font-medium hover:text-gray-600 transition">
            Get a Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-300 pt-20">
            <div className="mb-16">
              <p className="font-mono-label mb-4">What You Get</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] font-heading">Starting $10,000 in free cloud credits</h2>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl leading-relaxed">Cloud providers like AWS offer credit programs for startups. We help you navigate the process and put together the strongest application.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-12">
              <div>
                <p className="text-3xl font-bold text-[#1a1a1a] font-heading mb-2">$1K-$10K</p>
                <p className="text-gray-500 text-[15px]">In cloud credits, depending on your startup stage and program.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1a1a1a] font-heading mb-2">200+</p>
                <p className="text-gray-500 text-[15px]">Cloud services covered, including compute, storage, databases, AI/ML.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1a1a1a] font-heading mb-2">100%</p>
                <p className="text-gray-500 text-[15px]">Your account, your credits. We never ask for admin access or credentials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-300 pt-20">
            <div className="mb-16">
              <p className="font-mono-label mb-4">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] font-heading">Simple process, big savings</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
              <div>
                <div className="w-full h-px bg-gray-300 mb-8" />
                <p className="font-mono-label mb-3">01</p>
                <h3 className="font-semibold text-[#1a1a1a] text-xl mb-3 font-heading">Free consultation</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">Reach out through our contact form. We assess your eligibility and explain which credit programs fit your startup.</p>
              </div>
              <div>
                <div className="w-full h-px bg-gray-300 mb-8" />
                <p className="font-mono-label mb-3">02</p>
                <h3 className="font-semibold text-[#1a1a1a] text-xl mb-3 font-heading">We handle the application</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">We help you better present your startup and guide you through application best practices for submission.</p>
              </div>
              <div>
                <div className="w-full h-px bg-gray-300 mb-8" />
                <p className="font-mono-label mb-3">03</p>
                <h3 className="font-semibold text-[#1a1a1a] text-xl mb-3 font-heading">Credits land in your account</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">Once approved, credits appear directly on your cloud billing console. Most reviews take 5-10 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreditsFAQ />

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-300 pt-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-mono-label mb-4">Get in Touch</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 font-heading">Interested in cloud credits?</h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
                  Tell us about your startup and we&apos;ll get back to you with a personalized assessment of which credit programs you qualify for.
                </p>
                <div className="space-y-3 text-[15px] text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    No cost, no obligation
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    Response within 24 hours
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    You only pay if we get you approved
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div className="md:col-span-2">
              <div className="text-white text-lg mb-4 tracking-tight"><span className="font-bold">base</span><span className="font-light">261</span></div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">A digital innovation studio that incubates ideas, secures cloud infrastructure, and prepares startups for growth.</p>
            </div>
            <div>
              <p className="font-mono-label !text-gray-600 mb-5">Navigate</p>
              <div className="space-y-3">
                <Link href="/" className="block text-sm text-gray-500 hover:text-white transition">Home</Link>
                <Link href="/#services" className="block text-sm text-gray-500 hover:text-white transition">Our Model</Link>
                <Link href="/credits" className="block text-sm text-gray-500 hover:text-white transition">Cloud Credits</Link>
              </div>
            </div>
            <div>
              <p className="font-mono-label !text-gray-600 mb-5">Connect</p>
              <div className="space-y-3">
                <a href="mailto:team@base261.com" className="block text-sm text-gray-500 hover:text-white transition">team@base261.com</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-gray-700">&copy; 2026 base261. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
