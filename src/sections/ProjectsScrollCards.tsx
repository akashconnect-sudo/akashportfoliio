"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import PremiumButton from "@/components/PremiumButton";

type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageContain?: boolean;
  tech: string[];
  demo: string;
  github?: string;
  category: "connect" | "ai" | "brand" | "web" | "commerce" | "app";
  accent: string;
  featured?: boolean;
};

const FILTERS = [
  { id: "all", label: "All work" },
  { id: "connect", label: "Connect & CRM" },
  { id: "ai", label: "AI" },
  { id: "brand", label: "Branding" },
  { id: "web", label: "Web" },
  { id: "commerce", label: "Commerce" },
  { id: "app", label: "App" },
] as const;

const projects: Project[] = [
  {
    id: "crm",
    title: "Sales Lead CRM",
    tagline: "Leads · click-to-call · Amazon Connect",
    description:
      "Production CRM for Indian sales teams — one desk for leads, owners, follow-ups, and click-to-call. Amazon Connect powers IVR, recording, and routing. Hosted on AWS EC2.",
    image: "/sales-lead-crm.jpg",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Amazon Connect", "IVR", "EC2"],
    demo: "https://salesleadcrm.duckdns.org/",
    github: "https://github.com/akash-cyber-stack/Client-CRM-software",
    category: "connect",
    accent: "from-cyan-400 to-orange-400",
    featured: true,
  },
  {
    id: "nexiora",
    title: "Nexiora AI",
    tagline: "Evidence-first research platform",
    description:
      "AI research that answers with citations from live sources — trust scoring and SSE streaming so creators see where facts come from.",
    image: "/nexiora-ai.png",
    tech: ["Next.js 15", "React 19", "TypeScript", "NestJS", "PostgreSQL", "Redis"],
    github: "https://github.com/akashconnect-sudo/Nexiora-AI",
    demo: "https://nexiora-ai-api.vercel.app/",
    category: "ai",
    accent: "from-sky-400 to-cyan-300",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    tagline: "Lexend · Connect chat · on-site AI",
    description:
      "Animated personal site with Lexend typography, live Amazon Connect chat, and an AI guide that knows the work.",
    image: "/akash-hero.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "AI"],
    github: "https://github.com/akashconnect-sudo/akashportfoliio",
    demo: "https://akashportfoliio-coral.vercel.app/",
    category: "web",
    accent: "from-cyan-300 to-teal-400",
  },
  {
    id: "pexbit",
    title: "Pexbit Media",
    tagline: "Personal branding for founders",
    description:
      "Studio site for founders, coaches, and executives — clean brand story, fast pages, shipped on Vercel.",
    image: "/pexbit-media.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    demo: "https://pexbit-media.vercel.app/",
    category: "brand",
    accent: "from-orange-400 to-amber-300",
  },
  {
    id: "wokora",
    title: "Wokora Foods",
    tagline: "Menu · orders · night dining",
    description:
      "Restaurant site with menu, online ordering, cafe hours, and a night-dining feel for the brand.",
    image: "/wokora-foods.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    demo: "https://wokorafoods.com/",
    category: "web",
    accent: "from-amber-400 to-orange-500",
  },
  {
    id: "quotes",
    title: "Random Quote Generator",
    tagline: "Flutter · instant inspiration",
    description: "Mobile app that serves inspirational quotes instantly from an API-backed feed.",
    image: "/random.jpg",
    tech: ["Flutter", "Dart", "API"],
    github: "https://github.com/Akash12876/random_quote_generator",
    demo: "#",
    category: "app",
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    id: "argroup",
    title: "AR Group of Education",
    tagline: "MBBS guidance since 2005",
    description:
      "Education brand site for aspiring doctors — migrated toward modern stack with clear programs and guidance paths.",
    image: "/A group.webp",
    tech: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    demo: "https://argroupofeducation.com/",
    category: "web",
    accent: "from-blue-400 to-cyan-400",
  },
  {
    id: "college",
    title: "College Dunias",
    tagline: "Private B.Tech. admissions",
    description:
      "Helps aspirants find private B.Tech. colleges and understand the admission process.",
    image: "/college.png",
    tech: ["WordPress", "Plugins", "API"],
    demo: "https://collegedunias.com/",
    category: "web",
    accent: "from-indigo-400 to-sky-400",
  },
  {
    id: "movato",
    title: "Movatobags",
    tagline: "Shopify storefront",
    description: "E-commerce for stylish, durable bags — catalog, payments, and Shopify ops.",
    image: "/movatobags.png",
    imageContain: true,
    tech: ["Shopify", "Liquid", "PHP", "Payments"],
    demo: "https://movatobags.com/",
    category: "commerce",
    accent: "from-rose-400 to-orange-400",
  },
];

function ProjectImage({
  src,
  alt,
  priority,
  contain,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  contain?: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-[220px] w-full items-center justify-center bg-zinc-800 text-zinc-500">
        <span className="text-sm font-medium">Preview unavailable</span>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 60vw"
      className={`transition-transform duration-700 ease-out group-hover:scale-[1.06] ${
        contain ? "object-contain p-8" : "object-cover"
      }`}
      priority={priority}
      onError={() => {
        if (imgSrc !== "/akash-hero.jpg") setImgSrc("/akash-hero.jpg");
        else setFailed(true);
      }}
    />
  );
}

