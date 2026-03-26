import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "base261 - Startup Studio",
  description: "base261 partners with early-stage founders, providing cloud infrastructure, technical guidance, and hands-on support from day zero.",
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
