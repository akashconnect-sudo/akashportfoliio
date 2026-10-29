"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PremiumButton from "@/components/PremiumButton";
import { submitWeb3Form } from "@/lib/web3formsClient";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [showThankYou, setShowThankYou] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", agree: false });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let checked: boolean | undefined;
    if (type === "checkbox" && "checked" in e.target) {
      checked = (e.target as HTMLInputElement).checked;
    }
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const isValid = form.name && form.phone && form.email && form.agree;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || sending) return;
    setSending(true);
    setError("");
    try {
      const result = await submitWeb3Form({
        subject: `Portfolio contact: ${form.name}`,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message || "(no message)",
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setShowThankYou(true);
      setForm({ name: "", phone: "", email: "", message: "", agree: false });
      setTouched({});
      window.setTimeout(() => {
        setShowThankYou(false);
        onClose();
      }, 2200);
    } catch {
      setError("Network error. Please try again or email pandeyakash85296@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  const fieldClass = (name: string, empty: boolean) =>
    `rounded-xl border bg-zinc-800 px-4 py-2.5 text-white placeholder:text-zinc-500 outline-none focus:border-cyan-400 ${
      touched[name] && empty ? "border-red-500" : "border-zinc-700"
    }`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-7 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 text-2xl font-bold text-zinc-400 hover:text-white"
              aria-label="Close"
            >
              &times;
            </button>

            <AnimatePresence>
              {showThankYou ? (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl bg-zinc-900/95"
                >
                  <h2 className="mb-2 text-2xl font-extrabold text-cyan-400">Thank you!</h2>
                  <p className="text-zinc-300">Message sent — Akash will be notified.</p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className={showThankYou ? "pointer-events-none opacity-40" : ""}>
              <h2 className="mb-2 text-2xl font-extrabold text-white">Let&apos;s collaborate</h2>
              <p className="mb-5 text-zinc-400">Fill the form and I&apos;ll get back soon.</p>
              {error ? (
                <p className="mb-4 rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                  {error}
                </p>
              ) : null}
              <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} onBlur={handleBlur} className={fieldClass("name", !form.name)} required />
                <input type="tel" name="phone" placeholder="Contact Number" value={form.phone} onChange={handleChange} onBlur={handleBlur} className={fieldClass("phone", !form.phone)} required />
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} onBlur={handleBlur} className={fieldClass("email", !form.email)} required />
                <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} onBlur={handleBlur} className="min-h-[80px] resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white outline-none placeholder:text-zinc-500 focus:border-cyan-400" />
                <label className="flex select-none items-center gap-2 text-sm text-zinc-300">
                  <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="h-4 w-4 rounded accent-cyan-400" required />
                  <span>I confirm all details are correct</span>
                </label>
                <PremiumButton type="submit" variant="primary" size="md" className="mt-1 w-full" disabled={!isValid || sending}>
                  {sending ? "Sending…" : "Send Message"}
                </PremiumButton>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
