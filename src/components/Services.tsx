import { Code2, PenTool, Film, Network, type LucideIcon } from "lucide-react";
import { services } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  PenTool,
  Film,
  Network,
};

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        <div className="reveal">
          <h2 className="section-heading">SERVICES</h2>
        </div>

        <p
          className="reveal text-2xl md:text-3xl font-light text-[#f4efe9] mb-12 max-w-xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          What I can build for you.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`reveal reveal-delay-${i + 1} elegant-card p-8`}
              >
                {/* Lucide icon */}
                {Icon && (
                  <div className="mb-6">
                    <Icon size={20} color="#c89b6e" strokeWidth={1.5} />
                  </div>
                )}

                {/* Service number */}
                <span className="font-mono text-[0.625rem] text-[#5a5651] mb-2 block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3
                  className="text-xl text-[#f4efe9] font-light mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#cdc7be] mb-6">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-xs text-[#8a8580] mb-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#c89b6e] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="link-underline font-mono text-[0.625rem] uppercase tracking-[0.2em]"
                  >
                    Request Quote &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
