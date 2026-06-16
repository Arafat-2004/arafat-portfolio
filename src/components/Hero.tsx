"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, InstagramIcon } from "./Icons";
import { personalInfo } from "@/data/portfolio";
import TypewriterText from "./TypewriterText";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax movement for background orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Background gradient orbs with parallax */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: orbOpacity }}
      >
        <motion.div
          style={{ y: orb1Y }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-[var(--orb-1)]" />
        </motion.div>
        <motion.div
          style={{ y: orb2Y }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-[var(--orb-2)]" />
        </motion.div>
        <motion.div
          style={{ y: orb3Y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-[var(--orb-3)]" />
        </motion.div>
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-4">
            <TypewriterText text="Full-Stack Developer & Designer" speed={50} delay={0.5} />
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-heading mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="inline-block px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
            >
              View My Work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 glass hover:bg-[var(--hover-bg)] text-heading font-medium rounded-xl transition-all duration-200"
            >
              Get in Touch
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface-500 hover:text-heading transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface-500 hover:text-heading transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon size={22} />
          </a>
          <a
            href="/arafat-cv.pdf"
            download
            className="px-4 py-2 text-sm text-surface-400 hover:text-heading glass rounded-lg flex items-center gap-2 transition-all hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-surface-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
