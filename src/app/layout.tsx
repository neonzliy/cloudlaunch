import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "base261 - The Startup Launchpad",
  description: "Cloud credits, technical resources, and tools to help early-stage startups build, launch, and scale.",
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
