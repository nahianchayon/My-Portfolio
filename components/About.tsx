import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35 }}
      className="scroll-mt-24 pt-12"
    >
      <div className="space-y-4 border-b border-[#ececec] pb-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">About</p>
        <p className="max-w-[42rem] text-[14px] leading-7 text-[#4d4d4d] sm:text-[15px]">
          I&apos;m a Computer Science &amp; Engineering student at United International University, passionate about full-stack development, UI/UX design, embedded systems, and practical AI applications.
        </p>
        <p className="max-w-[42rem] text-[14px] leading-7 text-[#4d4d4d] sm:text-[15px]">
          My work spans multimodal AI research, web platforms, electronics prototypes, and product-minded design — always with a focus on building useful solutions that feel simple to use.
        </p>
        <p className="max-w-[42rem] text-[14px] leading-7 text-[#4d4d4d] sm:text-[15px]">
          Education: B.Sc. in Computer Science & Engineering at United International University, expected graduation mid-2027.
        </p>
      </div>
    </motion.section>
  );
}
