"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypewriterText({
  text,
  speed = 60,
  delay = 0,
  className = "",
  cursorClassName = "",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplayText(text);
      return;
    }

    const startTimeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay, text]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  if (!started && displayText === "") {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={`inline-block w-[2px] h-[1em] bg-primary-400 ml-0.5 align-middle ${cursorClassName}`}
      />
    </span>
  );
}
