import { skills } from "@/data/portfolio";
import { Monitor, Server, Palette, Wrench, Terminal } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Palette,
  Wrench,
  Terminal,
};

const levelWidth: Record<string, string> = {
  Advanced: "90%",
  Proficient: "70%",
  Familiar: "45%",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-wide">
        <div className="section-heading reveal">
          EXPERTISE
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || Monitor;
            const delay = Math.min(index + 1, 5);

            return (
              <div
                key={category.category}
                className={`elegant-card p-8 reveal reveal-delay-${delay}`}
              >
                <Icon size={16} className="text-[#c89b6e] mb-4" />

                <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-[#8a8580] mb-8">
                  {category.category}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[#cdc7be]">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-[#5a5651]">
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: levelWidth[skill.level] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
