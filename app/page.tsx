"use client";

import { useEffect, useState } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Guestbook from "@/components/Guestbook";
import Intro from "@/components/Intro";
import Links from "@/components/Links";
import Navbar from "@/components/Navbar";
import Personal from "@/components/Personal";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Thoughts from "@/components/Thoughts";

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(value);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f6] text-[#111111]">
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-[#0a84ff] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Navbar />

      <main className="mx-auto w-[92%] max-w-[700px] pb-10">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Links />
        <Thoughts />
        <Personal />
        <Guestbook />
      </main>

      <Footer />
    </div>
  );
}
