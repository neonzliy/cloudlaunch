import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "base261 - Digital Innovation Studio",
  description: "base261 is a digital innovation studio that incubates ideas, secures cloud infrastructure, and prepares startups for growth.",
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
