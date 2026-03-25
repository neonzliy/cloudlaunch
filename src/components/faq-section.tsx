const FAQS = [
  {
    q: "What is AWS Activate?",
    a: "AWS Activate is an official program by Amazon that gives startups free credits to use across 200+ AWS services, including EC2, S3, Lambda, and RDS. The credits are applied directly to your AWS bill. As an Activate Provider, we help you apply for and receive these credits.",
  },
  {
    q: "How much can I get?",
    a: "It depends on your startup stage. Credit amounts range from $1,000 for early founders up to $100,000 for funded startups with significant AWS usage. When you sign up, we help you figure out which tier you qualify for.",
  },
  {
    q: "What does the process look like?",
    a: "After you sign up, you tell us a bit about your startup and your AWS usage. We draft your application, review it for completeness, and submit it through our provider channel. AWS typically reviews and approves applications within 5-10 business days. You get email updates at each stage.",
  },
  {
    q: "Will I keep full ownership of my AWS account?",
    a: "Yes. We never ask for admin access or root credentials. The credits are applied directly to your existing AWS account. You retain full ownership and control at all times.",
  },
  {
    q: "Do the credits come directly from AWS?",
    a: "Yes. Credits are issued through the official AWS Activate program. AWS reviews and approves all applications. The credits appear directly on your AWS billing console, not through a third party.",
  },
  {
    q: "What does this cost?",
    a: "Nothing upfront. We charge 25% of the credit amount you receive, only after your credits are approved and loaded. For example, if you get $10,000 in credits, our fee is $2,500. If we can't get you approved, you pay nothing.",
  },
  {
    q: "Am I eligible?",
    a: "Most early-stage startups qualify. The main criteria: your company is less than 10 years old, has less than $100M in annual revenue, and has an active website. You also can't have previously received Activate credits at the same tier. Sign up to check instantly.",
  },
  {
    q: "Do the credits expire?",
    a: "Yes, AWS Activate credits typically expire 1-2 years after they're issued, depending on the tier. Unused credits stay on your account until expiration regardless of your CloudActivate status.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq) => (
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
