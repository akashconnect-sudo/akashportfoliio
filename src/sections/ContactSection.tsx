"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import PremiumButton from "@/components/PremiumButton";

const ContactModal = dynamic(() => import("@/components/ContactModal"), { ssr: false });

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="scroll-mt-28 bg-zinc-950 px-4 py-20 sm:px-8 sm:py-24">
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-zinc-900/80 p-6 sm:p-10 md:p-14"
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">Contact</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Elevate your influence with <span className="text-cyan-400">Akash</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                Explore, collaborate, and ship — web, Amazon Connect, or AWS cloud.
              </p>
              <div className="mt-8">
                <PremiumButton type="button" variant="accent" size="lg" onClick={() => setModalOpen(true)}>
                  Let&apos;s collaborate
                </PremiumButton>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">Contact me</h3>
              <a
                href="mailto:pandeyakash85296@gmail.com"
                className="mt-2 block break-all text-base font-semibold text-white hover:text-cyan-300"
              >
                pandeyakash85296@gmail.com
              </a>
              <h3 className="mt-6 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">Follow me</h3>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://instagram.com/akashpandey_004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-300"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-pandey-5b9494315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <a
          href="https://pexbit-media.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex w-full items-center justify-center gap-3 py-6 text-center"
        >
          <span className="text-3xl font-extrabold tracking-tight text-cyan-400 sm:text-5xl">PEXBIT</span>
          <span className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">MEDIA</span>
        </a>
      </div>
    </section>
  );
}
