"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Headshot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto h-48 w-48 flex-shrink-0 md:mx-0 md:h-56 md:w-56"
    >
      {/* Gradient ring */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-coral via-rose to-mauve opacity-75 blur-sm" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg">
        <Image
          src="/headshot.jpeg"
          alt="Anthony Sottile"
          fill
          className="object-cover object-[center_15%]"
        />
      </div>
    </motion.div>
  );
}
