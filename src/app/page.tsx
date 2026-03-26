import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">base<span className="text-amber-500">261</span></Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#model" className="hover:text-white transition">Our Model</a>
            <a href="#startups" className="hover:text-white transition">For Startups</a>
            <Link href="/credits" className="hover:text-white transition">Cloud Credits</Link>
          </div>
          <Link href="/auth/signup" className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition">Join Free</Link>
        </div>
      </nav>

      {/* Hero - Dark */}
      <section className="pt-28 pb-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            We help startups launch and scale
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
            base261 is a startup studio that partners with early-stage founders, providing cloud infrastructure, technical guidance, and hands-on support from day zero.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/credits" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg shadow-amber-500/25">
              Explore Cloud Credits
            </Link>
            <a href="#model" className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-lg transition">
              How We Work
            </a>
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section id="model" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">OUR MODEL</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-xl">A different kind of startup partner</h2>
          <p className="text-lg text-gray-500 mb-14 max-w-2xl">
            We don&apos;t just connect you with resources. We work alongside founders, providing the scaffolding so you can move fast and stay focused.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We help startups access cloud credits and optimize their infrastructure spend, so you can build without worrying about bills.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Technical Guidance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Architecture reviews, cloud planning, and best practices from engineers who&apos;ve built at scale.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Startup Resources</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Curated tools, templates, and partnerships to help you move from idea to launch faster.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Founder Community</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Connect with other early-stage founders, share learnings, and find collaborators who are building alongside you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Startups */}
      <section id="startups" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">FOR STARTUPS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for founders at every stage</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Whether you&apos;re validating an idea or scaling your infrastructure, we meet you where you are.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-amber-500/25">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Idea Stage</h3>
              <p className="text-sm text-gray-500">Validate your concept with the right tools. We help you set up cloud infrastructure from day one so you can prototype fast.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-amber-500/25">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Building</h3>
              <p className="text-sm text-gray-500">Access cloud credits, technical guidance, and operational support so you can focus on product, not overhead.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-amber-500/25">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Scaling</h3>
              <p className="text-sm text-gray-500">Optimize your cloud spend, plan your architecture for growth, and connect with resources to take you to the next level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build something?</h2>
          <p className="text-lg text-gray-400 mb-10">Join base261 and get access to cloud credits, technical resources, and a community of founders.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-lg transition shadow-lg shadow-amber-500/25">Join Free</Link>
            <Link href="/credits" className="inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 text-white font-semibold px-7 py-3.5 rounded-lg transition">Explore Cloud Credits</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white font-bold text-xl">base<span className="text-amber-500">261</span></div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#model" className="hover:text-white transition">Our Model</a>
            <a href="#startups" className="hover:text-white transition">For Startups</a>
            <Link href="/credits" className="hover:text-white transition">Cloud Credits</Link>
            <a href="mailto:team@base261.com" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-sm text-gray-500">&copy; 2026 base261. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
