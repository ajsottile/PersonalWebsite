"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Headshot from "./Headshot";
import StatCard from "./StatCard";
import { STATS, EDUCATION } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="bg-light-gray/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-bold text-navy md:text-4xl"
        >
          About Me
        </motion.h2>

        {/* Headshot + Intro */}
        <div className="mb-16 flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <Headshot />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="mb-4 text-lg leading-relaxed text-near-black/80">
              I&apos;m a data engineer who loves building things end-to-end — from designing
              lakehouse architectures that wrangle millions of rows, to crafting the React
              dashboards executives actually enjoy using. My sweet spot is turning messy,
              siloed data into governed platforms that drive real business decisions.
            </p>
            <p className="text-lg leading-relaxed text-near-black/80">
              Before enterprise data, I built a baseball analytics SaaS and led analytics
              for USC Baseball. I still bring that same competitive, scrappy energy to every
              pipeline and dashboard I ship.
            </p>
          </motion.div>
        </div>

        {/* Stat Cards */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              prefix={stat.label.includes("Opportunities") ? "$" : ""}
              label={stat.label}
              index={i}
            />
          ))}
        </div>

        {/* Education Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-light-gray bg-white p-6 shadow-sm sm:flex-row sm:gap-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral/10">
            <GraduationCap className="h-6 w-6 text-coral" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-navy">{EDUCATION.school}</p>
            <p className="text-sm text-near-black/60">
              {EDUCATION.degree} &middot; {EDUCATION.minor} &middot; GPA: {EDUCATION.gpa}
            </p>
            <p className="text-sm text-coral">
              {EDUCATION.honors.join(" · ")} &middot; {EDUCATION.activities.join(" · ")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
