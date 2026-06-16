import { ArrowUp } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./Icons";
import { personalInfo, navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-surface-950">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-surface-500 hover:text-heading transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold text-heading">
              Arafat<span className="text-primary-400">.</span>
            </a>
            <p className="text-sm text-surface-500 mt-1">
              Full-Stack Developer & Designer — {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 hover:text-heading transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 hover:text-heading transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 hover:text-heading transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
            Next.js & Tailwind CSS.
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 text-xs text-surface-600 hover:text-primary-400 transition-colors"
          >
            Back to top
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
