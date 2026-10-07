import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectCascade from "@/components/ProjectCascade";

const featuredProjects = [
  {
    id: "cancer-ai",
    kicker: "Research · Final Year Project",
    title: "Multimodal Cancer AI Framework",
    description:
      "Developing a deep learning and LLM pipeline for cancer cell detection from pathology slides and automated clinical report analysis, combining Whole-Slide Imaging with cross-attention explainability.",
    tags: ["Python", "Deep Learning", "LLM", "Multimodal AI", "Computer Vision"],
    tiles: [
      {
        label: "H&E SLIDES",
        image: "/cancer-ai-slide.jpg",
        className: "left-2 top-2 h-28 w-32 sm:w-36 rotate-[-5deg]",
      },
      {
        label: "AI REPORT",
        image: "/cancer-ai-report.jpg",
        className: "left-24 sm:left-28 top-5 h-28 w-32 sm:w-36 rotate-[3deg] z-10",
      },
      {
        label: "AI PIPELINE",
        image: "/cancer-ai-model.jpg",
        className: "right-2 sm:right-4 top-2 h-28 w-32 sm:w-36 rotate-[-3deg] z-20",
      },
    ],
  },
  {
    id: "skill-binimoy",
    kicker: "Platform · Peer Exchange",
    title: "Skill Binimoy",
    link: "https://skill-binimoy.vercel.app/",
    description:
      "A full-stack skill exchange platform connecting users with complementary expertise, designed around community learning, peer mentorship, and practical collaboration with real-time Firebase sync.",
    tags: ["React", "TypeScript", "Firebase", "Vercel", "JSON"],
    tiles: [
      {
        label: "SKILL BINIMOY PLATFORM",
        image: "/skill-binimoy.png",
        className: "inset-2 h-[142px] w-[calc(100%-16px)] rounded-[12px]",
      },
    ],
  },
  {
    id: "cubiq",
    kicker: "Hardware & AI · Dual Processor",
    title: "CUBIQ",
    link: "https://cubiq-microprocessor-project.vercel.app/",
    description:
      "An AI-powered productivity device designed to simplify focus, meetings, and daily workflows. Powered by Raspberry Pi and ESP32, it combines voice recording, AI-powered transcription and summarization with gyroscopic interaction for an intuitive physical experience.",
    tags: ["Raspberry Pi", "ESP32", "Embedded AI", "Gyroscopic", "LLM", "Audio"],
    tiles: [
      {
        image: "/cubiq-platform.png",
        className: "inset-2 h-[142px] w-[calc(100%-16px)] rounded-[12px]",
      },
      {
        label: "CUBIQ HARDWARE",
        image: "/cubiq.jpg",
        className: "right-3 sm:right-6 bottom-2.5 h-24 w-32 sm:h-28 sm:w-36 rotate-[-4deg] z-20 shadow-[0_16px_32px_rgba(0,0,0,0.5)] border border-white/30 rounded-[12px]",
      },
    ],
  },
  {
    id: "pocket-pilot",
    kicker: "FinTech & Web App · Personal Finance",
    title: "Pocket Pilot",
    link: "https://pocketpilotexpensetracker.lovable.app/auth",
    description:
      "An intelligent expense tracker built to manage daily spending and savings goals. Features predictive budget suggestions that analyze user spending habits and advise practical ways to save more money.",
    tags: ["React", "Next.js", "Expense Tracking", "Savings AI", "Analytics"],
    tiles: [
      {
        label: "POCKETPILOT · STUDENT FINANCE",
        image: "/pocket-pilot.png",
        className: "inset-2 h-[142px] w-[calc(100%-16px)] rounded-[12px]",
      },
    ],
  },
];

const otherProjects = [
  "Air Defence System (Arduino & ESP32)",
  "Survivor Evolution game",
  "Embedded systems",
  "ESP32 projects",
  "Raspberry Pi experiments",
  "UI/UX prototypes",
  "DSA & OOP projects",
];

export default function Projects() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="scroll-mt-24 pt-12"
    >
      <div className="space-y-6 border-b border-[#ececec] pb-10">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">Work</p>

        {/* 3D Isometric Cascade Showcase */}
        <ProjectCascade />

        <div className="space-y-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="pt-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a8a]">Other engineering projects</p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {otherProjects.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#ececec] bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#4e4e4e]"
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
