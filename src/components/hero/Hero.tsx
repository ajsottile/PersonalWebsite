"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      {/* Full-bleed dashboard background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/dashboard1.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Layered overlays: dark base for contrast + radial spotlight behind text */}
      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,26,46,0.85)_0%,transparent_70%)]" />

      <ParticleField />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-coral"
        >
          Senior Data Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl"
        >
          Anthony Sottile
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Building enterprise data platforms, AI-powered analytics, and
          interactive experiences that turn complex data into decisive action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#showcases"
            className="rounded-full bg-coral px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-light"
          >
            Explore My Work
          </a>
          <a
            href="/resume.pdf"
            download
            title="Download Resume (PDF)"
            className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-coral hover:bg-coral"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-coral/50" size={32} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
