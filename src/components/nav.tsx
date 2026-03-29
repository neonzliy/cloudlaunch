"use client";

import { useState } from "react";
import Link from "next/link";

export function Nav({ variant = "light" }: { variant?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#fafaf8]/95 backdrop-blur-md border-b border-gray-200/60 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[#1a1a1a] tracking-tight">
          base<span className="text-[#c27c3e]">261</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[13px]">
          <Link href="/" className="text-gray-400 hover:text-[#1a1a1a] transition">Home</Link>
          <Link href="/credits" className="text-gray-400 hover:text-[#1a1a1a] transition">Cloud Credits</Link>
        </div>
        <div className="hidden md:block">
          <a href="/#contact" className="text-[13px] font-medium text-[#1a1a1a] hover:text-[#c27c3e] transition">
            Get in touch
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#fafaf8] border-t border-gray-200/60 px-6 py-5 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block text-sm text-gray-400 hover:text-[#1a1a1a] transition">Home</Link>
          <Link href="/credits" onClick={() => setOpen(false)} className="block text-sm text-gray-400 hover:text-[#1a1a1a] transition">Cloud Credits</Link>
          <a href="/#contact" onClick={() => setOpen(false)} className="block text-sm text-[#1a1a1a] font-medium">Get in touch</a>
        </div>
      )}
    </nav>
  );
}
