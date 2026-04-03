"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PHOTOS = [
  "/Image1.jpg",
  "/Image3.jpg",
  "/Image5.jpg",
  "/Image6.jpg",
  "/Image7.jpg",
  "/Image8.jpg",
];

const doubled = [...PHOTOS, ...PHOTOS];

export default function PhotoStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative my-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-light-gray/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-light-gray/50 to-transparent" />

      <div className="flex w-max animate-[scroll_35s_linear_infinite] gap-3">
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-52 w-auto flex-shrink-0 overflow-hidden rounded-xl shadow-md md:h-64"
          >
            <Image
              src={src}
              alt=""
              width={400}
              height={400}
              className="h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
