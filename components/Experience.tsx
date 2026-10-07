import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026–Now",
    title: "AI / Deep Learning Research",
    org: "FYDP — United International University",
    description:
      "Developing a multimodal AI pipeline for cancer cell detection and automated clinical report analysis using deep learning and large language models.",
  },
  {
    year: "Jul 2026",
    title: "Business Partner",
    org: "Flowmingo AI",
    description:
      "Collaborated as a business partner for 1 month in July 2026 on AI initiatives and workflows before concluding the role to focus on core technical preferences.",
  },
  {
    year: "2026",
    title: "Micro Controller Lab Project",
    org: "CUBIQ",
    description:
      "Built CUBIQ, an AI-powered productivity device powered by Raspberry Pi and ESP32 to simplify focus, meetings, and daily workflows by pairing embedded hardware with intelligent software.",
  },
  {
    year: "2025",
    title: "Creator & Full-Stack Developer",
    org: "Pocket Pilot",
    description:
      "Developed a smart personal expense and savings tracker that analyzes daily spending patterns and delivers automated suggestions to help users save more money.",
  },
  {
    year: "2024",
    title: "Website Designer, Developer & Admin",
    org: "AR Enterprise",
    description:
      "Designed and developed the company website, handled UI/UX, frontend implementation, and routine administration and content updates.",
  },
  {
    year: "2024",
    title: "Full-Stack Web App",
    org: "Skill Binimoy",
    description:
      "Engineered a peer-to-peer skill-sharing platform using React, TypeScript, JSON, and Firebase, deployed on Vercel to connect learners and mentors.",
  },
  {
    year: "2023",
    title: "Electronics Prototype",
    org: "Air Defence System",
    description:
      "Engineered a hardware-based prototype using Arduino Uno and ESP32 with real-time sensor tracking logic.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      className="scroll-mt-24 pt-12"
    >
      <div className="space-y-4 border-b border-[#ececec] pb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">Experience</p>

        {timeline.map((item) => (
          <div
            key={`${item.year}-${item.title}`}
            className="grid gap-3 border-t border-[#f0f0f0] py-4 md:grid-cols-[84px_1fr_1.2fr]"
          >
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#8d8d8d]">{item.year}</div>
            <div>
              <p className="text-[14px] font-medium text-[#111111]">{item.title}</p>
            </div>
            <div className="md:text-right">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#747474]">{item.org}</p>
              <p className="mt-2 text-[13px] leading-6 text-[#5b5b5b]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
