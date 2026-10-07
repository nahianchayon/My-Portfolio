"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Activity, RefreshCw, TrendingUp, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

type Tile = {
  label?: string;
  className: string;
  image?: string;
};

type ProjectCardProps = {
  id?: string;
  kicker: string;
  title: string;
  description: string;
  tags: string[];
  tiles: Tile[];
  link?: string;
};

export default function ProjectCard({
  id,
  kicker,
  title,
  description,
  tags,
  tiles,
  link,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D gyroscopic tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-160, 160], [4, -4]), {
    stiffness: 300,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-4, 4]), {
    stiffness: 300,
    damping: 24,
  });

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotlightX.set(x);
    spotlightY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set(x - centerX);
    mouseY.set(y - centerY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Determine brand theme colors based on project id
  const projectTheme = {
    "cancer-ai": {
      glow: "rgba(6, 182, 212, 0.12)",
      borderHover: "hover:border-cyan-400/50",
      accent: "text-cyan-600",
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
      btnGlow: "hover:bg-cyan-600 hover:border-cyan-600",
    },
    "skill-binimoy": {
      glow: "rgba(99, 102, 241, 0.12)",
      borderHover: "hover:border-indigo-400/50",
      accent: "text-indigo-600",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      btnGlow: "hover:bg-indigo-600 hover:border-indigo-600",
    },
    "cubiq": {
      glow: "rgba(245, 158, 11, 0.14)",
      borderHover: "hover:border-amber-400/50",
      accent: "text-amber-600",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      btnGlow: "hover:bg-amber-600 hover:border-amber-600",
    },
    "pocket-pilot": {
      glow: "rgba(16, 185, 129, 0.12)",
      borderHover: "hover:border-emerald-400/50",
      accent: "text-emerald-600",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      btnGlow: "hover:bg-emerald-600 hover:border-emerald-600",
    },
  }[id || ""] || {
    glow: "rgba(0, 0, 0, 0.05)",
    borderHover: "hover:border-neutral-400/50",
    accent: "text-neutral-800",
    badgeBg: "bg-neutral-50 text-neutral-700 border-neutral-200",
    btnGlow: "hover:bg-black hover:border-black",
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`group relative rounded-[24px] border border-[#e8e8e8] bg-white p-4 sm:p-5 shadow-[0_14px_30px_rgba(17,17,17,0.03)] transition-all duration-300 ${projectTheme.borderHover} hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]`}
      >
        {/* Dynamic Cursor Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(450px circle at ${spotlightX}px ${spotlightY}px, ${projectTheme.glow}, transparent 70%)`,
          }}
        />

        {/* ===================== ANIMATED VISUAL STAGE ===================== */}
        <div className="relative h-44 sm:h-48 overflow-hidden rounded-[18px] border border-[#ececec] bg-gradient-to-br from-[#fafafa] to-[#f4f4f4]">
          {/* Subtle grid pattern background */}
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* 1. CANCER AI CUSTOM ANIMATED STAGE */}
          {id === "cancer-ai" ? (
            <div className="relative h-full w-full">
              {/* Tile 0: H&E Slide (Left) */}
              <motion.div
                animate={{
                  x: isHovered ? -16 : 0,
                  y: isHovered ? -4 : 0,
                  rotate: isHovered ? -12 : -5,
                  scale: isHovered ? 1.08 : 1,
                  zIndex: isHovered ? 25 : 10,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="absolute left-2 top-2.5 h-32 w-36 sm:w-40 overflow-hidden rounded-[14px] border border-[#e5e5e5] bg-white p-0.5 shadow-[0_14px_28px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[11px]">
                  <Image
                    src="/cancer-ai-slide.jpg"
                    alt="H&E Histopathology Slide"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />

                  {/* Animated AI Laser Scanner Beam */}
                  <motion.div
                    animate={{ top: ["0%", "88%", "0%"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-0 h-[2.5px] bg-cyan-400 shadow-[0_0_8px_#22d3ee,0_0_16px_#06b6d4] z-30 pointer-events-none"
                  />
                  {/* Laser trailing glow */}
                  <motion.div
                    animate={{ top: ["0%", "88%", "0%"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-0 h-10 -translate-y-9 bg-gradient-to-b from-transparent to-cyan-400/25 pointer-events-none z-20"
                  />

                  {/* Corner Reticle & Target label */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2 pb-1.5 pt-3">
                    <span className="block text-center text-[7.5px] font-mono font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      H&amp;E SLIDES · SCANNING
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Tile 1: AI Clinical Report (Center) */}
              <motion.div
                animate={{
                  y: isHovered ? -14 : 0,
                  rotate: isHovered ? 0 : 3,
                  scale: isHovered ? 1.15 : 1,
                  zIndex: isHovered ? 35 : 15,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="absolute left-28 sm:left-32 top-3 h-32 w-36 sm:w-40 overflow-hidden rounded-[14px] border border-[#e5e5e5] bg-white p-0.5 shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[11px]">
                  <Image
                    src="/cancer-ai-report.jpg"
                    alt="Clinical AI Report"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2 pb-1.5 pt-3">
                    <span className="block text-center text-[7.5px] font-mono font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      AI REPORT · DIAGNOSTICS
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Tile 2: AI Architecture Pipeline (Right) */}
              <motion.div
                animate={{
                  x: isHovered ? 16 : 0,
                  y: isHovered ? -4 : 0,
                  rotate: isHovered ? 10 : -3,
                  scale: isHovered ? 1.08 : 1,
                  zIndex: isHovered ? 25 : 20,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="absolute right-2 sm:right-4 top-2.5 h-32 w-36 sm:w-40 overflow-hidden rounded-[14px] border border-[#e5e5e5] bg-white p-0.5 shadow-[0_14px_28px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[11px]">
                  <Image
                    src="/cancer-ai-model.jpg"
                    alt="Multimodal AI Architecture"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2 pb-1.5 pt-3">
                    <span className="block text-center text-[7.5px] font-mono font-semibold uppercase tracking-[0.16em] text-indigo-300">
                      AI PIPELINE · ATTENTION
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Live AI HUD badge */}
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.9 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : -8,
                  scale: isHovered ? 1 : 0.9,
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-2.5 right-2.5 z-40 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-black/80 px-2.5 py-1 font-mono text-[9px] text-cyan-300 shadow-lg backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                </span>
                <span>CROSS-ATTENTION FUSION 94.8%</span>
              </motion.div>
            </div>
          ) : null}

          {/* 2. SKILL BINIMOY CUSTOM ANIMATED STAGE */}
          {id === "skill-binimoy" ? (
            <div className="relative h-full w-full">
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  y: isHovered ? -3 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-2 overflow-hidden rounded-[14px] border border-[#e8e8e8] bg-white shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src="/skill-binimoy.png"
                  alt="Skill Binimoy Platform"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 680px"
                />

                {/* Sweeping Light Sheen */}
                <motion.div
                  animate={isHovered ? { x: ["-100%", "240%"] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"
                />
              </motion.div>

              {/* Floating Peer Match Barter HUD (Bottom-left) */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.92 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 12,
                  scale: isHovered ? 1 : 0.92,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="absolute bottom-3 left-3 z-30 flex items-center gap-2.5 rounded-xl border border-white/25 bg-black/85 px-3 py-1.5 text-white shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-indigo-300">
                  <span>React Code</span>
                  <motion.div
                    animate={isHovered ? { rotate: [0, 180, 360] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <RefreshCw size={11} className="text-white" />
                  </motion.div>
                  <span className="text-emerald-300">UI/UX Design</span>
                </div>
                <div className="border-l border-white/20 pl-2 text-[8px] font-mono uppercase tracking-widest text-neutral-300">
                  PEER MATCHED
                </div>
              </motion.div>

              {/* Top-right Live Beacon Badge */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : -8,
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-3 right-3 z-30 flex items-center gap-1.5 rounded-full border border-indigo-200 bg-white/95 px-2.5 py-1 text-[9px] font-semibold text-indigo-700 shadow-md backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600"></span>
                </span>
                <span>FIREBASE REALTIME SYNC</span>
              </motion.div>
            </div>
          ) : null}

          {/* 3. CUBIQ CUSTOM ANIMATED STAGE */}
          {id === "cubiq" ? (
            <div className="relative h-full w-full">
              {/* Platform background preview */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.03 : 1,
                  filter: isHovered ? "brightness(0.92)" : "brightness(1)",
                }}
                transition={{ duration: 0.35 }}
                className="absolute inset-2 overflow-hidden rounded-[14px] border border-[#e8e8e8] bg-white shadow-xs"
              >
                <Image
                  src="/cubiq-platform.png"
                  alt="CUBIQ Web Platform"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 680px"
                />
              </motion.div>

              {/* Physical CUBIQ Hardware Card (Floats up in 3D!) */}
              <motion.div
                animate={{
                  y: isHovered ? -16 : 0,
                  x: isHovered ? -6 : 0,
                  scale: isHovered ? 1.22 : 1,
                  rotate: isHovered ? 0 : -4,
                  zIndex: 35,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="absolute right-3 sm:right-6 bottom-3 h-26 w-34 sm:h-28 sm:w-38 overflow-hidden rounded-[14px] border-2 border-white/80 bg-white p-0.5 shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[11px]">
                  <Image
                    src="/cubiq.jpg"
                    alt="CUBIQ Hardware Prototype"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />

                  {/* Rotating Gyroscopic Calibration Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -inset-3 rounded-full border border-dashed border-amber-400/60"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-1.5 pb-1 pt-2">
                    <span className="block text-center text-[7.5px] font-mono font-semibold uppercase tracking-[0.16em] text-amber-300">
                      CUBIQ HARDWARE
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Top-left Dual-Processor Telemetry HUD */}
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.95 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                  scale: isHovered ? 1 : 0.95,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="absolute top-3 left-3 z-30 flex items-center gap-2 rounded-xl border border-amber-500/40 bg-black/85 px-3 py-1.5 text-white shadow-xl backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                </span>
                <div className="font-mono text-left leading-tight">
                  <div className="text-[9px] font-bold text-amber-400">ESP32 ⇄ RASPBERRY PI 4</div>
                  <div className="text-[7.5px] text-neutral-300">6-AXIS GYRO: PITCH +14° · YAW -8°</div>
                </div>
              </motion.div>
            </div>
          ) : null}

          {/* 4. POCKET PILOT CUSTOM ANIMATED STAGE */}
          {id === "pocket-pilot" ? (
            <div className="relative h-full w-full">
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  y: isHovered ? -3 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-2 overflow-hidden rounded-[14px] border border-[#e8e8e8] bg-white shadow-xs"
              >
                <Image
                  src="/pocket-pilot.png"
                  alt="Pocket Pilot App"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 680px"
                />

                {/* Sweeping Light Sheen */}
                <motion.div
                  animate={isHovered ? { x: ["-100%", "240%"] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"
                />
              </motion.div>

              {/* Top-right Floating Financial Telemetry HUD */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.92 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : -10,
                  scale: isHovered ? 1 : 0.92,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="absolute top-3 right-3 z-30 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-black/85 px-3 py-1.5 text-white shadow-xl backdrop-blur-md"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
                  <TrendingUp size={12} />
                </div>
                <div className="font-mono text-left leading-tight">
                  <div className="text-[10px] font-bold text-emerald-400">+$340.00 SAVED</div>
                  <div className="text-[7.5px] uppercase tracking-wider text-emerald-200/80">
                    PREDICTIVE BUDGET · SYNC
                  </div>
                </div>
              </motion.div>

              {/* Bottom-left Optimistic Entry Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white/95 px-2.5 py-1 text-[9px] font-semibold text-emerald-800 shadow-md backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                </span>
                <span>OPTIMISTIC UI · 2-TAP ENTRY</span>
              </motion.div>
            </div>
          ) : null}

          {/* FALLBACK TILES RENDERER FOR OTHER PROJECTS */}
          {!id && (
            <div className="relative h-full w-full">
              {tiles.map((tile, index) => (
                <div
                  key={tile.label || tile.image || index}
                  className={`absolute ${tile.className} overflow-hidden rounded-[12px] border border-[#ededed] bg-white shadow-md p-0.5`}
                >
                  {tile.image ? (
                    <div className="relative h-full w-full overflow-hidden rounded-[10px]">
                      <Image
                        src={tile.image}
                        alt={tile.label || "Project preview"}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 680px"
                      />
                    </div>
                  ) : (
                    tile.label
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===================== CARD CONTENT & META ===================== */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8d8d8d]">{kicker}</p>
            <h3 className="mt-1.5 text-[18.5px] font-semibold leading-tight text-[#111111] transition-colors group-hover:text-black">
              {title}
            </h3>
          </div>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live website`}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ececec] bg-[#fafafa] text-[#111111] transition-all duration-200 ${projectTheme.btnGlow} hover:text-white cursor-pointer group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shadow-xs`}
            >
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ececec] bg-[#fafafa] text-[#888888] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={14} />
            </span>
          )}
        </div>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#555555]">{description}</p>

        {/* Animated Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ y: -2, scale: 1.04 }}
              transition={{ duration: 0.15 }}
              className="cursor-default rounded-full border border-[#ebebeb] bg-[#fafafa] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#555555] transition-colors group-hover:border-[#dedede] group-hover:bg-white"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.article>
    </div>
  );
}
