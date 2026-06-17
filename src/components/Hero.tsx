import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding"
    >
      <div className="container-wide w-full">
        {/* Small label */}
        <p className="hero-rise hero-delay-1 font-mono text-xs uppercase tracking-[0.25em] text-[#8a8580] mb-6">
          PORTFOLIO
        </p>

        {/* Main headline */}
        <h1 className="leading-[0.9]">
          <span
            className="hero-rise hero-delay-2 block font-light text-[#f4efe9]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
            }}
          >
            ARAFAT
          </span>
          <span
            className="hero-rise hero-delay-3 block outline-text"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              fontWeight: 300,
            }}
          >
            MBAGA
          </span>
        </h1>

        {/* Copper line */}
        <div
          className="hero-rise hero-delay-3 mt-6 h-px"
          style={{ backgroundColor: "#c89b6e", maxWidth: "80px" }}
        />

        {/* Tagline */}
        <p className="hero-rise hero-delay-4 font-sans text-[1.125rem] text-[#8a8580] max-w-lg mt-8 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTAs */}
        <div className="hero-rise hero-delay-5 inline-flex items-center gap-8 mt-12">
          <a
            href="#projects"
            className="link-underline font-mono text-xs uppercase tracking-[0.15em]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-[0.15em] text-[#f4efe9] border border-[rgba(255,255,255,0.1)] px-6 py-3 hover:border-[#c89b6e] transition-colors duration-500"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Social links — bottom-right absolute */}
      <div className="absolute bottom-10 right-5 sm:right-8 lg:right-10 flex flex-col items-end gap-3">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651] hover:text-[#f4efe9] transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href={personalInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651] hover:text-[#f4efe9] transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
