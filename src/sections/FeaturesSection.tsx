"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Website Development",
    desc: "Modern, fast sites with React and Next.js — clean UI, strong performance, ready to grow.",
    img: "/OIP.webp",
    alt: "Website Development",
  },
  {
    title: "Amazon Connect",
    desc: "Cloud contact centers — IVR, routing, CCP, Contact Lens, Lex, and AWS integrations that agents actually use.",
    img: "/amazon-connect.png",
    alt: "Amazon Connect",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-28 bg-zinc-950 px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">What I ship</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Two lanes. One standard: production-ready.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Web products people enjoy using, and contact-center systems that keep conversations flowing.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <Image
                  src={f.img}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold tracking-tight text-white">{f.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
