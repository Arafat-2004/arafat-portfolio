import { plannedArticles } from "@/data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div className="container-wide">
        <div className="section-heading reveal">
          WRITING
        </div>

        <p
          className="text-2xl md:text-3xl font-light text-[#f4efe9] max-w-2xl mb-12 reveal reveal-delay-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Thoughts on code, design, and everything in between.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plannedArticles.map((article, index) => {
            const delay = Math.min(index + 1, 5);

            return (
              <article
                key={article.id}
                className={`elegant-card p-8 reveal reveal-delay-${delay}`}
              >
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-[#5a5651] border border-[rgba(255,255,255,0.06)] px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="mt-6 text-xl text-[#f4efe9] font-light leading-snug"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {article.title}
                </h3>

                <span className="mt-6 block font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#c89b6e]">
                  Coming Soon
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
