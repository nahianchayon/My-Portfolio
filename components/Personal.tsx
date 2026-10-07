"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bike } from "lucide-react";

const photos = [
  {
    label: "COX'S BAZAR",
    image: "/coxs-bazar.jpg",
    className: "rotate-[-5deg]",
  },
  {
    label: "SAJEK",
    image: "/sajek.jpg",
    className: "rotate-[5deg]",
  },
  {
    label: "BIKE RIDES",
    image: "/bike-riding.jpg",
    className: "rotate-[-2deg] z-10 sm:scale-105",
    isHighlight: true,
  },
  {
    label: "PHOTOGRAPHY",
    image: "/photography.jpg",
    className: "rotate-[4deg]",
  },
  {
    label: "WORKSTATION",
    image: "/workstation.jpg",
    className: "rotate-[-4deg]",
  },
  {
    label: "LAB & IOT",
    image: "/lab-iot.jpg",
    className: "rotate-[5deg]",
  },
];

export default function Personal() {
  return (
    <section className="pt-12">
      <div className="space-y-5 border-b border-[#ececec] pb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">Personal</p>
        <p className="max-w-[42rem] text-[14px] leading-7 text-[#515151] sm:text-[15px]">
          When I&apos;m not building software, I enjoy exploring technology, experimenting with hardware,
          riding my bike on open roads, shooting photos and videos, travelling, and staying curious about how
          systems work in the real world.
        </p>

        {/* Polaroid strip: cleanly fitted in one row so Workstation & Lab & IoT stay beside each other */}
        <div className="flex items-end gap-2.5 sm:gap-3 pt-3 overflow-x-auto pb-3 sm:overflow-visible sm:flex-nowrap">
          {photos.map((photo) => (
            <motion.div
              key={photo.label}
              whileHover={{ y: -8, rotate: 0, scale: 1.08, zIndex: 40 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={`group shrink-0 flex flex-col rounded-[14px] border border-[#e8e8e8] bg-white p-1.5 pb-2.5 shadow-[0_14px_28px_rgba(17,17,17,0.06)] transition-all hover:border-[#dedede] hover:shadow-[0_22px_45px_rgba(0,0,0,0.12)] cursor-pointer ${photo.className}`}
            >
              <div className="relative h-28 w-[86px] sm:h-32 sm:w-[94px] overflow-hidden rounded-[10px] bg-[#f0f0f0]">
                <Image
                  src={photo.image}
                  alt={photo.label}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="100px"
                />
                {photo.isHighlight ? (
                  <div className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/75 text-emerald-300 backdrop-blur-xs shadow-xs">
                    <Bike size={11} />
                  </div>
                ) : null}
              </div>

              <div className="mt-2 text-center">
                <span className="block text-[8px] font-semibold uppercase tracking-[0.14em] text-[#333333] whitespace-nowrap">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
