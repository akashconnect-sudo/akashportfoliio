"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#features" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function scrollToHash(href: string) {
  if (!href.startsWith("#")) return;
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[80] px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 ${
            scrolled
              ? "border-white/15 bg-zinc-950/90 shadow-lg shadow-black/40 backdrop-blur-xl"
              : "border-white/10 bg-zinc-950/70 backdrop-blur-lg"
          }`}
        >
          <a
            href="https://pexbit-media.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-3 py-2 text-[10px] font-bold tracking-[0.14em] text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200 sm:px-4 sm:text-xs"
          >
            BRANDING PROJECT
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(link.href);
                }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#contact");
              }}
              className="hidden rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 sm:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-300 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Close menu overlay"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 z-[100] flex h-full w-[min(18rem,calc(100vw-1.5rem))] flex-col gap-2 border-l border-white/10 bg-zinc-950 px-4 pt-24 pb-8 shadow-2xl md:hidden"
            >
              <button
                type="button"
                className="absolute top-5 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base font-semibold text-white"
                  onClick={(e) => {
                    setOpen(false);
                    e.preventDefault();
                    scrollToHash(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
