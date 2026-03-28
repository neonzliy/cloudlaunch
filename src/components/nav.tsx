"use client";

import { useState } from "react";
import Link from "next/link";

export function Nav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";
  const navBg = isDark ? "bg-slate-900/95 border-white/10" : "bg-white/95 border-gray-100";
  const logo = isDark ? "text-white" : "text-gray-900";
  const linkColor = isDark ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-900";
  const mobileBg = isDark ? "bg-slate-900" : "bg-white";

  return (
    <nav className={`fixed top-0 w-full ${navBg} backdrop-blur border-b z-50`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className={`text-xl font-bold ${logo}`}>
          base<span className="text-amber-500">261</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/#services" className={`${linkColor} transition`}>Our Model</Link>
          <Link href="/credits" className={`${linkColor} transition`}>Cloud Credits</Link>
          <a href={typeof window !== "undefined" && window.location.pathname === "/credits" ? "#contact" : "/#contact"} className={`${linkColor} transition`}>Contact</a>
        </div>
        <div className="hidden md:block">
          <a href={typeof window !== "undefined" && window.location.pathname === "/credits" ? "#contact" : "/#contact"} className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition">
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg className={`w-6 h-6 ${isDark ? "text-white" : "text-gray-900"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden ${mobileBg} border-t ${isDark ? "border-white/10" : "border-gray-100"} px-6 py-4 space-y-3`}>
          <Link href="/#services" onClick={() => setOpen(false)} className={`block text-sm ${linkColor} transition`}>Our Model</Link>
          <Link href="/credits" onClick={() => setOpen(false)} className={`block text-sm ${linkColor} transition`}>Cloud Credits</Link>
          <a href="/#contact" onClick={() => setOpen(false)} className={`block text-sm ${linkColor} transition`}>Contact</a>
          <a href="/#contact" onClick={() => setOpen(false)} className="block bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition text-center mt-2">
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
