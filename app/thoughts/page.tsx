"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Quote, Share2, Check, Sparkles, Tag, ArrowUp, Sun, Moon } from "lucide-react";
import { thoughts } from "@/data/thoughts";

export default function ThoughtsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const categories = ["All", ...Array.from(new Set(thoughts.map((t) => t.category)))];

  const filteredThoughts =
    selectedCategory === "All"
      ? thoughts
      : thoughts.filter((t) => t.category === selectedCategory);

  const handleCopyLink = (slug: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/thoughts#${slug}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopiedSlug(slug);
        setTimeout(() => setCopiedSlug(null), 2000);
      });
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f6] text-[#111111] transition-colors duration-200">
      <main className="mx-auto w-[92%] max-w-[720px] py-16 sm:py-20">
        {/* Top Header */}
        <div className="mb-10 flex items-center justify-between border-b border-[#ececec] pb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#555555] transition-colors hover:text-[#111111]"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">
              {thoughts.length} ESSAYS &amp; NOTES
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-all hover:scale-105 cursor-pointer shadow-xs ${
                isDark
                  ? "border border-[#3f3f46] bg-[#1a1a1e] text-amber-400 hover:border-[#71717a] hover:bg-[#27272a]"
                  : "border border-black bg-black text-white hover:bg-[#262626]"
              }`}
            >
              {isDark ? (
                <Sun size={14} className="text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon size={14} className="text-white fill-white transition-transform hover:-rotate-12" />
              )}
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e4e4e4] bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#555555] shadow-xs">
            <Sparkles size={11} className="text-[#0a84ff]" />
            <span>Field Notes &amp; Engineering Essays</span>
          </div>
          <h1 className="mt-4 text-[28px] font-semibold tracking-tight text-[#111111] sm:text-[34px]">
            Thoughts on AI, Hardware &amp; Product Craft
          </h1>
          <p className="mt-3 text-[14.5px] leading-relaxed text-[#555555]">
            Reflections, architectural decisions, and technical insights from research in multimodal AI,
            embedded systems with Raspberry Pi and ESP32, and building practical software products.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-medium transition-all ${
                    active
                      ? "bg-[#111111] text-white shadow-xs"
                      : "border border-[#e5e5e5] bg-white text-[#555555] hover:border-[#cccccc] hover:text-[#111111]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </header>

        {/* Articles List */}
        <div className="space-y-12">
          {filteredThoughts.map((thought, idx) => (
            <article
              key={thought.slug}
              id={thought.slug}
              className="scroll-mt-24 rounded-[20px] border border-[#ebebeb] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all sm:p-9"
            >
              {/* Meta bar */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#f0f0f0] pb-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-[#888888]">
                    {thought.date}
                  </span>
                  <span className="text-[#d0d0d0]">•</span>
                  <span className="rounded-full border border-[#ececec] bg-[#f9f9f9] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#4a4a4a]">
                    {thought.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-[11.5px] text-[#888888]">
                    <Clock size={12} />
                    <span>{thought.readTime}</span>
                  </div>

                  <button
                    onClick={() => handleCopyLink(thought.slug)}
                    title="Copy direct anchor link to this thought"
                    className="flex items-center gap-1 rounded-md border border-[#e8e8e8] bg-[#fafafa] px-2 py-1 text-[10.5px] text-[#555555] transition-colors hover:border-[#cccccc] hover:text-[#111111]"
                  >
                    {copiedSlug === thought.slug ? (
                      <>
                        <Check size={11} className="text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={11} />
                        <span>Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-5">
                <h2 className="text-[21px] font-semibold tracking-tight text-[#111111] sm:text-[25px]">
                  {thought.title}
                </h2>
                <p className="mt-2 text-[13.5px] font-medium italic text-[#666666]">
                  {thought.subtitle}
                </p>
              </div>

              {/* Core Takeaway Callout Box */}
              <div className="my-6 rounded-[14px] border border-[#dce6f2] bg-[linear-gradient(135deg,#f8faff_0%,#edf3fb_100%)] p-4 sm:p-5 text-[#1e2f42]">
                <div className="flex items-start gap-3">
                  <Quote size={18} className="mt-0.5 shrink-0 text-[#2563eb]" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                      Key Takeaway
                    </p>
                    <p className="mt-1 text-[13.5px] font-medium leading-relaxed sm:text-[14px]">
                      {thought.takeaway}
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Article Body */}
              <div className="space-y-4 text-[14.5px] leading-7 text-[#3f3f3f] sm:text-[15px] sm:leading-8">
                {thought.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Tags & Article Footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#f0f0f0] pt-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Tag size={12} className="text-[#888888]" />
                  {thought.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#ececec] bg-[#fafafa] px-2 py-0.5 text-[10.5px] text-[#555555]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-[10.5px] text-[#999999]">
                  Article #{idx + 1}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#e5e5e5] pt-8 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#444444] transition-colors hover:text-[#111111]"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to portfolio home</span>
          </Link>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#555555] transition-all hover:border-[#111111] hover:text-[#111111]"
          >
            <span>Back to top</span>
            <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </main>
    </div>
  );
}
