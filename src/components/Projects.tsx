import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        <div className="reveal">
          <h2 className="section-heading">SELECTED WORK</h2>
        </div>

        {projects.map((project, i) => (
          <article key={project.id} className="reveal mb-20 last:mb-0">
            {/* Top row: number + status */}
            <div className="flex items-start justify-between">
              <span className="section-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              {project.status === "coming-soon" && (
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-[#c89b6e] border border-[rgba(200,155,110,0.3)] px-3 py-1">
                  Coming Soon
                </span>
              )}
              {project.status === "live" && (
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-[#c89b6e] border border-[rgba(200,155,110,0.3)] px-3 py-1">
                  Live
                </span>
              )}
            </div>

            {/* Project name */}
            <h3
              className="text-4xl md:text-5xl font-light text-[#f4efe9] mt-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {project.name}
            </h3>

            {/* Tagline */}
            <p className="font-sans text-lg text-[#8a8580] mt-2">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-base leading-[1.85] text-[#cdc7be] mt-6 max-w-3xl">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[#8a8580] border border-[rgba(255,255,255,0.06)] px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features list */}
            <div className="mt-8 max-w-3xl">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[#cdc7be] mb-3"
                >
                  <span className="w-4 h-px bg-[#c89b6e] mt-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Technical highlights */}
            <div className="mt-8 border-l border-[rgba(200,155,110,0.3)] pl-6">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580] mb-3 block">
                Technical Highlights
              </span>
              <p
                className="text-sm text-[#cdc7be] leading-relaxed italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {project.highlights}
              </p>
            </div>

            {/* Links row */}
            <div className="flex gap-6 mt-8">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  View Project &rarr;
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Source Code &rarr;
                </a>
              )}
            </div>

            {/* Divider (not after last) */}
            {i < projects.length - 1 && <hr className="divider mt-20" />}
          </article>
        ))}
      </div>
    </section>
  );
}
