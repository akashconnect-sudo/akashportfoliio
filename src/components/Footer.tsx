"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/akashconnect-sudo/", icon: <FaGithub size={20} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/akash-pandey-5b9494315", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
  { href: "mailto:pandeyakash85296@gmail.com", icon: <FaEnvelope size={20} />, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <p className="text-2xl font-bold tracking-tight text-white">Akash</p>
        <p className="max-w-md text-sm text-zinc-400">
          Software Engineer · Amazon Connect · AWS · Building systems that connect people.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Akash. All rights reserved.</p>
      </div>
    </footer>
  );
}
