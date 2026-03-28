import Link from "next/link";
import { Nav } from "@/components/nav";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <Nav variant="dark" />

      {/* Hero - asymmetric with visual element */}
      <section className="pt-28 pb-0 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="py-20 md:py-28">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6 font-heading tracking-tight">
                We build the foundation for startups to thrive
              </h1>
              <p className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
                Incubation, cloud infrastructure, and hands-on guidance from day zero.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/credits" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-lg transition shadow-lg shadow-amber-500/25">
                  Explore Cloud Credits
                </Link>
                <a href="#services" className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg transition">
                  How We Work
                </a>
              </div>
            </div>
            {/* Visual element - floating cards */}
            <div className="hidden md:block relative pb-12">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ml-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Startup Growth</p>
                      <p className="text-gray-500 text-xs">Powered by base261</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Cloud Credits</span>
                      <span className="text-green-400 text-sm font-medium">Secured</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5"><div className="bg-amber-500 h-1.5 rounded-full w-4/5" /></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Infrastructure</span>
                      <span className="text-green-400 text-sm font-medium">Optimized</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5"><div className="bg-amber-500 h-1.5 rounded-full w-3/5" /></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Launch Readiness</span>
                      <span className="text-amber-400 text-sm font-medium">In Progress</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5"><div className="bg-amber-500 h-1.5 rounded-full w-2/5" /></div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -left-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/25">
                  $10K credits applied
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Model - featured service + grid */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">OUR MODEL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading tracking-tight">A different kind of startup partner</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              We work alongside founders from day zero, providing the infrastructure and guidance so you can focus on building your product.
            </p>
          </div>

          {/* Featured service */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 mb-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">Flagship Service</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">Cloud Credits</h3>
                <p className="text-gray-400 leading-relaxed mb-6">We help startups access starting $10,000 in cloud infrastructure credits, guiding the credit application process so you can build without worrying about bills.</p>
                <Link href="/credits" className="inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300 transition text-sm">
                  Learn more about cloud credits
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white font-heading">$10K+</p>
                  <p className="text-gray-500 text-xs mt-1">Starting credits</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white font-heading">200+</p>
                  <p className="text-gray-500 text-xs mt-1">Cloud services</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white font-heading">5-10</p>
                  <p className="text-gray-500 text-xs mt-1">Days to approval</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white font-heading">$0</p>
                  <p className="text-gray-500 text-xs mt-1">Upfront cost</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other services */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Incubation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">From market research to technical architecture, we provide the scaffolding for your first product.</p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Pre-underwriting</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We assess startup readiness and prepare applications for credit programs and early-stage funding.</p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Growth Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Cloud spend optimization, infrastructure planning, and partnerships to help you scale efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About - more authentic, no fake stats */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">WHO WE ARE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading tracking-tight">Built by operators, for founders</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  base261 was founded by a team with deep roots in cloud infrastructure and startup operations. We&apos;ve seen firsthand how the right resources at the right time can change a startup&apos;s trajectory.
                </p>
                <p>
                  Our mission is to reduce the friction between a great idea and a running business. Whether that means securing cloud credits, reviewing your architecture, or helping you prepare for your next stage of growth.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Our Focus</p>
                <p className="text-gray-900 font-medium">Early-stage startups building on cloud infrastructure. Pre-seed through Series A.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Based In</p>
                <p className="text-gray-900 font-medium">North America, supporting founders globally.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Get in Touch</p>
                <a href="mailto:team@base261.com" className="text-amber-500 font-medium hover:text-amber-600 transition">team@base261.com</a>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading tracking-tight">Ready to get a new idea off the ground?</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                No matter the size of the idea or time in market, we&apos;re ready to incubate new ideas and optimize for your next move.
              </p>
              <div className="border-t border-gray-100 pt-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Prefer email?</p>
                <a href="mailto:team@base261.com" className="text-gray-900 font-medium hover:text-amber-500 transition">team@base261.com</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="text-white font-bold text-xl mb-4">base<span className="text-amber-500">261</span></div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">A digital innovation studio that incubates ideas, secures cloud infrastructure, and prepares startups for growth.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Navigate</p>
              <div className="space-y-2">
                <a href="#services" className="block text-sm text-gray-500 hover:text-white transition">Our Model</a>
                <Link href="/credits" className="block text-sm text-gray-500 hover:text-white transition">Cloud Credits</Link>
                <a href="#contact" className="block text-sm text-gray-500 hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Connect</p>
              <div className="space-y-2">
                <a href="mailto:team@base261.com" className="block text-sm text-gray-500 hover:text-white transition">team@base261.com</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">&copy; 2026 base261. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
