"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/data/portfolio";

const subjects = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Other",
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Please enter a valid email";
    if (!formState.subject) newErrors.subject = "Please select a subject";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    else if (formState.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    // Simulate sending — replace with actual email service (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-surface-900/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-surface-400 max-w-2xl mb-12">
            Have a project in mind, a job opportunity, or just want to connect?
            I&apos;d love to hear from you. I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-surface-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                  <Mail size={18} className="text-primary-400" />
                </div>
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-surface-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                  <Phone size={18} className="text-primary-400" />
                </div>
                <span className="text-sm">{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-surface-300">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <MapPin size={18} className="text-primary-400" />
                </div>
                <span className="text-sm">
                  {personalInfo.location} —{" "}
                  <span className="text-surface-500">
                    {personalInfo.availability}
                  </span>
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-sm text-surface-500 mb-3">
                Find me on social media
              </p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-surface-400 hover:text-white hover:bg-primary-500/10 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-surface-400 hover:text-white hover:bg-primary-500/10 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-surface-400 hover:text-white hover:bg-primary-500/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-6 space-y-5"
          >
            {status === "sent" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
              >
                <CheckCircle size={18} />
                Thank you! I&apos;ll get back to you within 24 hours.
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-surface-400 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 bg-surface-800/50 border rounded-xl text-white text-sm placeholder:text-surface-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                    errors.name ? "border-red-500/50" : "border-white/10"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-surface-400 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 bg-surface-800/50 border rounded-xl text-white text-sm placeholder:text-surface-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                    errors.email ? "border-red-500/50" : "border-white/10"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm text-surface-400 mb-1.5">
                Subject *
              </label>
              <select
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className={`w-full px-4 py-3 bg-surface-800/50 border rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                  errors.subject ? "border-red-500/50" : "border-white/10"
                } ${!formState.subject ? "text-surface-600" : ""}`}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s} className="bg-surface-800">
                    {s}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-surface-400 mb-1.5">
                Message *
              </label>
              <textarea
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                rows={5}
                className={`w-full px-4 py-3 bg-surface-800/50 border rounded-xl text-white text-sm placeholder:text-surface-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none ${
                  errors.message ? "border-red-500/50" : "border-white/10"
                }`}
                placeholder="Tell me about your project or opportunity..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 bg-primary-600 hover:bg-primary-500 disabled:bg-primary-800 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
