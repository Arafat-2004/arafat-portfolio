export const personalInfo = {
  name: "Arafat Mbaga",
  fullName: "Arafat Semboja Mbaga",
  title: "Full-Stack Developer & Designer",
  tagline: "I build modern web applications with a designer's eye and an engineer's precision.",
  email: "arafatmmbaga99@gmail.com",
  phone: "+255 758 063 246",
  location: "Mbeya, Tanzania",
  availability: "Available for remote work worldwide",
  github: "https://github.com/Arafat-2004",
  instagram: "https://instagram.com/graphicdepot_tz",
  linkedin: "#",
  bio: `I'm Arafat Mbaga — a full-stack web developer, graphic designer, and IT professional based in Mbeya, Tanzania. I build modern web applications with Next.js, TypeScript, and Supabase, and I bring a designer's eye to every interface I create.

My journey spans computer maintenance, animation production, and enterprise IT support, giving me a rare combination of technical depth and creative vision. I'm currently completing my Diploma in Computer Science and Engineering at Mbeya University of Science and Technology, while building production-ready applications that solve real problems for Tanzanian businesses and beyond.`,
};

export interface Skill {
  name: string;
  level: "Familiar" | "Proficient" | "Advanced";
  context?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "Monitor",
    skills: [
      { name: "Next.js", level: "Advanced", context: "CleanHub marketplace, portfolio" },
      { name: "React", level: "Advanced", context: "Server Components, Hooks" },
      { name: "TypeScript", level: "Advanced", context: "Full type-safe applications" },
      { name: "Tailwind CSS", level: "Advanced", context: "v4, utility-first styling" },
      { name: "shadcn/ui", level: "Proficient", context: "Component library" },
      { name: "HTML5 / CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
    ],
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Proficient" },
      { name: "Prisma ORM", level: "Advanced", context: "Database modeling & queries" },
      { name: "Supabase", level: "Advanced", context: "Auth, Database, Storage" },
      { name: "Server Actions", level: "Proficient", context: "Next.js server functions" },
      { name: "PostgreSQL", level: "Proficient" },
    ],
  },
  {
    category: "Design & Creative",
    icon: "Palette",
    skills: [
      { name: "Adobe Photoshop", level: "Advanced", context: "3+ years professional" },
      { name: "Adobe Illustrator", level: "Proficient", context: "Logos, branding" },
      { name: "Adobe After Effects", level: "Proficient", context: "Animation production" },
      { name: "UI/UX Design", level: "Proficient", context: "User-centered interfaces" },
      { name: "Figma", level: "Familiar" },
    ],
  },
  {
    category: "IT & Infrastructure",
    icon: "Wrench",
    skills: [
      { name: "Computer Maintenance", level: "Advanced", context: "Hardware & software" },
      { name: "LAN Networking", level: "Proficient", context: "RJ-45, UTP, switches" },
      { name: "CCTV Installation", level: "Proficient", context: "DVR, NVR, IP cameras" },
      { name: "OS Deployment", level: "Advanced", context: "Windows installation" },
      { name: "Troubleshooting", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "Terminal",
    skills: [
      { name: "Git / GitHub", level: "Proficient" },
      { name: "React Hook Form", level: "Proficient" },
      { name: "Zod Validation", level: "Proficient" },
      { name: "Vercel", level: "Proficient", context: "Deployment & hosting" },
      { name: "Recharts", level: "Familiar", context: "Data visualization" },
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  highlights: string;
  status: "live" | "coming-soon" | "private";
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "design" | "it";
}

export const projects: Project[] = [
  {
    id: "cleanhub",
    name: "CleanHub",
    tagline: "Multi-Vendor Cleaning Services Marketplace",
    description:
      "A full-stack marketplace connecting cleaning service vendors with clients across Tanzania. Built as an academic project, CleanHub features complete vendor and client management, role-based authentication, analytics dashboards, and a responsive interface designed for both mobile and desktop users.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Prisma 7",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Recharts",
    ],
    features: [
      "Multi-vendor platform with client and vendor dashboards",
      "Role-based authentication with cookie-based sessions",
      "File upload management via Supabase Storage",
      "Analytics dashboard with Recharts visualizations",
      "Form validation with React Hook Form + Zod",
      "Maintenance mode middleware",
      "Responsive design with Tailwind CSS 4",
      "Edge Runtime middleware for security",
    ],
    highlights:
      "Built a production-grade marketplace from scratch as a university project, implementing authentication, authorization, and data management patterns used in enterprise applications.",
    status: "coming-soon",
    featured: true,
    category: "web",
  },
  {
    id: "graphicdepot",
    name: "GRAPHICDEPOT_TZ",
    tagline: "Graphic Design & Branding Portfolio",
    description:
      "A curated collection of graphic design work including logos, branding packages, social media graphics, and marketing materials created for Tanzanian businesses and brands.",
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"],
    features: [
      "Logo design and brand identity systems",
      "Social media graphics and marketing materials",
      "Poster and banner design",
      "Branding packages for small businesses",
    ],
    highlights:
      "Professional graphic design work spanning 3+ years, serving multiple clients across Tanzania through the GRAPHICDEPOT_TZ brand.",
    status: "coming-soon",
    demoUrl: "https://instagram.com/graphicdepot_tz",
    featured: true,
    category: "design",
  },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "employment" | "field-training" | "internship";
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "netphone",
    company: "Netphone Technology Limited",
    role: "IT Trainee",
    period: "July – September 2025",
    location: "Arusha, Tanzania",
    type: "field-training",
    description: [
      "Performed LAN network installation including RJ-45 crimping, UTP cabling, and switch configuration",
      "Installed and configured digital CCTV camera systems (DVR, NVR, IP cameras) for commercial clients",
      "Deployed Windows operating systems and essential software packages on new workstations",
      "Conducted hardware maintenance, printer networking, and antivirus installation across client sites",
      "Gained hands-on experience in a professional ICT services environment serving government and private clients",
    ],
    skills: ["LAN Networking", "CCTV Installation", "OS Deployment", "Hardware Maintenance", "Troubleshooting"],
  },
  {
    id: "tanesco",
    company: "TANESCO Ilala City",
    role: "Computer Field Assistant",
    period: "2024",
    location: "Dar es Salaam, Tanzania",
    type: "field-training",
    description: [
      "Assisted the IT department with daily operations and system maintenance tasks",
      "Supported hardware and software troubleshooting for enterprise systems",
      "Gained exposure to large-scale utility IT infrastructure management",
    ],
    skills: ["IT Support", "System Maintenance", "Troubleshooting"],
  },
  {
    id: "swahili-animations",
    company: "Swahili Animations Ltd",
    role: "Content Creator & Graphic Designer",
    period: "2022 – 2023",
    location: "Tanzania",
    type: "employment",
    description: [
      "Created engaging animation content using Adobe After Effects for various projects",
      "Designed graphics and multimedia content for clients using Adobe Photoshop and Illustrator",
      "Maintained and optimized computer systems and creative software workflows",
      "Collaborated with a creative team to deliver professional animation and design projects",
    ],
    skills: ["Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "Content Creation", "Animation"],
  },
  {
    id: "kom-school",
    company: "Kom Secondary School",
    role: "IT Assistant",
    period: "2021 – 2022",
    location: "Shinyanga, Tanzania",
    type: "employment",
    description: [
      "Managed the school's computer lab, ensuring all systems were operational for students and staff",
      "Provided IT support including hardware troubleshooting and software installation",
      "Assisted in setting up and maintaining computer systems for educational use",
    ],
    skills: ["Computer Maintenance", "IT Support", "Hardware Troubleshooting"],
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks. From landing pages to full-stack platforms, I deliver fast, responsive, and production-ready solutions.",
    icon: "Code2",
    deliverables: [
      "Custom websites & landing pages",
      "Full-stack web applications",
      "E-commerce & marketplace platforms",
      "API development & integration",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Professional visual identities that make your brand stand out. I create logos, branding packages, and marketing materials that communicate your message effectively.",
    icon: "PenTool",
    deliverables: [
      "Logo & brand identity design",
      "Social media graphics",
      "Posters, banners & flyers",
      "Marketing material design",
    ],
  },
  {
    id: "animation",
    title: "Animation & Motion",
    description:
      "Engaging animations and motion graphics that bring your ideas to life. From explainer videos to social media animations, I create content that captures attention.",
    icon: "Film",
    deliverables: [
      "Explainer animations",
      "Social media motion graphics",
      "Logo animations",
      "Multimedia content production",
    ],
  },
  {
    id: "it-support",
    title: "IT Support & Networking",
    description:
      "Reliable IT infrastructure setup and maintenance. I handle computer maintenance, network installation, CCTV systems, and general IT consultancy for businesses.",
    icon: "Network",
    deliverables: [
      "Computer maintenance & repair",
      "LAN network installation",
      "CCTV camera systems",
      "OS deployment & software setup",
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarInitial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Netphone Technology",
    role: "Supervisor",
    company: "Netphone Technology Limited",
    quote:
      "Arafat demonstrated strong technical aptitude during his field training. He quickly grasped complex networking concepts and contributed meaningfully to client installations.",
    avatarInitial: "N",
  },
  {
    id: "t2",
    name: "Swahili Animations",
    role: "Creative Director",
    company: "Swahili Animations Ltd",
    quote:
      "A creative thinker with solid technical skills. Arafat consistently delivered high-quality design and animation work, and was always eager to learn new techniques.",
    avatarInitial: "S",
  },
  {
    id: "t3",
    name: "TANESCO IT Dept",
    role: "IT Manager",
    company: "TANESCO Ilala City",
    quote:
      "Reliable, detail-oriented, and quick to adapt. Arafat handled IT support tasks efficiently and showed genuine interest in enterprise infrastructure management.",
    avatarInitial: "T",
  },
];

export interface BlogArticle {
  id: string;
  title: string;
  tags: string[];
  status: "published" | "planned";
}

export const plannedArticles: BlogArticle[] = [
  {
    id: "marketplace-nextjs",
    title: "Building a Multi-Vendor Marketplace with Next.js and Supabase",
    tags: ["Next.js", "Supabase", "Architecture"],
    status: "planned",
  },
  {
    id: "designer-to-developer",
    title: "From Graphic Designer to Full-Stack Developer: My Journey",
    tags: ["Career", "Design", "Development"],
    status: "planned",
  },
  {
    id: "it-infrastructure-lessons",
    title: "What I Learned About IT Infrastructure at Netphone Technology",
    tags: ["IT", "Networking", "Field Training"],
    status: "planned",
  },
];
