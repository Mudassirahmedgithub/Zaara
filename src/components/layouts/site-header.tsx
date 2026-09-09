"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Pyrolysis Plant", href: "/pyrolysis" },
  { label: "Services", href: "/services" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* NAV                                                               */}
      {/* ---------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#17140F]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Left: Logo -> Home */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt="Akaash Industries Logo"
              className="h-8 w-auto"
            />
            <span className="font-[var(--font-display)] text-lg tracking-wide text-[#EFEAE0]">
              AKAASH <span className="text-[#C97A2A]">INDUSTRIES</span>
            </span>
          </Link>

          {/* Desktop Nav (Right side) */}
          <nav className="hidden gap-8 text-sm text-[#9AA0A6] lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors hover:text-[#EFEAE0] ${
                  pathname === link.href ? "text-[#EFEAE0] font-medium" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA (Desktop) */}
          <Link
            href="/contact"
            className="hidden rounded-sm border border-[#F0B429]/60 px-4 py-2 text-xs font-medium tracking-wide text-[#F0B429] transition-colors hover:bg-[#F0B429]/10 lg:inline-block"
          >
            GET IN TOUCH
          </Link>

          {/* Mobile Toggle */}
          <button
            className="text-2xl text-[#EFEAE0] lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-[#17140F]/95 backdrop-blur lg:hidden">
            <nav className="space-y-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block rounded p-3 text-lg font-medium transition-colors hover:bg-white/5 ${
                    pathname === link.href
                      ? "text-[#F0B429]"
                      : "text-[#EFEAE0]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 block rounded-sm border border-[#F0B429]/60 px-4 py-3 text-center text-xs font-medium tracking-wide text-[#F0B429] transition-colors hover:bg-[#F0B429]/10"
              >
                GET IN TOUCH
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}