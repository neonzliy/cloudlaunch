const FAQS = [
  {
    q: "What is AWS Activate and how do the credits work?",
    a: "AWS Activate is a program by Amazon Web Services that provides startups with free credits, technical support, and training. Credits are applied directly to your AWS bill and can be used across 200+ services including EC2, S3, Lambda, RDS, CloudFront, and more. As an Activate Provider, we help you apply for and receive these credits.",
  },
  {
    q: "Will I remain the owner of my AWS account?",
    a: "Yes, absolutely. You retain full ownership and root access to your AWS account at all times. We never ask for administrative access. The credits are applied directly to your existing AWS account — we simply help with the application process.",
  },
  {
    q: "What's the eligibility criteria for AWS Activate credits?",
    a: "The main criteria are: your company must be less than 10 years old, have less than $100M in annual revenue, and have an active website. You also can't have previously received Activate credits at the same tier. Sign up for our Free plan to check your eligibility instantly.",
  },
  {
    q: "How much credits can I get and how long does approval take?",
    a: "Credit amounts range from $1,000 (Founders) to $100,000 (Portfolio Max) depending on your startup stage. Most applications are reviewed and approved within 5-10 business days. AWS makes the final approval decision. There are no upfront costs — we only charge 25% of approved credits.",
  },
  {
    q: "Do the credits expire? What happens to unused credits?",
    a: "Yes, AWS Activate credits typically expire 1-2 years after issuance, depending on the program tier. Unused credits remain on your AWS account until expiration regardless of your CloudActivate membership status. We'll help you plan your usage to maximize value before expiration.",
  },
  {
    q: "Are there minimum commitments? Can I cancel anytime?",
    a: "No minimum commitments and no upfront costs. You sign up for free, apply for free, and only pay our 25% success fee when your credits are approved and loaded. If we can't get you credits, you owe nothing.",
  },
  {
    q: "Do these credits come directly from AWS?",
    a: "Yes. Credits are issued through the official AWS Activate program. As an Activate Provider, we submit applications on your behalf, but AWS reviews and approves all credit allocations. The credits appear directly on your AWS billing console.",
  },
  {
    q: "What's in it for you? How does CloudActivate make money?",
    a: "Our pricing is success-based. We take 25% of the credit amount we help you secure. For example, if you receive $10,000 in AWS credits, our fee is $2,500. If we can't get you approved, you pay nothing. This means our incentives are fully aligned with yours.",
  },
  {
    q: "What happens after I sign up?",
    a: "After signing up, you'll get access to your dashboard where you can submit an AWS Activate application. We'll help draft your application, review it for completeness, and submit it through our provider channel. You'll receive email updates at each stage until your credits are approved and loaded into your AWS account.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Frequently asked questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group bg-white border border-gray-200 rounded-xl hover:shadow-sm transition">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-800 text-[15px]">
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
