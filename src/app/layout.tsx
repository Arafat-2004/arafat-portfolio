import type { Metadata } from "next";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.tagline,
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.fullName,
              alternateName: personalInfo.name,
              jobTitle: personalInfo.title,
              description: personalInfo.tagline,
              email: personalInfo.email,
              telephone: personalInfo.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mbeya",
                addressCountry: "TZ",
              },
              sameAs: [
                personalInfo.github,
                personalInfo.instagram,
              ].filter((url) => url && url !== "#"),
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased" style={{ backgroundColor: "#0f0e0c", color: "#cdc7be" }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded focus:px-4 focus:py-2 focus:text-[#0f0e0c] focus:outline-none"
          style={{ backgroundColor: "#c89b6e" }}
        >
          Skip to content
        </a>
        {children}
        {/* Intersection Observer for CSS reveal animations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!("IntersectionObserver"in window))return;var o=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting){en.target.classList.add("visible");o.unobserve(en.target)}})},{threshold:0.08,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".reveal").forEach(function(el){o.observe(el)})})();`,
          }}
        />
      </body>
    </html>
  );
}
