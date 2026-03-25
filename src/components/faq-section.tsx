const FAQS = [
  {
    q: "What is base261?",
    a: "base261 is a startup launchpad that helps early-stage companies access cloud credits, technical resources, and founder community. Our flagship service helps startups apply for AWS Activate credits to offset cloud infrastructure costs.",
  },
  {
    q: "What is AWS Activate?",
    a: "AWS Activate is an official program by Amazon that gives startups free credits to use across 200+ AWS services, including EC2, S3, Lambda, and RDS. The credits are applied directly to your AWS bill.",
  },
  {
    q: "How much can I get?",
    a: "AWS Activate has two tiers. Activate Founders gives self-funded startups $1,000 in credits. Activate Portfolio, which requires affiliation with a provider, offers up to $10,000. We help you figure out which tier fits and put together the best application.",
  },
  {
    q: "What does the process look like?",
    a: "After you join base261, you tell us a bit about your startup and your AWS usage. We help draft your application, review it for completeness, and guide you through submission. AWS typically reviews and approves applications within 5-10 business days.",
  },
  {
    q: "Will I keep full ownership of my AWS account?",
    a: "Yes. We never ask for admin access or root credentials. The credits are applied directly to your existing AWS account. You retain full ownership and control at all times.",
  },
  {
    q: "What does this cost?",
    a: "Nothing upfront. For cloud credits, we charge 25% of the credit amount you receive, only after your credits are approved and loaded. For example, if you get $10,000 in credits, our fee is $2,500. If we can't help you get approved, you pay nothing.",
  },
  {
    q: "Am I eligible?",
    a: "Most early-stage startups qualify for AWS Activate. You need to be pre-Series B, founded within the last 10 years, have an active website or company profile, and have an AWS account on a paid tier plan. You also can't have previously received Activate credits at the same tier.",
  },
  {
    q: "What other services does base261 offer?",
    a: "Cloud credits are our flagship, and we're actively building out additional services including technical guidance (architecture reviews, infrastructure planning) and a founder community. Join now to get early access as we launch new offerings.",
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
