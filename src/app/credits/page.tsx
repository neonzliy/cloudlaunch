import Link from "next/link";
import { Nav } from "@/components/nav";
import { ContactForm } from "@/components/contact-form";
import { CreditsFAQ } from "@/components/faq-section";

export default function CreditsPage() {
  return (
    <div className="bg-white text-gray-900">
      <Nav variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Free consultation, no commitment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 font-heading">
            Cloud credits to fuel your startup
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Most early-stage startups qualify for thousands in free cloud credits but never apply. We walk you through the process and handle the heavy lifting.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/20">
            Get a Free Consultation
          </a>
          <p className="text-sm text-gray-400 mt-4">We&apos;ll assess your eligibility and explain the process.</p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">WHAT YOU GET</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Starting $10,000 in free cloud credits</h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">Cloud providers like AWS offer credit programs for startups. We help you navigate the process and put together the strongest application.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">$1K - $10K in credits</h3>
              <p className="text-sm text-gray-500">Depending on your startup stage and the program you qualify for.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">200+ cloud services</h3>
              <p className="text-sm text-gray-500">Credits cover compute, storage, databases, serverless, AI/ML, and more.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Your account, your credits</h3>
              <p className="text-sm text-gray-500">Credits go directly to your cloud account. We never ask for admin access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Simple process, big savings</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">1</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Free consultation</h3>
              <p className="text-sm text-gray-500">Reach out through our contact form. We assess your eligibility and explain which credit programs fit your startup.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">2</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">We handle the application</h3>
              <p className="text-sm text-gray-500">We help you better present your startup and guide you through application best practices for submission.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-xl font-bold">3</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Credits land in your account</h3>
              <p className="text-sm text-gray-500">Once approved, credits appear directly on your cloud billing console. Most reviews take 5-10 business days.</p>
            </div>
          </div>
        </div>
      </section>

      <CreditsFAQ />

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">GET IN TOUCH</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">Interested in cloud credits?</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Tell us about your startup and we&apos;ll get back to you with a personalized assessment of which credit programs you qualify for.
              </p>
              <div className="space-y-3 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  No cost, no obligation
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Response within 24 hours
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  You only pay if we get you approved
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-white font-bold text-xl">base<span className="text-amber-500">261</span></Link>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/#services" className="hover:text-white transition">Our Model</Link>
            <Link href="/credits" className="hover:text-white transition">Cloud Credits</Link>
            <a href="mailto:team@base261.com" className="hover:text-white transition">team@base261.com</a>
          </div>
          <div className="text-sm text-gray-500">&copy; 2026 base261. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
