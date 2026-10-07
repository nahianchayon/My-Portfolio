"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const [replayKey, setReplayKey] = useState(0);

  const triggerReplay = () => {
    setReplayKey((prev) => prev + 1);
  };

  // Exact coordinates traced from the user's handwriting in signature-v2.png (626 x 282)
  const pathX = [0, 31, 62, 94, 125, 156, 188, 219, 250, 282, 313, 344, 375, 407, 438, 469, 501, 532, 563, 595, 626];
  const pathY = [206, 240, 197, 172, 149, 127, 147, 101, 118, 115, 107, 90, 76, 99, 82, 62, 70, 113, 113, 99, 99];

  return (
    <footer className="mx-auto w-[92%] max-w-[700px] pb-10 pt-12 text-center">
      {/* Interactive Handwriting Animated Signature */}
      <div ref={containerRef} className="flex flex-col items-center justify-center">
        <div
          onClick={triggerReplay}
          title="Click to replay signature"
          className="group relative cursor-pointer py-1"
        >
          <svg
            key={replayKey}
            viewBox="0 0 626 282"
            className="h-14 w-auto sm:h-16 max-w-[220px] overflow-visible select-none drop-shadow-xs"
          >
            <defs>
              {/* Linear gradient mask to create a soft, authentic ink-reveal edge */}
              <linearGradient id="signature-reveal-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" />
                <stop offset="92%" stopColor="white" />
                <stop offset="100%" stopColor="white" stopOpacity="0.4" />
              </linearGradient>

              <mask id={`write-mask-${replayKey}`}>
                <motion.rect
                  x="0"
                  y="0"
                  height="282"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 636 } : { width: 0 }}
                  transition={{
                    duration: 2.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  fill="url(#signature-reveal-grad)"
                />
              </mask>
            </defs>

            {/* The digitized handwritten signature masked by progressive stroke */}
            <image
              href="/signature-v2.png"
              width="626"
              height="282"
              mask={`url(#write-mask-${replayKey})`}
              className="select-none"
            />

            {/* Animated Pen Nib / Fountain Pen Ink Tip */}
            {isInView && (
              <motion.g
                initial={{
                  x: pathX[0],
                  y: pathY[0],
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  x: pathX,
                  y: pathY,
                  opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.8, 0],
                  scale: [0.6, 1.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.7, 0],
                }}
                transition={{
                  duration: 2.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Glowing ink tip */}
                <circle r="4" fill="#111111" />
                <circle r="7.5" fill="#0a84ff" opacity="0.3" />
                <circle r="11" fill="#0a84ff" opacity="0.12" />
              </motion.g>
            )}
          </svg>
        </div>
      </div>

      <p className="mt-3 text-[12px] uppercase tracking-[0.14em] text-[#6f6f6f]">
        Building things I find interesting.
      </p>
      <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-[#8c8c8c]">
        © 2026 Nahian Rahman Chayon
      </p>
      <div className="mt-3 flex items-center justify-center gap-5 text-[11px] uppercase tracking-[0.14em] text-[#5d5d5d]">
        <a href="https://github.com/nahianchayon" target="_blank" rel="noreferrer" className="hover:text-[#111111]">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/nahian-rahman-chayon/" target="_blank" rel="noreferrer" className="hover:text-[#111111]">
          LinkedIn
        </a>
        <a href="mailto:nahiansavage9@gmail.com" className="hover:text-[#111111]">
          Email
        </a>
      </div>
    </footer>
  );
}
