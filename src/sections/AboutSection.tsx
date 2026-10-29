"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FaAws, FaCopy, FaDownload, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import PremiumButton from "@/components/PremiumButton";

const AWS_SERVICES = [
  {
    id: "connect",
    name: "Amazon Connect",
    detail:
      "I set up cloud call centers — IVR menus, queues, agent routing, Lex chatbots, and live chat that connect to your CRM.",
  },
  {
    id: "ec2",
    name: "EC2",
    detail: "I host apps on AWS servers — security, SSH, Nginx, and Node.js deploys that stay online.",
  },
  {
    id: "lambda",
    name: "Lambda",
    detail: "I write small cloud functions that auto-log calls into the CRM when someone dials or chats.",
  },
  {
    id: "rds",
    name: "RDS / PostgreSQL",
    detail: "I design and run the database behind SaaS apps — leads, users, roles, and backups.",
  },
  {
    id: "s3",
    name: "S3",
    detail: "I store images and files in secure buckets and serve them fast with CloudFront when needed.",
  },
  {
    id: "iam",
    name: "IAM",
    detail: "I set who can access what on AWS — safe policies for Connect, Lambda, and storage.",
  },
];

const WORK_LOG = [
  {
    when: "Now",
    role: "Amazon Connect Engineer",
    what: "AR Group of Education",
    note: "I build the company’s cloud call center and CRM — callers hear IVR menus, agents get the right queue, and call events save into the CRM automatically.",
  },
  {
    when: "2026",
    role: "Side project",
    what: "Nexiora AI",
    note: "An AI search platform that gives creators answers with sources — built with Next.js and TypeScript.",
  },
  {
    when: "2024–25",
    role: "Earlier roles",
    what: "Web & e-commerce",
    note: "WordPress sites, marketplace listings, SEO, and UI fixes — the foundation before full-stack and Connect work.",
  },
];

const PLAIN_POINTS = [
  {
    title: "What I do",
    text: "I build websites and SaaS apps, and I set up Amazon Connect call centers so businesses can talk to customers by phone or chat.",
  },
  {
    title: "Where I work",
    text: "Full-time at AR Group of Education in Noida — CRM software, Amazon Connect, and AWS cloud.",
  },
  {
    title: "How to reach me",
    text: "Download my resume, open LinkedIn, or copy my email — same details as on my CV.",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 70, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const [active, setActive] = useState("connect");
  const [copied, setCopied] = useState(false);
  const selected = AWS_SERVICES.find((s) => s.id === active) ?? AWS_SERVICES[0];

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("pandeyakash85296@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <section id="about" className="scroll-mt-28 bg-zinc-950 px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">
            <FaMapMarkerAlt className="shrink-0" />
            <span>Noida · BCA 2025 · Amazon Connect Developer</span>
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            I help businesses run websites and cloud call centers.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Simple version: I write full-stack web apps (Next.js + TypeScript), and I configure{" "}
            <span className="font-medium text-zinc-200">Amazon Connect</span> — the phone/chat system
            on AWS. At AR Group of Education I ship CRM software, IVR menus, agent queues, and AWS
            cloud setup so customers and agents stay connected.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/Akash_Pandey_Resume.pdf"
              download="Akash_Pandey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn premium-btn-accent px-6 py-2.5 text-sm sm:text-base"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <FaDownload />
                Download Resume
              </span>
            </a>
            <PremiumButton href="https://www.linkedin.com/in/akash-pandey-5b9494315" variant="primary" size="md">
              <FaLinkedin />
              LinkedIn
            </PremiumButton>
            <button
              type="button"
              onClick={() => void copyEmail()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
            >
              <FaCopy className="text-xs" />
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
        </motion.div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {PLAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-cyan-400 uppercase">{point.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-400" />
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">My journey</p>
            </div>
            <p className="mb-6 text-sm text-zinc-500">Read top to bottom — newest work first.</p>
            <ul className="space-y-5">
              {WORK_LOG.map((entry) => (
                <li key={entry.what} className="flex gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <span className="w-14 shrink-0 pt-0.5 font-mono text-xs text-cyan-400">{entry.when}</span>
                  <div>
                    <p className="text-xs font-medium text-orange-300/90">{entry.role}</p>
                    <p className="mt-0.5 font-semibold text-white">{entry.what}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{entry.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { n: 20, s: "+", l: "months shipping" },
                { n: 8, s: "+", l: "projects live" },
                { n: 15, s: "", l: "Connect agents set up" },
              ].map((stat) => (
                <div key={stat.l} className="rounded-2xl border border-white/10 bg-black/30 px-3 py-4 text-center">
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter value={stat.n} suffix={stat.s} />
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-zinc-500">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-cyan-400 uppercase">AWS tools</p>
                  <h3 className="mt-1 text-lg font-bold text-white">Tap a name to see what I use it for</h3>
                </div>
                <FaAws className="shrink-0 text-2xl text-orange-400" />
              </div>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {AWS_SERVICES.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setActive(svc.id)}
                    className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition ${
                      active === svc.id
                        ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                        : "border-white/10 bg-white/5 text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {svc.name}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={selected.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm leading-relaxed text-zinc-300"
                >
                  <span className="mr-2 font-bold text-cyan-300">{selected.name}</span>
                  {selected.detail}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-3 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider text-orange-300 uppercase">AWS Certified</p>
                <p className="mt-1 font-semibold text-white">Amazon Connect Developer</p>
                <p className="mt-1 text-xs text-orange-200/70">Training badge · Jul 2026</p>
              </div>
              <span className="self-start rounded-lg border border-orange-400/30 bg-black/20 px-3 py-1.5 text-xs font-semibold text-orange-300 sm:self-center">
                connect + cloud
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="/Akash_Pandey_Resume.pdf"
                download="Akash_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn premium-btn-outline px-4 py-2 text-xs sm:text-sm"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <FaDownload />
                  Resume PDF
                </span>
              </a>
              <PremiumButton href="#skills" variant="ghost" size="sm">
                See skills
              </PremiumButton>
              <PremiumButton href="#projects" variant="ghost" size="sm">
                See projects
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
