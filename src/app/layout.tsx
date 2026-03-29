import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "base261 - Digital Innovation Studio",
    template: "%s | base261",
  },
  description: "base261 is a digital innovation studio that incubates ideas, secures cloud infrastructure, and prepares startups for growth.",
  metadataBase: new URL("https://base261.com"),
  openGraph: {
    title: "base261 - Digital Innovation Studio",
    description: "We partner with founders to incubate ideas, secure cloud infrastructure, and prepare startups for growth.",
    url: "https://base261.com",
    siteName: "base261",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "base261 - Digital Innovation Studio",
    description: "We partner with founders to incubate ideas, secure cloud infrastructure, and prepare startups for growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
