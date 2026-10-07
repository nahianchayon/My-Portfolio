
"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import FloatingImages from "@/components/FloatingImages";

const email = "nahiansavage9@gmail.com";

export default function Intro() {
  const [copied, setCopied] = useState(false);
  const [shortcut] = useState(() => {
    if (typeof navigator === "undefined") return "Press Ctrl+C to copy my email";
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent);
    return isMac ? "Press ⌘ C to copy my email" : "Press Ctrl+C to copy my email";
  });

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isShortcut = navigator.platform.toLowerCase().includes("mac")
        ? event.metaKey && event.key.toLowerCase() === "c"
        : event.ctrlKey && event.key.toLowerCase() === "c";

      if (isShortcut) {
        event.preventDefault();
        void handleCopy();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleCopy]);

  return (
    <section id="top" className="scroll-mt-24 pt-10 sm:pt-14">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="rounded-[28px] border border-[#ececec] bg-white px-4 py-5 shadow-[0_18px_40px_rgba(17,17,17,0.015)] sm:px-6"
      >
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#e8e8e8] shadow-sm">
            <Image
              src="/avatar.jpg"
              alt="Nahian Rahman Chayon"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-[15px] font-medium text-[#111111]">Nahian Rahman Chayon</h1>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#7c7c7c]">
              Computer Science & Engineering Student / AI & Full-Stack Developer
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-[34rem] text-[14px] leading-7 text-[#525252] sm:text-[15px]">
          Motivated Computer Science & Engineering student building full-stack products, UI/UX experiences, and intelligent systems. I enjoy transforming real-world problems into practical, user-focused technology.
        </p>

        <FloatingImages />

        <button
          type="button"
          onClick={handleCopy}
          className="group inline-flex items-center gap-2 rounded-full border border-[#e8e8e8] bg-[#fafafa] px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[#333333] transition-colors hover:border-[#d9d9d9] hover:bg-white"
        >
          <Mail size={12} className="text-[#3f7df9]" />
          <span>{copied ? "Copied!" : shortcut}</span>
        </button>

        <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#888888]">
          <Sparkles size={12} className="text-[#3f7df9]" />
          Based in Sayednagar, Dhaka, Bangladesh
        </div>
      </motion.div>
    </section>
  );
}
