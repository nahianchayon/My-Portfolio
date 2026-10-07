"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  Sparkles,
  Activity,
  Radio,
  Cpu,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

type CascadeCard = {
  id: string;
  title: string;
  category: string;
  tag: string;
  badge: string;
  accent: string;
  bgGradient: string;
  textColor: string;
  link?: string;
  preview: React.ReactNode;
};

const cards: CascadeCard[] = [
  {
    id: "cancer-ai",
    title: "Cancer AI Framework",
    category: "RESEARCH · FYDP UIU",
    tag: "ViT + Multimodal LLM",
    badge: "99.4% Acc",
    accent: "#818cf8",
    bgGradient: "from-[#0a0d1a] via-[#141838] to-[#252869]",
    textColor: "text-white",
    preview: (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[8px] font-mono text-white/80">
          <span className="flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#818cf8] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#818cf8]" />
            </span>
            H&amp;E Slide Scan
          </span>
          <span className="rounded bg-[#818cf8]/25 px-1.5 py-0.5 font-mono text-[8px] text-[#a5b4fc] border border-[#818cf8]/30">
            AUC 0.984
          </span>
        </div>

        {/* Real microscopic slide with scanning laser beam animation */}
        <div className="relative h-14 w-full overflow-hidden rounded-[8px] border border-white/20 shadow-inner">
          <Image
            src="/cancer-ai-slide.jpg"
            alt="Histopathology Slide"
            fill
            className="object-cover"
            sizes="240px"
          />
          {/* Animated scanning laser */}
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent shadow-[0_0_10px_#38bdf8]"
          />
          <div className="absolute top-1 left-1 rounded bg-black/60 px-1 py-0.5 text-[7px] font-mono text-[#38bdf8] backdrop-blur-md">
            Tumor Cell Contour Active
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cubiq",
    title: "CUBIQ",
    category: "EMBEDDED HARDWARE & AI",
    tag: "Raspberry Pi · ESP32",
    badge: "Hardware & Platform",
    accent: "#38bdf8",
    bgGradient: "from-[#020617] via-[#0b1329] to-[#142347]",
    textColor: "text-white",
    link: "https://cubiq-microprocessor-project.vercel.app/",
    preview: (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[8px] font-mono text-white/80">
          <span className="flex items-center gap-1">
            <Radio size={10} className="text-[#38bdf8] animate-pulse" />
            Live Hardware Stream
          </span>
          <span className="text-[#38bdf8] font-mono font-semibold">25:00 Focus</span>
        </div>

        {/* Dual layout: platform screenshot with physical hardware cube on top */}
        <div className="relative h-14 w-full overflow-hidden rounded-[8px] border border-white/20 shadow-inner">
          <Image
            src="/cubiq-platform.png"
            alt="CUBIQ Platform"
            fill
            className="object-cover object-top"
            sizes="240px"
          />
          {/* Floating mini cube hardware tag */}
          <div className="absolute right-1 bottom-1 flex items-center gap-1 rounded-[6px] border border-white/30 bg-black/75 px-1.5 py-0.5 backdrop-blur-md">
            <div className="relative h-4 w-4 overflow-hidden rounded-[3px]">
              <Image src="/cubiq.jpg" alt="Cube" fill className="object-cover" sizes="20px" />
            </div>
            <span className="text-[7px] font-mono text-white font-medium">Physical Device</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "skill-binimoy",
    title: "Skill Binimoy",
    category: "PEER LEARNING PLATFORM",
    tag: "React · TypeScript · Firebase",
    badge: "25k+ Users",
    accent: "#0ea5e9",
    bgGradient: "from-[#03436b] via-[#026aa6] to-[#0284c7]",
    textColor: "text-white",
    link: "https://skill-binimoy.vercel.app/",
    preview: (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[8px] font-mono text-white/90">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Live Marketplace
          </span>
          <span className="text-[#fef08a]">★★★★★ 4.9</span>
        </div>

        {/* Real Skill Binimoy web application preview */}
        <div className="relative h-14 w-full overflow-hidden rounded-[8px] border border-white/25 shadow-inner">
          <Image
            src="/skill-binimoy.png"
            alt="Skill Binimoy Platform"
            fill
            className="object-cover object-top"
            sizes="240px"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-1">
            <p className="text-[7px] font-medium text-white truncate text-center">
              Exchange Skills · Build Your Future
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "pocket-pilot",
    title: "Pocket Pilot",
    category: "FINTECH · STUDENT FINANCE",
    tag: "Expense & Savings AI",
    badge: "Smart Save",
    accent: "#10b981",
    bgGradient: "from-[#ffffff] via-[#f1f5f9] to-[#e2e8f0]",
    textColor: "text-[#0f172a]",
    link: "https://pocketpilotexpensetracker.lovable.app/auth",
    preview: (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[8px] font-mono text-[#334155]">
          <span className="flex items-center gap-1 font-semibold text-[#059669]">
            <TrendingUp size={10} />
            +$420 Saved
          </span>
          <span className="rounded bg-[#059669]/15 px-1 py-0.5 font-bold text-[#059669]">
            Target Met
          </span>
        </div>

        {/* Real Pocket Pilot web application preview */}
        <div className="relative h-14 w-full overflow-hidden rounded-[8px] border border-[#cbd5e1] shadow-inner">
          <Image
            src="/pocket-pilot.png"
            alt="Pocket Pilot App"
            fill
            className="object-cover object-top"
            sizes="240px"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-1">
            <p className="text-[7px] font-medium text-white text-center">
              💡 Forecast: Save +$180 this week
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "flowmingo",
    title: "Flowmingo AI",
    category: "WORKFLOW AUTOMATION",
    tag: "Multi-Agent AI Pipeline",
    badge: "Business Partner",
    accent: "#c084fc",
    bgGradient: "from-[#200c42] via-[#3b1275] to-[#6322b8]",
    textColor: "text-white",
    preview: (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[8px] font-mono text-white/80">
          <span className="flex items-center gap-1">
            <Cpu size={10} className="text-[#c084fc]" />
            Agent Orchestrator
          </span>
          <span className="text-[#c084fc]">Active</span>
        </div>

        {/* Dynamic flowing nodes graphic */}
        <div className="relative h-14 w-full overflow-hidden rounded-[8px] border border-white/20 bg-black/40 p-2 backdrop-blur-md flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="h-6 w-12 rounded bg-[#c084fc]/30 border border-[#c084fc]/50 flex items-center justify-center text-[7px] font-mono text-white">
              Prompt
            </div>
          </div>
          <motion.div
            animate={{ x: [-8, 8] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            className="h-0.5 w-6 bg-gradient-to-r from-[#c084fc] to-[#38bdf8]"
          />
          <div className="flex flex-col items-center">
            <div className="h-6 w-14 rounded bg-[#38bdf8]/30 border border-[#38bdf8]/50 flex items-center justify-center text-[7px] font-mono text-white">
              LLM Agent
            </div>
          </div>
          <span className="text-[9px] text-white/60">→</span>
          <div className="flex flex-col items-center">
            <div className="h-6 w-10 rounded bg-[#4ade80]/30 border border-[#4ade80]/50 flex items-center justify-center text-[7px] font-mono text-white">
              Action
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "air-defence",
    title: "Air Defence System",
    category: "EMBEDDED HARDWARE",
    tag: "Arduino · ESP32 · Sensors",
    badge: "Radar Tracking",
    accent: "#34d399",
    bgGradient: "from-[#042f2c] via-[#064e3b] to-[#047857]",
    textColor: "text-white",
    preview: (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[8px] font-mono text-white/80">
          <span className="flex items-center gap-1">
            <ShieldCheck size={10} className="text-[#34d399]" />
            Sonar Telemetry
          </span>
          <span className="text-[#34d399]">Target Locked</span>
        </div>

        {/* Rotating radar sweep interface */}
        <div className="relative h-14 w-full overflow-hidden rounded-[8px] border border-[#34d399]/40 bg-black/50 flex items-center justify-center">
          {/* Radar concentric circles */}
          <div className="absolute h-10 w-10 rounded-full border border-[#34d399]/30" />
          <div className="absolute h-6 w-6 rounded-full border border-[#34d399]/50" />
          <div className="absolute h-full w-0.5 bg-[#34d399]/20" />
          <div className="absolute h-0.5 w-full bg-[#34d399]/20" />

          {/* Rotating radar sweep */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute h-12 w-12 rounded-full border-r-2 border-t-2 border-[#34d399] opacity-75 origin-center"
          />

          {/* Blinking target */}
          <span className="absolute top-2 right-6 h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
          <span className="absolute bottom-1 right-2 font-mono text-[7px] text-[#34d399]">
            42° N · 18m
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "personal-lab",
    title: "Curious Lab",
    category: "CREATIVE ENGINEERING",
    tag: "Design · Systems · Art",
    badge: "2026",
    accent: "#fb7185",
    bgGradient: "from-[#831843] via-[#be123c] to-[#e11d48]",
    textColor: "text-white",
    preview: (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[8px] font-mono text-white/80">
          <span>Aesthetic Playground</span>
          <span>✦ 2026</span>
        </div>
        <div className="relative h-14 w-full overflow-hidden rounded-[8px] border border-white/25 bg-gradient-to-r from-[#fda4af]/30 to-[#f43f5e]/40 p-2 flex items-center justify-between backdrop-blur-md">
          <div>
            <p className="text-[12px] font-black tracking-tight text-white drop-shadow">
              SO CURIOUS.
            </p>
            <p className="text-[7px] font-mono uppercase tracking-wider text-white/80">
              Build Bold · Think Deep
            </p>
          </div>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/30 text-[16px] shadow-lg backdrop-blur-sm border border-white/40"
          >
            ✦
          </motion.div>
        </div>
      </div>
    ),
  },
];

export default function ProjectCascade() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for camera movement
  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Dynamic 3D deck tilt based on mouse position
  const deckRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-42, -26]);
  const deckRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [26, 14]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredCard(null);
  };

  return (
    <div className="relative my-12 select-none overflow-hidden rounded-[28px] border border-[#ececec] bg-[radial-gradient(ellipse_at_top,#ffffff,#f6f6f5)] py-8 px-4 sm:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-gradient-to-r from-[#38bdf8]/10 via-[#c084fc]/10 to-[#fb7185]/10 blur-3xl" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#ededed]">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white shadow-sm">
            <Layers size={12} />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111111]">
            Interactive 3D Project Deck
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-white px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-[#666666] shadow-sm">
          <Sparkles size={11} className="text-[#3b82f6]" />
          <span>Move mouse to tilt · Hover to surge</span>
        </div>
      </div>

      {/* 3D Perspective Viewport */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex h-[340px] sm:h-[380px] w-full items-center justify-start sm:justify-center overflow-x-auto no-scrollbar scroll-smooth [perspective:1400px] [perspective-origin:50%_50%]"
        style={{ perspective: "1400px" }}
      >
        <motion.div
          style={{
            rotateY: deckRotateY,
            rotateX: deckRotateX,
            rotateZ: 9,
            transformStyle: "preserve-3d",
          }}
          className="flex items-center pl-8 pr-16 py-10 transition-transform duration-75"
        >
          {cards.map((card, index) => {
            const isHovered = hoveredCard === card.id;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                animate={{
                  y: isHovered ? -38 : [0, -6, 0][index % 3],
                  scale: isHovered ? 1.14 : 1,
                  rotateY: isHovered ? -14 : 0,
                  rotateX: isHovered ? 8 : 0,
                  rotateZ: isHovered ? 1 : 0,
                  zIndex: isHovered ? 99 : index + 10,
                }}
                className={`group relative h-44 w-60 sm:h-52 sm:w-72 shrink-0 cursor-pointer overflow-hidden rounded-[22px] border border-white/40 bg-gradient-to-br ${
                  card.bgGradient
                } p-3.5 sm:p-4.5 shadow-[-20px_28px_45px_rgba(0,0,0,0.28)] transition-all duration-300 ${
                  index > 0 ? "-ml-36 sm:-ml-48" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: isHovered
                    ? `-25px 40px 65px -10px rgba(0,0,0,0.45), 0 0 40px ${card.accent}55`
                    : `-18px 25px 40px rgba(0,0,0,0.25)`,
                }}
                onClick={() => {
                  if (card.link) window.open(card.link, "_blank", "noopener,noreferrer");
                }}
              >
                {/* Glossy specular reflection sheen */}
                <div className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 transition-transform duration-700 group-hover:translate-x-full" />

                {/* Window header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-white/15">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f56] opacity-80" />
                    <span className="h-2 w-2 rounded-full bg-[#ffbd2e] opacity-80" />
                    <span className="h-2 w-2 rounded-full bg-[#27c93f] opacity-80" />
                  </div>
                  <span
                    className={`text-[8px] font-mono uppercase tracking-[0.2em] font-semibold ${
                      card.textColor === "text-white" ? "text-white/80" : "text-[#475569]"
                    }`}
                  >
                    {card.category}
                  </span>
                </div>

                {/* Title & Badge */}
                <div className="mt-2.5">
                  <div className="flex items-center justify-between gap-1.5">
                    <h4
                      className={`text-[14px] sm:text-[15px] font-bold leading-tight tracking-tight ${card.textColor}`}
                    >
                      {card.title}
                    </h4>
                    <span className="rounded-full bg-white/25 px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider backdrop-blur-md shadow-sm border border-white/20">
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Live Preview Area */}
                <div className="mt-3">{card.preview}</div>

                {/* Bottom Bar with direct link indication */}
                <div className="absolute bottom-2.5 inset-x-3.5 sm:inset-x-4.5 flex items-center justify-between pt-1.5 border-t border-white/15">
                  <span
                    className={`text-[9px] font-medium tracking-wide ${
                      card.textColor === "text-white" ? "text-white/90" : "text-[#334155]"
                    }`}
                  >
                    {card.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[9px] font-medium opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                    <span>{card.link ? "Open Live" : "Inspect"}</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom status text */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#ededed] text-[10px] text-[#777777]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-ping" />
          <span className="font-mono uppercase tracking-wider">7 Live Systems Active</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-[#888888]">
          Click card to open live deployment ↗
        </div>
      </div>
    </div>
  );
}
