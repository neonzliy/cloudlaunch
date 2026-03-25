import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudActivate - AWS Activate Credits for Startups",
  description: "Get up to $10,000 in free AWS credits for your startup. Official AWS Activate Provider.",
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
