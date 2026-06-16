"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Film, Network, ArrowRight } from "lucide-react";
import { services } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  PenTool,
  Film,
  Network,
};

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-2">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What I can do for you
          </h2>
          <p className="text-surface-400 max-w-2xl mb-12">
            Whether you need a website, a brand identity, animations, or IT
            infrastructure — I bring a multi-disciplinary skill set to every
            project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <Icon size={24} className="text-primary-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-surface-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-surface-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Request a quote
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
