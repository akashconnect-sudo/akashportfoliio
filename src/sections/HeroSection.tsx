"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PremiumButton from "@/components/PremiumButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 px-4 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[48px_48px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[340px] shrink-0"
        >
          <div className="overflow-hidden rounded-3xl border-2 border-white/20 bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/akash-hero.jpg"
                alt="Akash Pandey"
                fill
                priority
                loading="eager"
                sizes="(max-width: 768px) 340px, 340px"
                className="object-cover object-[center_12%]"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-cyan-400/20 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full flex-1 flex-col items-center text-center md:items-start md:text-left"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-cyan-400 uppercase">
            Akash Pandey
          </p>
          <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Elevate Your Brand with Akash
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cyan-100/90 sm:text-lg">
            <span className="inline-flex items-center gap-2 font-medium text-cyan-300">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Software Engineer · Amazon Connect Developer
            </span>
            <span className="mt-2 block text-zinc-400">
              Full Stack · Amazon Connect · AWS · AI Platforms
            </span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <PremiumButton href="#projects" variant="primary" size="lg">
              View Projects
            </PremiumButton>
            <PremiumButton href="#contact" variant="outline" size="lg">
              Contact Me
            </PremiumButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
