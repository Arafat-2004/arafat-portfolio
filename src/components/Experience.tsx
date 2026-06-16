"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface-900/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-2">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My professional journey
          </h2>
          <p className="text-surface-400 max-w-2xl mb-12">
            Four organizations before graduation — from IT support to design to
            enterprise infrastructure. Each role built skills that feed into my
            work today.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-primary-500 ring-4 ring-surface-950" />
                </div>

                <div className="glass rounded-2xl p-6 hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 text-xs text-surface-400 bg-surface-800/50 px-2.5 py-1 rounded-lg">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-surface-400 bg-surface-800/50 px-2.5 py-1 rounded-lg">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-surface-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
