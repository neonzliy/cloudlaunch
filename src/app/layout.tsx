import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudTrim - AWS Activate Credits for Startups",
  description: "Offset your startup's AWS bills with up to $100,000 in credits. Official AWS Activate Provider.",
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
