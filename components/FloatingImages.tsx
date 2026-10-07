"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Sparkles, X } from "lucide-react";

type PhotoCard = {
  id: string;
  src: string;
  alt: string;
  collapsedClass: string;
  expandedClass: string;
};

const cards: PhotoCard[] = [
  {
    id: "photo-1",
    src: "/photo-1.jpg",
    alt: "Nahian Rahman Chayon - Photo 1",
    collapsedClass: "left-0 top-1 rotate-[-8deg] z-10 w-16 h-24 sm:w-20 sm:h-28",
    expandedClass: "left-0 top-0 rotate-[-5deg] z-10 w-24 h-36 sm:w-28 sm:h-44",
  },
  {
    id: "photo-vision",
    src: "/photo-vision.jpg",
    alt: "Nahian Rahman Chayon - Vision",
    collapsedClass: "left-7 sm:left-9 top-3 rotate-[4deg] z-20 w-16 h-24 sm:w-20 sm:h-28",
    expandedClass: "left-[76px] sm:left-28 top-2 rotate-[1deg] z-20 w-24 h-36 sm:w-28 sm:h-44",
  },
  {
    id: "photo-3",
    src: "/photo-3.jpg",
    alt: "Nahian Rahman Chayon - Photo 3",
    collapsedClass: "left-14 sm:left-18 top-5 rotate-[-2deg] z-30 w-16 h-24 sm:w-20 sm:h-28",
    expandedClass: "left-[152px] sm:left-56 top-3 rotate-[7deg] z-30 w-24 h-36 sm:w-28 sm:h-44",
  },
];

export default function FloatingImages() {
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <div className="my-6">
      <div
        className={`relative transition-[height] duration-300 ease-out ${
          showPhotos ? "h-44 sm:h-52" : "h-28 sm:h-32"
        }`}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            whileHover={{
              y: -5,
              scale: 1.05,
              zIndex: 40,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowPhotos((prev) => !prev)}
            className={`absolute cursor-pointer select-none overflow-hidden rounded-[14px] border border-[#ececec] bg-white p-1 shadow-[0_14px_28px_rgba(17,17,17,0.06)] transition-shadow hover:shadow-[0_22px_40px_rgba(17,17,17,0.12)] ${
              showPhotos ? card.expandedClass : card.collapsedClass
            }`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[10px]">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 96px, 112px"
                priority
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-2 flex items-center">
        <button
          type="button"
          onClick={() => setShowPhotos((prev) => !prev)}
          className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#8a8a8a] transition-colors hover:text-[#111111]"
        >
          {showPhotos ? (
            <>
              <X size={11} className="text-[#8a8a8a]" />
              <span>Fold photos</span>
            </>
          ) : (
            <>
              <Sparkles size={11} className="text-[#3f7df9]" />
              <span>Click to expand photos</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
