import Link from "next/link";
import { Nav } from "@/components/nav";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a]">
      <Nav variant="dark" />

      {/* Hero - confident text only */}
      <section className="pt-32 pb-32 md:pt-40 md:pb-40 px-6 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8 font-heading max-w-4xl">
            We build the foundation for startups to thrive
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl leading-relaxed">
            base261 is a digital innovation studio. We partner with founders to incubate ideas, secure cloud infrastructure, and prepare startups for growth.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/credits" className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-300 transition">
              Explore Cloud Credits
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="#services" className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-white transition">
              How We Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <p className="font-mono-label mb-4">Our Model</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 font-heading max-w-2xl">A different kind of startup partner</h2>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              We work alongside founders from day zero, providing the infrastructure and guidance so you can focus on building your product.
            </p>
          </div>

          {/* Featured: Cloud Credits */}
          <div className="bg-[#1a1a1a] rounded-2xl p-10 md:p-14 mb-16">
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-3">
                <p className="font-mono-label !text-gray-600 mb-4">Flagship Service</p>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-5 font-heading">Cloud Credits</h3>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">We help startups access starting $10,000 in cloud infrastructure credits, guiding the credit application process so you can build without worrying about bills.</p>
                <Link href="/credits" className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-300 transition text-sm">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <div className="border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white font-heading">$10K+</p>
                  <p className="text-gray-600 text-xs mt-1">Starting credits</p>
                </div>
                <div className="border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white font-heading">200+</p>
                  <p className="text-gray-600 text-xs mt-1">Cloud services</p>
                </div>
                <div className="border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white font-heading">5-10</p>
                  <p className="text-gray-600 text-xs mt-1">Days to approval</p>
                </div>
                <div className="border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-white font-heading">$0</p>
                  <p className="text-gray-600 text-xs mt-1">Upfront cost</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other services - editorial, no icon boxes */}
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            <div>
              <div className="w-full h-px bg-gray-300 mb-8" />
              <p className="font-mono-label mb-3">01</p>
              <h3 className="font-semibold text-[#1a1a1a] text-xl mb-3 font-heading">Incubation</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">From market research to technical architecture, we provide the scaffolding for your first product.</p>
            </div>
            <div>
              <div className="w-full h-px bg-gray-300 mb-8" />
              <p className="font-mono-label mb-3">02</p>
              <h3 className="font-semibold text-[#1a1a1a] text-xl mb-3 font-heading">Pre-underwriting</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">We assess startup readiness and prepare applications for credit programs and early-stage funding.</p>
            </div>
            <div>
              <div className="w-full h-px bg-gray-300 mb-8" />
              <p className="font-mono-label mb-3">03</p>
              <h3 className="font-semibold text-[#1a1a1a] text-xl mb-3 font-heading">Growth Support</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">Cloud spend optimization, infrastructure planning, and partnerships to help you scale efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-300 pt-20">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="font-mono-label mb-4">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 font-heading">Built by operators, for founders</h2>
              </div>
              <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]">
                <p>
                  base261 was founded by a team with deep roots in cloud infrastructure and startup operations. We&apos;ve seen firsthand how the right resources at the right time can change a startup&apos;s trajectory.
                </p>
                <p>
                  Our mission is to reduce the friction between a great idea and a running business. Whether that means securing cloud credits, reviewing your architecture, or helping you prepare for your next stage of growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-300 pt-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-mono-label mb-4">Get in Touch</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 font-heading">Ready to get a new idea off the ground?</h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-10">
                  No matter the size of the idea or time in market, we&apos;re ready to incubate new ideas and optimize for your next move.
                </p>
                <div>
                  <p className="font-mono-label mb-2">Prefer email?</p>
                  <a href="mailto:team@base261.com" className="text-[#1a1a1a] font-medium hover:text-white transition">team@base261.com</a>
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
              <div className="text-white font-bold text-lg mb-4 tracking-tight">base<span className="text-white">261</span></div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">A digital innovation studio that incubates ideas, secures cloud infrastructure, and prepares startups for growth.</p>
            </div>
            <div>
              <p className="font-mono-label !text-gray-600 mb-5">Navigate</p>
              <div className="space-y-3">
                <a href="#services" className="block text-sm text-gray-500 hover:text-white transition">Our Model</a>
                <Link href="/credits" className="block text-sm text-gray-500 hover:text-white transition">Cloud Credits</Link>
                <a href="#contact" className="block text-sm text-gray-500 hover:text-white transition">Contact</a>
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
