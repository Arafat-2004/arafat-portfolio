"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects, type Project } from "@/data/portfolio";
import TextReveal from "./TextReveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass rounded-2xl overflow-hidden hover-lift ${
        project.featured ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Header with gradient */}
      <div
        className={`relative p-6 pb-4 ${
          project.category === "web"
            ? "bg-gradient-to-br from-primary-900/40 to-purple-900/20"
            : project.category === "design"
            ? "bg-gradient-to-br from-pink-900/40 to-orange-900/20"
            : "bg-gradient-to-br from-cyan-900/40 to-blue-900/20"
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            {project.featured && (
              <div className="flex items-center gap-1.5 text-primary-400 text-xs font-mono mb-2">
                <Sparkles size={12} />
                Featured Project
              </div>
            )}
            <h3 className="text-xl font-bold text-heading">{project.name}</h3>
            <p className="text-surface-400 text-sm mt-1">{project.tagline}</p>
          </div>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg hover:bg-[var(--hover-bg)] transition-colors"
                aria-label="View source code"
              >
                <GithubIcon size={16} className="text-surface-300" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg hover:bg-[var(--hover-bg)] transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={16} className="text-surface-300" />
              </a>
            )}
          </div>
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg text-surface-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 pt-4">
        <p className="text-surface-300 leading-relaxed">
          {project.description}
        </p>

        {/* Expandable features */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-primary-400 text-sm font-medium mt-4 hover:text-primary-300 transition-colors"
        >
          {expanded ? "Hide details" : "View key features"}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-3 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-surface-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-primary-500/5 border border-primary-500/10 rounded-xl">
                <p className="text-sm text-surface-300 italic">
                  {project.highlights}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status badge */}
        <div className="mt-4">
          {project.status === "coming-soon" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Demo coming soon
            </span>
          )}
          {project.status === "live" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Live
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-2">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            <TextReveal text="What I've built" />
          </h2>
          <p className="text-surface-400 max-w-2xl mb-12">
            A selection of projects that showcase my technical capabilities,
            from full-stack web applications to design work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-surface-500 text-sm mt-8"
        >
          More projects are in development. Check back soon or follow me on{" "}
          <a
            href="https://github.com/Arafat-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            GitHub
          </a>{" "}
          for updates.
        </motion.p>
      </div>
    </section>
  );
}
