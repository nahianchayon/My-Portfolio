"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft, Sun, Moon } from "lucide-react";

const projects = [
  {
    title: "CUBIQ",
    summary:
      "An AI-powered productivity device designed to simplify focus, meetings, and daily workflows. Powered by Raspberry Pi and ESP32, it combines voice recording, AI-powered transcription and summarization with gyroscopic interaction for an intuitive physical experience, bridging embedded hardware and intelligent software.",
  },
  {
    title: "Skill Binimoy",
    summary:
      "A peer-to-peer skill exchange platform built with React, TypeScript, JSON, and Firebase, deployed on Vercel. Connects learners and mentors for community knowledge-sharing.",
  },
  {
    title: "Pocket Pilot",
    summary:
      "A smart personal expense tracker that tracks daily spending and savings goals, providing intelligent forecasting and actionable suggestions on how adjusting habits can help users save more money.",
  },
  {
    title: "Multimodal Cancer AI Framework",
    summary: "A deep learning and NLP-driven clinical platform that supports microscopic image interpretation and report analysis.",
  },
];

export default function ProjectsPage() {
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

  return (
    <div className="min-h-screen bg-[#f7f7f6] text-[#111111] transition-colors duration-200">
      <main className="mx-auto w-[92%] max-w-[680px] py-20">
        <div className="mb-10 flex items-center justify-between border-b border-[#ececec] pb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#555555] transition-colors hover:text-[#111111]"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">Projects</span>
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

        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[20px] border border-[#ececec] bg-white p-6 shadow-xs">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a8a]">Featured project</p>
              <h1 className="mt-2 text-[22px] font-semibold text-[#111111]">{project.title}</h1>
              <p className="mt-3 text-[14px] leading-7 text-[#525252]">{project.summary}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
