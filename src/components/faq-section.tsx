const CREDITS_FAQS = [
  {
    q: "What cloud credit programs can you help with?",
    a: "We currently help startups access AWS Activate credits, which offer between $1,000 and $10,000 depending on your startup stage. We're expanding to support additional cloud providers in the future.",
  },
  {
    q: "How does the application process work?",
    a: "After you reach out, we learn about your startup and your cloud usage. We help draft your application, review it for completeness, and guide you through submission. The cloud provider reviews and approves all applications.",
  },
  {
    q: "Will I keep full ownership of my cloud account?",
    a: "Yes. We never ask for admin access or root credentials. Credits are applied directly to your existing account. You retain full ownership and control at all times.",
  },
  {
    q: "What does this cost?",
    a: "Nothing upfront. We charge 25% of the credit amount you receive, only after your credits are approved and loaded. For example, if you get $10,000 in credits, our fee is $2,500. If we can't help you get approved, you pay nothing.",
  },
  {
    q: "Am I eligible?",
    a: "Most early-stage startups qualify. Typical requirements include being pre-Series B, founded within the last 10 years, having an active website or company profile, and having a cloud account on a paid tier plan.",
  },
  {
    q: "Do the credits expire?",
    a: "Yes, cloud credits typically expire 1-2 years after they're issued, depending on the program. Unused credits stay on your account until expiration regardless of your base261 membership status.",
  },
];

export function CreditsFAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="border-t border-gray-300 pt-20">
          <div className="mb-16">
            <p className="font-mono-label mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] font-heading">Common questions</h2>
          </div>
          <div className="space-y-0">
            {CREDITS_FAQS.map((faq) => (
              <details key={faq.q} className="group border-b border-gray-200">
                <summary className="flex items-center justify-between py-6 cursor-pointer font-medium text-[#1a1a1a] text-[15px] hover:text-white transition">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-45 transition-transform flex-shrink-0 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </summary>
                <div className="pb-6 text-[15px] text-gray-500 leading-relaxed max-w-2xl">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
