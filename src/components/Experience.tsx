import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-wide">
        <div className="reveal">
          <h2 className="section-heading">EXPERIENCE</h2>
        </div>

        {/* Timeline container */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical copper line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-[rgba(200,155,110,0.2)]" />

          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`reveal reveal-delay-${i + 1} relative mb-16 last:mb-0`}
            >
              {/* Copper dot */}
              <div className="absolute left-[-22px] md:left-[-30px] top-1 w-2.5 h-2.5 rounded-full bg-[#c89b6e] ring-4 ring-[#0f0e0c]" />

              {/* Period + Location */}
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651]">
                {exp.period} &middot; {exp.location}
              </span>

              {/* Company name */}
              <h3
                className="text-2xl text-[#f4efe9] font-light mt-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {exp.company}
              </h3>

              {/* Role */}
              <p className="text-sm text-[#8a8580] mt-1">{exp.role}</p>

              {/* Description bullets */}
              <div className="mt-4">
                {exp.description.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#cdc7be] mb-2.5"
                  >
                    <span className="w-3 h-px bg-[#c89b6e] mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Skills row */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[0.5rem] uppercase tracking-[0.15em] text-[#c89b6e] border border-[rgba(200,155,110,0.2)] px-2 py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
