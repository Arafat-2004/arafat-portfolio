import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-wide">
        <div className="reveal">
          <h2 className="section-heading">KIND WORDS</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <blockquote
              key={t.id}
              className={`elegant-card p-8 reveal reveal-delay-${index + 1}`}
            >
              {/* Large opening quote mark */}
              <span
                className="text-6xl leading-none mb-4 block select-none text-[#c89b6e]"
                style={{ fontFamily: 'var(--font-serif)' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="text-lg font-light italic leading-relaxed mb-8 text-[#f4efe9]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t.quote}
              </p>

              {/* Divider line */}
              <div className="w-8 h-px bg-[#c89b6e] mb-6" />

              {/* Name */}
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-[#cdc7be]">
                {t.name}
              </p>

              {/* Role + Company */}
              <p className="font-mono text-[0.625rem] text-[#5a5651] mt-1">
                {t.role} &mdash; {t.company}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
