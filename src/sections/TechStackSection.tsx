"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma } from "react-icons/si";

const stack = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Connect", icon: <FaDatabase /> },
];

export default function TechStackSection() {
  return (
    <section className="overflow-hidden border-y border-white/5 bg-zinc-950 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6 text-center text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase"
      >
        Daily tools
      </motion.div>
      <div className="overflow-hidden">
        <div className="marquee-track px-4">
          {[...stack, ...stack].map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-zinc-200"
            >
              <span className="text-xl text-cyan-400">{item.icon}</span>
              <span className="text-sm font-semibold tracking-wide">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
