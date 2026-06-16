"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Skip for returning visitors in same session
    if (typeof window !== "undefined" && sessionStorage.getItem("loaded")) {
      setIsVisible(false);
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      sessionStorage.setItem("loaded", "true");
      return;
    }

    // Wait for fonts + minimum display time
    const minDisplay = new Promise((resolve) => setTimeout(resolve, 1200));
    const fontReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minDisplay, fontReady]).then(() => {
      setIsVisible(false);
      sessionStorage.setItem("loaded", "true");
    });
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-surface-950"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 w-24 h-24 rounded-2xl bg-primary-500/20 blur-2xl" />

            {/* Brand mark */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(99,102,241,0.1)",
                  "0 0 40px rgba(99,102,241,0.3)",
                  "0 0 20px rgba(99,102,241,0.1)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-24 h-24 rounded-2xl glass flex items-center justify-center"
            >
              <span className="text-3xl font-bold gradient-text">AM</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
