import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  const paragraphs = personalInfo.bio.split("\n\n");

  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="section-heading reveal">
          ABOUT
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Left column — Portrait */}
          <div className="md:col-span-4 reveal reveal-delay-1">
            <div className="overflow-hidden rounded-sm">
              <Image
                src="/profile.jpg"
                alt="Arafat Mbaga"
                width={480}
                height={640}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="aspect-[3/4] object-cover object-top w-full h-full"
              />
            </div>
            <div className="mt-4 space-y-1">
              <p className="font-mono text-xs text-[#5a5651]">
                {personalInfo.location}
              </p>
              <p className="font-mono text-xs text-[#5a5651]">
                {personalInfo.availability}
              </p>
            </div>
          </div>

          {/* Right column — Bio */}
          <div className="md:col-span-8">
            <h2
              className="text-3xl md:text-4xl font-light text-[#f4efe9] mb-8 reveal reveal-delay-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              A developer with a designer&apos;s eye
            </h2>

            <div className="reveal reveal-delay-3">
              {paragraphs.map((paragraph, i) =>
                i === 0 ? (
                  <p
                    key={i}
                    className="text-base leading-[1.85] text-[#cdc7be] mb-6"
                  >
                    <span
                      className="float-left text-5xl font-light mr-2 mt-1 text-[#c89b6e] leading-none"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                ) : (
                  <p
                    key={i}
                    className="text-base leading-[1.85] text-[#cdc7be] mb-6"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            <div className="flex gap-12 mt-10 reveal reveal-delay-4">
              <div>
                <span
                  className="block text-3xl text-[#f4efe9]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  4+
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580]">
                  Organizations
                </span>
              </div>
              <div>
                <span
                  className="block text-3xl text-[#f4efe9]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  3+
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580]">
                  Years Design
                </span>
              </div>
              <div>
                <span
                  className="block text-3xl text-[#f4efe9]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  2025
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580]">
                  Graduating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
