"use client";

import { motion } from "framer-motion";

export default function IparxMediaLogo() {
  return (
    <motion.a
      href="https://pexbit-media.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-3"
    >
      <span className="text-[2.4rem] font-extrabold tracking-tight text-teal-700 md:text-[3.5rem]">
        PEXBIT
      </span>
      <span className="text-[2.4rem] font-extrabold tracking-tight text-[var(--ink)] md:text-[3.5rem]">
        MEDIA
      </span>
    </motion.a>
  );
}
