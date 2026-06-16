"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const plannedArticles = [
  {
    title: "Building a Multi-Vendor Marketplace with Next.js and Supabase",
    tags: ["Next.js", "Supabase", "Architecture"],
  },
  {
    title: "From Graphic Designer to Full-Stack Developer: My Journey",
    tags: ["Career", "Design", "Development"],
  },
  {
    title: "What I Learned About IT Infrastructure at Netphone Technology",
    tags: ["IT", "Networking", "Field Training"],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-2">
            Blog
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Thoughts & insights
          </h2>
          <p className="text-surface-400 max-w-2xl mb-12">
            Articles about web development, design, and my journey in tech.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plannedArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center mb-4">
                  <BookOpen size={18} className="text-surface-500" />
                </div>

                <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                  {article.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono bg-surface-800 text-surface-500 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs text-surface-600 font-medium">
                  Coming soon
                  <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
