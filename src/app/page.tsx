import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">base<span className="text-amber-500">261</span></Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#services" className="hover:text-white transition">Our Model</a>
            <Link href="/credits" className="hover:text-white transition">Cloud Credits</Link>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition">Get in Touch</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-amber-500 font-medium text-sm uppercase tracking-wider mb-6">Digital Innovation Studio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            We build the foundation for startups to thrive
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
            base261 partners with founders and early-stage companies to incubate ideas, secure cloud infrastructure, and prepare startups for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/credits" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/25">
              Explore Cloud Credits
            </Link>
            <a href="#services" className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-lg transition">
              How We Work
            </a>
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">OUR MODEL</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-xl">A different kind of startup partner</h2>
          <p className="text-lg text-gray-500 mb-14 max-w-2xl">
            We work alongside founders from day zero, providing the infrastructure and guidance so you can focus on what matters: building your product.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Incubation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We help founders validate ideas and build from scratch. From market research to technical architecture, we provide the scaffolding for your first product.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Cloud Credits</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We help startups access starting $10,000 in cloud infrastructure credits, guiding the credit application process so you can build without worrying about bills.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Pre-underwriting</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We assess startup readiness and prepare applications for cloud credit programs and early-stage funding, increasing your chances of approval.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Growth Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">From optimizing cloud spend to connecting you with the right partners, we help startups scale their infrastructure and operations efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">WHO WE WORK WITH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for founders at every stage</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Whether you&apos;re exploring an idea or scaling your infrastructure, we meet you where you are.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wide mb-4">Idea Stage</p>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">Founders with a vision</h3>
              <p className="text-sm text-gray-500 leading-relaxed">You have an idea but need help validating it. We provide the framework, tools, and infrastructure to go from concept to prototype.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wide mb-4">Building</p>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">Startups in development</h3>
              <p className="text-sm text-gray-500 leading-relaxed">You&apos;re building your product and need cloud credits to keep costs down. We handle applications and help you optimize your stack.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-wide mb-4">Scaling</p>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">Companies ready to grow</h3>
              <p className="text-sm text-gray-500 leading-relaxed">You have traction and need to scale efficiently. We help with infrastructure planning, cost optimization, and growth partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">GET IN TOUCH</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to get a new idea off the ground?</h2>
              <p className="text-gray-500 leading-relaxed">
                No matter the size of the idea or time in market, we&apos;re ready to incubate new ideas and optimize for your next move.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white font-bold text-xl">base<span className="text-amber-500">261</span></div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition">Our Model</a>
            <Link href="/credits" className="hover:text-white transition">Cloud Credits</Link>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="mailto:team@base261.com" className="hover:text-white transition">team@base261.com</a>
          </div>
          <div className="text-sm text-gray-500">&copy; 2026 base261. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
