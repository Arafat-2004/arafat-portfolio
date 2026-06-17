export default function MarqueeStrip() {
  const items = [
    "Next.js",
    "TypeScript",
    "Supabase",
    "React",
    "Tailwind CSS",
    "Prisma",
    "Adobe Photoshop",
    "After Effects",
    "Figma",
    "PostgreSQL",
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div
      className="py-6 overflow-hidden"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {/* First pass */}
        <span className="flex items-center gap-6 px-3 whitespace-nowrap">
          {allItems.map((item, i) => (
            <span key={`a-${i}`} className="flex items-center gap-6">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651]">
                {item}
              </span>
              <span
                className="inline-block rounded-full flex-shrink-0"
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#c89b6e",
                }}
              />
            </span>
          ))}
        </span>
        {/* Second pass (duplicate for seamless loop) */}
        <span className="flex items-center gap-6 px-3 whitespace-nowrap">
          {allItems.map((item, i) => (
            <span key={`b-${i}`} className="flex items-center gap-6">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5a5651]">
                {item}
              </span>
              <span
                className="inline-block rounded-full flex-shrink-0"
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#c89b6e",
                }}
              />
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
