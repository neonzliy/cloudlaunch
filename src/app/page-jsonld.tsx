export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "base261",
    url: "https://base261.com",
    description: "A digital innovation studio that incubates ideas, secures cloud infrastructure, and prepares startups for growth.",
    email: "team@base261.com",
    foundingDate: "2026",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
