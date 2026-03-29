export default function sitemap() {
  return [
    { url: "https://base261.com", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: "https://base261.com/credits", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];
}
