import { personalInfo } from "@/data/portfolio";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="py-16 px-5"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container-wide text-center">
        {/* Monogram */}
        <p
          className="mb-6"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.25rem",
            color: "#f4efe9",
          }}
        >
          AM
        </p>

        {/* Nav links */}
        <nav
          aria-label="Footer navigation"
          className="inline-flex flex-wrap items-center justify-center gap-8"
        >
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651] hover:text-[#f4efe9] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social links */}
        <div className="inline-flex items-center justify-center gap-6 mt-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580] hover:text-[#f4efe9] transition-colors duration-300"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580] hover:text-[#f4efe9] transition-colors duration-300"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <p className="font-mono text-[0.625rem] text-[#3a3835] mt-10">
          &copy; 2026 Arafat Mbaga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
