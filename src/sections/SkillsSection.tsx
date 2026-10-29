"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaShopify,
  FaWordpress,
  FaPhoneAlt,
  FaHeadset,
  FaComments,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiGithubactions, SiNginx } from "react-icons/si";

type Skill = { name: string; icon: React.ReactNode; level: string };
type SkillCategory = { title: string; color: string; skills: Skill[] };

const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" />, level: "Expert" },
      { name: "Next.js", icon: <SiNextdotjs className="text-zinc-200" />, level: "Advanced" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" />, level: "Advanced" },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" />, level: "Expert" },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" />, level: "Expert" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-300" />, level: "Expert" },
      { name: "PostgreSQL", icon: <FaDatabase className="text-blue-400" />, level: "Advanced" },
      { name: "Express.js", icon: <SiNginx className="text-gray-200" />, level: "Advanced" },
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, level: "Advanced" },
      { name: "Shopify", icon: <FaShopify className="text-green-400" />, level: "Expert" },
      { name: "WordPress", icon: <FaWordpress className="text-blue-400" />, level: "Expert" },
    ],
  },
  {
    title: "Amazon Connect",
    color: "from-orange-400 to-amber-500",
    skills: [
      { name: "Amazon Connect", icon: <FaPhoneAlt className="text-orange-400" />, level: "Advanced" },
      { name: "Contact Flows", icon: <FaHeadset className="text-amber-300" />, level: "Advanced" },
      { name: "IVR / Routing", icon: <FaComments className="text-yellow-300" />, level: "Advanced" },
      { name: "Agent Workspace", icon: <FaHeadset className="text-orange-300" />, level: "Intermediate" },
      { name: "Contact Lens", icon: <FaChartLine className="text-cyan-300" />, level: "Intermediate" },
      { name: "Lex / Chatbots", icon: <FaRobot className="text-sky-300" />, level: "Intermediate" },
      { name: "CCP Integration", icon: <FaPhoneAlt className="text-amber-400" />, level: "Advanced" },
      { name: "Call Analytics", icon: <FaChartLine className="text-green-300" />, level: "Intermediate" },
    ],
  },
  {
    title: "AWS Cloud",
    color: "from-sky-400 to-indigo-500",
    skills: [
      { name: "EC2 Instances", icon: <FaAws className="text-amber-400" />, level: "Advanced" },
      { name: "S3 Buckets", icon: <FaAws className="text-orange-300" />, level: "Advanced" },
      { name: "AWS Lambda", icon: <FaNodeJs className="text-green-400" />, level: "Advanced" },
      { name: "Amazon RDS", icon: <FaDatabase className="text-blue-400" />, level: "Advanced" },
      { name: "IAM & Security", icon: <FaAws className="text-red-300" />, level: "Advanced" },
      { name: "EventBridge", icon: <FaAws className="text-yellow-300" />, level: "Intermediate" },
      { name: "CloudWatch", icon: <FaChartLine className="text-purple-300" />, level: "Advanced" },
      { name: "AWS Amplify", icon: <FaAws className="text-orange-400" />, level: "Advanced" },
      { name: "API Gateway", icon: <FaAws className="text-cyan-300" />, level: "Advanced" },
      { name: "CloudFront CDN", icon: <FaAws className="text-sky-300" />, level: "Intermediate" },
      { name: "Cognito Auth", icon: <FaAws className="text-yellow-300" />, level: "Intermediate" },
      { name: "CI/CD Pipeline", icon: <SiGithubactions className="text-gray-200" />, level: "Advanced" },
    ],
  },
];

function SkillCard({ cat, i }: { cat: SkillCategory; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6 sm:p-8"
    >
      <h3 className={`mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-2xl font-bold text-transparent sm:text-3xl`}>
        {cat.title}
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {cat.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 py-4 text-center transition hover:border-cyan-400/30"
          >
            <span className="text-2xl sm:text-3xl">{skill.icon}</span>
            <span className="text-sm font-semibold text-zinc-100">{skill.name}</span>
            <span className="text-[10px] font-medium tracking-wide text-cyan-300 uppercase">{skill.level}</span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 bg-zinc-950 px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">Skills</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            The stack behind the work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Web, Amazon Connect, and AWS cloud — tools I use to ship, not just list.
          </p>
        </motion.header>
        <div className="flex flex-col gap-8">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
