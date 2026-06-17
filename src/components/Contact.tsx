"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";

const subjects = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Other",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const formData = {
        access_key: "867d6bc4-1445-41be-a37a-9baa245bbf8d",
        name,
        email,
        subject,
        message,
        from_name: "Arafat Mbaga Portfolio",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <div className="reveal">
          <h2 className="section-heading">GET IN TOUCH</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-16">
          {/* LEFT — CTA */}
          <div className="md:col-span-5 reveal reveal-delay-1">
            <h3
              className="text-3xl md:text-4xl font-light leading-tight mb-8 text-[#f4efe9]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Let&apos;s build something together.
            </h3>

            <p className="text-base leading-relaxed mb-10 text-[#cdc7be]">
              Whether you have a project in mind, a job opportunity, or just want to say hello — I&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651] w-20">
                Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="link-underline text-sm text-[#cdc7be]"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651] w-20">
                Phone
              </span>
              <span className="text-sm text-[#cdc7be]">
                {personalInfo.phone}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651] w-20">
                Location
              </span>
              <span className="text-sm text-[#cdc7be]">
                {personalInfo.location}
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-6 mt-10 pt-10 border-t border-[rgba(255,255,255,0.06)]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[#cdc7be]"
              >
                GitHub
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-[#cdc7be]"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="md:col-span-7 reveal reveal-delay-2">
            <form onSubmit={handleSubmit}>
              {/* Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
              />

              {/* Name */}
              <div className="mb-6">
                <label
                  htmlFor="contact-name"
                  className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580] mb-2 block"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] pb-3 text-sm text-[#f4efe9] placeholder:text-[#5a5651] focus:border-[#c89b6e] focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="contact-email"
                  className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580] mb-2 block"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] pb-3 text-sm text-[#f4efe9] placeholder:text-[#5a5651] focus:border-[#c89b6e] focus:outline-none transition-colors"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580] mb-2 block"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] pb-3 text-sm text-[#f4efe9] focus:border-[#c89b6e] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0f0e0c] text-[#5a5651]">
                      Select a subject
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-[#0f0e0c] text-[#f4efe9]">
                        {s}
                      </option>
                    ))}
                  </select>
                  {/* Arrow indicator */}
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5651] pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#8a8580] mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] pb-3 text-sm text-[#f4efe9] placeholder:text-[#5a5651] focus:border-[#c89b6e] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="mb-6 p-4 border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.05)]">
                  <p className="font-mono text-[0.6875rem] text-[#4ade80]">
                    Thank you! I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 border border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.05)]">
                  <p className="font-mono text-[0.6875rem] text-[#f87171]">
                    Something went wrong. Please try again or email me directly at{" "}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="link-underline"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-[#0f0e0c] bg-[#c89b6e] px-8 py-4 hover:bg-[#d4a97c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
