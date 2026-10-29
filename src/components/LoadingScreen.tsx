"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-4">
        <motion.span
          className="text-3xl font-bold tracking-[0.2em] text-white uppercase sm:text-4xl"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          Akash
        </motion.span>
        <span className="h-1 w-24 overflow-hidden rounded-full bg-zinc-800">
          <motion.span
            className="block h-full rounded-full bg-cyan-400"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </div>
  );
}
