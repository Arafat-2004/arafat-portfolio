"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import TextReveal from "./TextReveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            <TextReveal text="What people say about my work" />
          </h2>
          <p className="text-surface-400 max-w-2xl mb-12">
            Feedback from supervisors and colleagues across my professional
            journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover-lift relative group"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                <Quote size={18} className="text-primary-400" />
              </div>

              {/* Testimonial text */}
              <p className="text-surface-300 leading-relaxed text-sm mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--glass-border)]">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-primary-400">
                    {testimonial.avatarInitial}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-surface-500">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
