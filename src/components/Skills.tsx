"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Palette,
  Wrench,
  Terminal,
} from "lucide-react";
import { skills, type SkillCategory } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Palette,
  Wrench,
  Terminal,
};

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = iconMap[category.icon] || Monitor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 hover-lift group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
          <Icon size={20} className="text-primary-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{category.category}</h3>
      </div>

      <div className="space-y-3">
        {category.skills.map((skill) => (
          <div key={skill.name} className="group/skill">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-surface-300">{skill.name}</span>
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                  skill.level === "Advanced"
                    ? "bg-primary-500/15 text-primary-400"
                    : skill.level === "Proficient"
                    ? "bg-blue-500/15 text-blue-400"
                    : "bg-surface-700/50 text-surface-400"
                }`}
              >
                {skill.level}
              </span>
            </div>
            <div className="h-1.5 bg-surface-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width:
                    skill.level === "Advanced"
                      ? "90%"
                      : skill.level === "Proficient"
                      ? "70%"
                      : "45%",
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                className={`h-full rounded-full ${
                  skill.level === "Advanced"
                    ? "bg-gradient-to-r from-primary-600 to-primary-400"
                    : skill.level === "Proficient"
                    ? "bg-gradient-to-r from-blue-600 to-blue-400"
                    : "bg-surface-600"
                }`}
              />
            </div>
            {skill.context && (
              <p className="text-xs text-surface-500 mt-1 opacity-0 group-hover/skill:opacity-100 transition-opacity">
                {skill.context}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-900/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technologies & tools I work with
          </h2>
          <p className="text-surface-400 max-w-2xl mb-12">
            From frontend frameworks to design tools, here is the full stack of
            technologies I use to build production-ready solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, i) => (
            <SkillCard key={cat.category} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
