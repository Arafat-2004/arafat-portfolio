"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import AnimatedCounter from "./AnimatedCounter";
import TextReveal from "./TextReveal";

const stats = [
  { value: 4, suffix: "+", label: "Organizations" },
  { value: 5, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "+", label: "Years Design" },
  { value: 2, suffix: "", label: "Featured Projects" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-12">
            <TextReveal text="The story behind the code" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo placeholder — enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative group">
              {/* Decorative corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary-500/40 rounded-tl-lg" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary-500/40 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-primary-500/40 rounded-bl-lg" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary-500/40 rounded-br-lg" />

              <div className="aspect-[4/5] rounded-2xl glass overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary-900/30 to-surface-900 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="text-center p-8">
                  <div className="w-28 h-28 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4 ring-2 ring-primary-500/30 ring-offset-4 ring-offset-transparent">
                    <span className="text-5xl font-bold gradient-text">
                      AM
                    </span>
                  </div>
                  <p className="text-surface-400 text-sm">
                    Professional photo coming soon
                  </p>
                </div>
              </div>

              {/* Floating accent dots */}
              <div className="absolute top-6 -right-2 w-3 h-3 rounded-full bg-primary-500/40 animate-pulse" />
              <div className="absolute bottom-10 -left-2 w-2 h-2 rounded-full bg-purple-500/40 animate-pulse delay-1000" />

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600/20 rounded-2xl blur-xl" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <div className="space-y-5 text-surface-300 leading-relaxed text-lg">
              {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-sm">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-surface-300">
                  {personalInfo.location}
                </span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-sm">
                <GraduationCap size={16} className="text-primary-400" />
                <span className="text-surface-300">
                  MUST — Computer Science & Engineering
                </span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-surface-300">
                  {personalInfo.availability}
                </span>
              </div>
            </div>

            {/* Animated stat counters */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs text-surface-500 mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
