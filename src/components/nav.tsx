"use client";

import { useState } from "react";
import Link from "next/link";

export function Nav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";
  const navBg = isDark ? "bg-[#1a1a1a]/95 border-white/10" : "bg-[#fafaf8]/95 border-gray-200/60";
  const logo = isDark ? "text-white" : "text-[#1a1a1a]";
  const linkColor = isDark ? "text-gray-400 hover:text-white" : "text-gray-400 hover:text-[#1a1a1a]";
  const mobileBg = isDark ? "bg-[#1a1a1a]" : "bg-[#fafaf8]";

  return (
    <nav className={`fixed top-0 w-full ${navBg} backdrop-blur-md border-b z-50`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className={`text-lg ${logo} tracking-tight`}>
          <span className="font-bold">base</span><span className="font-light">261</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[13px]">
          <Link href="/#services" className={`${linkColor} transition`}>Our Model</Link>
          <Link href="/credits" className={`${linkColor} transition`}>Cloud Credits</Link>
          <a href="/#contact" className={`${linkColor} transition`}>Contact</a>
        </div>
        <div className="hidden md:block">
          <a href="/#contact" className={`text-[13px] font-medium transition ${isDark ? "text-white hover:text-gray-300" : "text-[#1a1a1a] hover:text-white"}`}>
            Get in Touch &rarr;
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg className={`w-5 h-5 ${isDark ? "text-white" : "text-[#1a1a1a]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className={`md:hidden ${mobileBg} border-t ${isDark ? "border-white/10" : "border-gray-200/60"} px-6 py-5 space-y-4`}>
          <Link href="/#services" onClick={() => setOpen(false)} className={`block text-sm ${linkColor} transition`}>Our Model</Link>
          <Link href="/credits" onClick={() => setOpen(false)} className={`block text-sm ${linkColor} transition`}>Cloud Credits</Link>
          <a href="/#contact" onClick={() => setOpen(false)} className={`block text-sm ${linkColor} transition`}>Contact</a>
        </div>
      )}
    </nav>
  );
}
