const CREDITS_FAQS = [
  {
    q: "What cloud credit programs can you help with?",
    a: "We currently help startups access AWS Activate credits, which offer between $1,000 and $10,000 depending on your startup stage. We're expanding to support additional cloud providers in the future.",
  },
  {
    q: "How does the application process work?",
    a: "After you join base261, you tell us about your startup and your cloud usage. We help draft your application, review it for completeness, and guide you through submission. The cloud provider reviews and approves all applications.",
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
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common questions</h2>
        </div>
        <div className="space-y-3">
          {CREDITS_FAQS.map((faq) => (
            <details key={faq.q} className="group bg-white border border-gray-200 rounded-xl hover:shadow-sm transition">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 text-[15px]">
                {faq.q}
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
