"use client";

import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { EXPERIENCES } from "@/data/resume";

export default function Timeline() {
  return (
    <section id="experience" className="bg-light-gray/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-bold text-navy md:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 h-full w-0.5 bg-gradient-to-b from-coral via-rose to-mauve md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <TimelineCard key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
