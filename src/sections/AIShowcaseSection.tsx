"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaBolt, FaHeadset } from "react-icons/fa";
import { AI_QUICK_PROMPTS } from "@/lib/portfolioAI";
import PremiumButton from "@/components/PremiumButton";

const points = [
  { icon: <FaBolt className="text-cyan-400" />, title: "Instant answers", text: "Ask about skills, Amazon Connect, AWS, and projects — right on this page." },
  { icon: <FaHeadset className="text-orange-400" />, title: "Human support too", text: "Amazon Connect live chat sits beside the AI when you need a real agent." },
  { icon: <FaComments className="text-cyan-400" />, title: "Hire-ready path", text: "From question to contact in a few taps — demos, email, LinkedIn." },
];

export default function AIShowcaseSection() {
  const openAI = () => window.dispatchEvent(new CustomEvent("portfolio-ai-open"));

  return (
    <section id="ai" className="scroll-mt-28 bg-zinc-950 px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-10 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">
                On-site assistant
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Talk to Akash AI.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                A lightweight guide trained on this portfolio — skills, Connect work, AWS cloud, and
                how to collaborate.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <PremiumButton type="button" variant="primary" size="lg" onClick={openAI}>
                  Start AI chat
                </PremiumButton>
                <PremiumButton href="#projects" variant="outline" size="lg">
                  Browse projects
                </PremiumButton>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {AI_QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={openAI}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs font-medium text-zinc-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-3">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lg">
                    {p.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
