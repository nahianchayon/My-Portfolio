"use client";

import { motion } from "framer-motion";

type ToolIcon = {
  name: string;
  category: string;
  icon: React.ReactNode;
};

const mainTools: ToolIcon[] = [
  {
    name: "Python",
    category: "AI & ML",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M11.91 2c-5.04 0-4.73 2.18-4.73 2.18l.01 2.26h4.81v.68H5.21S2 6.76 2 11.83c0 5.06 2.8 4.88 2.8 4.88h1.67v-2.34s-.09-2.8 2.76-2.8h4.73s2.66.04 2.66-2.58V4.58S16.95 2 11.91 2zm-2.6 1.48a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"
          fill="#387EB8"
        />
        <path
          d="M12.09 22c5.04 0 4.73-2.18 4.73-2.18l-.01-2.26h-4.81v-.68h6.79s3.21.36 3.21-4.71c0-5.06-2.8-4.88-2.8-4.88h-1.67v2.34s.09 2.8-2.76 2.8h-4.73s-2.66-.04-2.66 2.58v4.43S7.05 22 12.09 22zm2.6-1.48a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z"
          fill="#FFE873"
        />
      </svg>
    ),
  },
  {
    name: "PyTorch",
    category: "Research",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M13.2 2.5a.7.7 0 0 0-1 .1L9.7 5.6a6.8 6.8 0 1 0 5.4.1l-1.9-3.2zm-1.2 16.7a5.5 5.5 0 0 1-4.4-8.8l1.4 1.4a3.5 3.5 0 1 0 6 0l1.4-1.4a5.5 5.5 0 0 1-4.4 8.8zm4.4-14.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          fill="#EE4C2C"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Full-Stack",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.84 14.59-4.85-6.27v6.27H9.5V8.41h1.49l4.85 6.27V8.41h1.49v8.18h-1.49z" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#00D8FF" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "UI/UX",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <rect x="5" y="2" width="7" height="7" rx="3.5" fill="#F24E1E" />
        <rect x="12" y="2" width="7" height="7" rx="3.5" fill="#FF7262" />
        <rect x="5" y="9" width="7" height="7" rx="3.5" fill="#A259FF" />
        <circle cx="15.5" cy="12.5" r="3.5" fill="#1ABCFE" />
        <path
          d="M5 19.5C5 17.567 6.567 16 8.5 16H12v3.5c0 1.933-1.567 3.5-3.5 3.5S5 21.433 5 19.5z"
          fill="#0ACF83"
        />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    category: "LLM & AI",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20.5 10.3a4.7 4.7 0 0 0-.4-3.8 4.8 4.8 0 0 0-4.6-2.3 4.7 4.7 0 0 0-3.6-1.6 4.8 4.8 0 0 0-4.5 3.2 4.7 4.7 0 0 0-3.2 2.3 4.8 4.8 0 0 0 .5 5.1 4.7 4.7 0 0 0 .4 3.8 4.8 4.8 0 0 0 4.6 2.3 4.7 4.7 0 0 0 3.6 1.6 4.8 4.8 0 0 0 4.5-3.2 4.7 4.7 0 0 0 3.2-2.3 4.8 4.8 0 0 0-.5-5.1zm-8.5 9.7a3.3 3.3 0 0 1-2.4-1l1.3-.8a1.9 1.9 0 0 0 2.6-.9l1.8 1a3.3 3.3 0 0 1-3.3 1.7zm-6.2-3.6a3.3 3.3 0 0 1-.3-2.6l1.3.8a1.9 1.9 0 0 0 .5 2.7l-1.5 1.1zm-1.1-7.2a3.3 3.3 0 0 1 2.1-1.6v1.5a1.9 1.9 0 0 0-1 2.6l-1.7-.9v-1.6zm9-3.7a3.3 3.3 0 0 1 2.4 1l-1.3.8a1.9 1.9 0 0 0-2.6.9l-1.8-1a3.3 3.3 0 0 1 3.3-1.7zm6.2 3.6a3.3 3.3 0 0 1 .3 2.6l-1.3-.8a1.9 1.9 0 0 0-.5-2.7l1.5-1.1zm1.1 7.2a3.3 3.3 0 0 1-2.1 1.6v-1.5a1.9 1.9 0 0 0 1-2.6l1.7.9v1.6z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "Code",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "ESP32",
    category: "Hardware",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#E11D48" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <circle cx="9" cy="9" r="1.5" fill="#E11D48" />
        <circle cx="15" cy="9" r="1.5" fill="#E11D48" />
        <path d="M8 15h8M12 12v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    category: "Styling",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Cursor",
    category: "AI Editor",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M5 3l14 9-7 2-3 7L5 3z" fill="#111111" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    category: "Focus",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1DB954">
        <circle cx="12" cy="12" r="10" />
        <path
          d="M7 9.5c3-1 7-1 10 .5M7.5 12.5c2.5-.8 6-.8 8.5.5M8 15.5c2-.5 4.5-.5 6.5.5"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const technologies = [
  "Figma", "Python", "PyTorch", "TensorFlow", "Deep Learning", "Computer Vision", "LLMs", "Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Spring Boot", "Java", "C/C++", "MySQL", "DSA", "Arduino", "ESP32", "Raspberry Pi", "Git", "GitHub", "UI/UX", "Adobe Lightroom", "Premiere Pro"
];

export default function Stack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      className="pt-12"
    >
      <div className="space-y-6 border-b border-[#ececec] pb-10">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">STACK</p>

        {/* Clean squircle icons row matching screenshot */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {mainTools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ y: -5, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-[14px] border border-[#ececec] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:border-[#dadada] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              {tool.icon}

              {/* Tooltip */}
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#111111] px-2 py-0.5 text-[8px] font-medium tracking-wide text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 z-30">
                {tool.name} · {tool.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies tags */}
        <div className="pt-2">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#999999] mb-3">Core Skills & Tools</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#ececec] bg-white px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#4e4e4e] transition-colors hover:border-[#dcdcdc]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
