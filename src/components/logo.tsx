import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-white" : "text-[#1a1a1a]";

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${textColor}`}>
      {/* Logomark - abstract geometric "b" / foundation shape */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="6" fill="#0d9488" />
        <path d="M8 8h4v4H8V8Z" fill="white" fillOpacity="0.9" />
        <path d="M8 16h4v4H8v-4Z" fill="white" fillOpacity="0.9" />
        <path d="M16 12h4v4h-4v-4Z" fill="white" fillOpacity="0.6" />
        <path d="M16 8h4v4h-4V8Z" fill="white" fillOpacity="0.4" />
        <path d="M16 16h4v4h-4v-4Z" fill="white" fillOpacity="0.4" />
      </svg>
      <span className="text-lg font-bold tracking-tight">
        base<span className="text-teal-500">261</span>
      </span>
    </Link>
  );
}