function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 28 });
  const springY = useSpring(y, { stiffness: 180, damping: 28 });
  const background = useMotionTemplate`radial-gradient(520px circle at ${springX}px ${springY}px, rgba(34,211,238,0.16), transparent 42%)`;

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`group relative overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <SpotlightCard className="rounded-[2rem] border border-white/10 bg-zinc-900/70">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div className={`relative min-h-[280px] overflow-hidden bg-zinc-950 sm:min-h-[360px] ${project.imageContain ? "bg-white" : ""}`}>
          <motion.div
            initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <ProjectImage src={project.image} alt={project.title} priority contain={project.imageContain} />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-zinc-950/40" />
          <div className="absolute top-5 left-5 z-[3] flex items-center gap-2">
            <span className="rounded-full border border-cyan-400/40 bg-zinc-950/70 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-cyan-300 uppercase backdrop-blur">
              Featured
            </span>
            <span className="rounded-full border border-white/15 bg-zinc-950/60 px-3 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              className={`mb-4 h-1 rounded-full bg-gradient-to-r ${project.accent}`}
            />
            <p className="text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">{project.tagline}</p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-xs font-medium text-cyan-100"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            {project.demo !== "#" && (
              <PremiumButton href={project.demo} variant="primary" size="md">
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
                <FaArrowRight className="text-xs opacity-70" />
              </PremiumButton>
            )}
            {project.github && (
              <PremiumButton href={project.github} variant="outline" size="md">
                <FaGithub />
                GitHub
              </PremiumButton>
            )}
          </div>
        </div>
      </motion.article>
    </SpotlightCard>
  );
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <SpotlightCard className="rounded-[1.75rem] border border-white/10 bg-zinc-900/60">
      <motion.article
        initial={{ opacity: 0, y: 36, rotateX: 6 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.2), ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1000 }}
        className={`flex flex-col gap-0 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <div className={`relative aspect-[16/11] w-full overflow-hidden md:w-[48%] ${project.imageContain ? "bg-white" : "bg-zinc-950"}`}>
          <ProjectImage src={project.image} alt={project.title} contain={project.imageContain} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-80" />
          <motion.span
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`absolute top-4 font-mono text-5xl font-black tracking-tighter text-white/10 sm:text-6xl ${
              reverse ? "right-4" : "left-4"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          <div className={`absolute bottom-4 ${reverse ? "right-4" : "left-4"}`}>
            <span className={`inline-block h-1 w-10 rounded-full bg-gradient-to-r ${project.accent}`} />
          </div>
        </div>

        <div className="flex w-full flex-col justify-center gap-4 p-5 sm:p-7 md:w-[52%]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-cyan-400 uppercase">{project.tagline}</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-cyan-500/15 bg-cyan-950/30 px-2 py-0.5 text-[11px] font-medium text-cyan-100/90"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {project.demo !== "#" && (
              <PremiumButton href={project.demo} variant="primary" size="sm">
                <FaExternalLinkAlt className="text-[10px]" />
                Live Demo
              </PremiumButton>
            )}
            {project.github && (
              <PremiumButton href={project.github} variant="outline" size="sm">
                <FaGithub />
                GitHub
              </PremiumButton>
            )}
          </div>
        </div>
      </motion.article>
    </SpotlightCard>
  );
}

export default function ProjectsScrollCards() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const orbY = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.7, 0.7, 0.2]);
  const orbLeftY = useTransform(scrollYProgress, [0, 1], [-20, 60]);

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <div ref={sectionRef} className="relative mx-auto w-full max-w-6xl">
      <div className="pointer-events-none sticky top-[4.5rem] z-30 mb-6 h-0.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          style={{ scaleX: progressScale }}
          className="h-full origin-left bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-300"
        />
      </div>

      <motion.div
        aria-hidden
        style={{ y: orbY, opacity: orbOpacity }}
        className="pointer-events-none absolute -top-10 -right-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]"
      />
      <motion.div
        aria-hidden
        style={{ y: orbLeftY }}
        className="pointer-events-none absolute top-1/3 -left-24 h-64 w-64 rounded-full bg-orange-500/10 blur-[90px]"
      />

      <header className="relative mb-10 max-w-3xl md:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-xs font-semibold tracking-[0.22em] text-cyan-400 uppercase"
        >
          Portfolio · Live builds
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Work that shipped — not mockups.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400"
        >
          Filter by lane, then open a live demo. CRM + Amazon Connect, AI, branding, and commerce —
          each one is running in the wild.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`relative rounded-xl px-3.5 py-2 text-xs font-semibold tracking-wide transition sm:text-sm ${
                  active ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-xl bg-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      <div className="relative flex gap-8 lg:gap-10">
        <aside className="sticky top-28 hidden h-fit w-14 shrink-0 flex-col gap-3 lg:flex">
          {filtered.map((p, i) => (
            <a
              key={p.id}
              href={`#project-${p.id}`}
              className="group flex flex-col items-center gap-1"
              title={p.title}
            >
              <span className="font-mono text-[10px] text-zinc-600 transition group-hover:text-cyan-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-8 w-px bg-gradient-to-b from-cyan-400/50 to-transparent group-last:h-0" />
            </a>
          ))}
        </aside>

        <div className="min-w-0 flex-1 space-y-8 md:space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="space-y-8 md:space-y-10"
            >
              {featured && (
                <div id={`project-${featured.id}`}>
                  <FeaturedProject project={featured} index={0} />
                </div>
              )}
              {rest.map((project, idx) => (
                <div key={project.id} id={`project-${project.id}`}>
                  <ProjectPanel project={project} index={idx + 1} />
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8 text-center text-zinc-400">
                  No projects in this lane yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
