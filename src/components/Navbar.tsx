"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* ── Fixed navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: "rgba(15,14,12,0.85)" } : undefined}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-wide flex items-center justify-between px-5 sm:px-8 lg:px-10 py-5">
          {/* Monogram */}
          <a
            href="#home"
            className="transition-colors duration-300 hover:text-[#c89b6e]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              letterSpacing: "0.05em",
              color: "#f4efe9",
            }}
            aria-label="Home"
          >
            AM
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[0.75rem] uppercase tracking-[0.2em] text-[#8a8580] hover:text-[#f4efe9] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 flex flex-col gap-[6px]">
              <span
                className={`block h-px bg-[#f4efe9] transition-all duration-300 origin-center ${
                  isOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px bg-[#f4efe9] transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-[#f4efe9] transition-all duration-300 origin-center ${
                  isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#0f0e0c" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 group"
            >
              <span className="font-mono text-[0.625rem] text-[#5a5651] group-hover:text-[#c89b6e] transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="text-[2rem] font-light text-[#f4efe9] group-hover:text-[#c89b6e] transition-colors duration-300"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
