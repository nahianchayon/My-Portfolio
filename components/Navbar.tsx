"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#work", label: "WORK" },
  { href: "#thoughts", label: "THOUGHTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [active, setActive] = useState("#about");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode state from localStorage or system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: [0.4, 0.6, 0.8], rootMargin: "-10% 0px -40% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
    <header className="sticky top-0 z-50 border-b border-[#ebebeb] bg-[rgba(250,250,249,0.82)] backdrop-blur-sm transition-colors duration-200">
      <nav className="mx-auto flex w-[92%] max-w-[700px] items-center justify-between py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#111111]">
        {/* Left: EST 2026 + Dark Mode Toggle Button */}
        <div className="flex items-center gap-3">
          <Link href="#top" className="transition-opacity hover:opacity-70">
            EST. 2026
          </Link>

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

        <div className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-0.5 transition-colors duration-200 ${
                  isActive ? "text-[#111111]" : "text-[#3f3f3f] hover:text-[#111111]"
                }`}
              >
                <span
                  className={`after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-[#111111] after:transition-transform after:duration-300 ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          className="inline-flex items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#111111] transition-colors hover:border-[#d9d9d9] sm:hidden"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
