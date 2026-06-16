"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            The story behind the code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl glass overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary-900/30 to-surface-900">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold gradient-text">
                      AM
                    </span>
                  </div>
                  <p className="text-surface-400 text-sm">
                    Professional photo coming soon
                  </p>
                </div>
              </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
