"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Clock, Quote, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { thoughts } from "@/data/thoughts";

export default function Thoughts() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section id="thoughts" className="scroll-mt-24 pt-12">
      <div className="space-y-4 border-b border-[#ececec] pb-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">Thoughts &amp; Notes</p>
            <p className="mt-1 text-[13px] text-[#6b6b6b]">
              Reflections on multimodal AI, embedded hardware, human-machine interfaces, and engineering craft.
            </p>
          </div>
          <Link
            href="/thoughts"
            className="group inline-flex items-center gap-1.5 self-start text-[11px] font-medium text-[#444444] transition-colors hover:text-[#111111] sm:self-auto"
          >
            <span>View all ({thoughts.length})</span>
            <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="space-y-2.5 pt-1">
          {thoughts.map((post) => {
            const isExpanded = expandedSlug === post.slug;

            return (
              <div
                key={post.slug}
                className={`overflow-hidden rounded-[14px] border transition-all duration-200 ${
                  isExpanded
                    ? "border-[#dedede] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                    : "border-[#f0f0f0] bg-white hover:border-[#e2e2e2] hover:bg-[#fafafa]"
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(post.slug)}
                  className="flex cursor-pointer flex-col gap-2 p-3.5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#888888]">
                      {post.date}
                    </span>
                    <span className="rounded-full border border-[#ececec] bg-[#f9f9f9] px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#555555]">
                      {post.category}
                    </span>
                    <h3 className="text-[13.5px] font-medium text-[#111111] transition-colors group-hover:text-black">
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:justify-end">
                    <div className="flex items-center gap-1 text-[11px] text-[#8e8e8e]">
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-medium text-[#6b6b6b]">
                        {isExpanded ? "Close" : "Read"}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#737373]"
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expanded preview drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeInOut" }}
                      className="border-t border-[#f0f0f0] bg-[#fafafa]/60 px-4 py-4 sm:px-5"
                    >
                      <p className="text-[12.5px] font-normal italic text-[#666666]">
                        {post.subtitle}
                      </p>

                      {/* Highlighted Takeaway quote */}
                      <div className="my-3.5 rounded-[10px] border border-[#e6ebf2] bg-[linear-gradient(135deg,#f8faff_0%,#f1f5fb_100%)] p-3 text-[#2a3b4f]">
                        <div className="flex items-start gap-2.5">
                          <Quote size={15} className="mt-0.5 shrink-0 text-[#3b82f6]" />
                          <p className="text-[12.5px] font-medium leading-relaxed">
                            {post.takeaway}
                          </p>
                        </div>
                      </div>

                      {/* First Paragraph */}
                      <p className="text-[13px] leading-relaxed text-[#4a4a4a]">
                        {post.paragraphs[0]}
                      </p>

                      {/* Action footer */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#ececec] pt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-white px-2 py-0.5 text-[10px] text-[#666666] border border-[#eaeaea]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3">
                          <Link
                            href={`/thoughts#${post.slug}`}
                            className="group inline-flex items-center gap-1.5 rounded-full bg-[#111111] px-3.5 py-1.5 text-[11px] font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <BookOpen size={12} />
                            <span>Read Full Essay &amp; Notes</span>
                            <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <Link
            href="/thoughts"
            className="group inline-flex items-center gap-2 rounded-full border border-[#e2e2e2] bg-white px-4 py-2 text-[12px] font-medium text-[#333333] transition-all hover:border-[#111111] hover:text-[#111111] hover:shadow-xs"
          >
            <Sparkles size={13} className="text-[#0a84ff]" />
            <span>Browse all thoughts with long-form reflections</span>
            <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
