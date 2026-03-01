"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SkillChip from "./SkillChip";
import { SKILLS, type SkillCategory } from "@/data/resume";

const CATEGORIES: SkillCategory[] = [
  "Languages",
  "Data Engineering",
  "Cloud & DevOps",
  "AI & ML",
  "Visualization",
];

const MARQUEE_ITEMS = [
  "Python", "SQL", "TypeScript", "PySpark", "Microsoft Fabric", "Databricks",
  "Delta Lake", "React", "Node.js", "Docker", "Kubernetes", "Power BI",
  "OpenAI", "LangChain", "GraphQL", "Azure DevOps", "PostgreSQL", "Kafka",
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const grouped = useMemo(() => {
    const map = new Map<SkillCategory, typeof SKILLS>();
    for (const cat of CATEGORIES) {
      map.set(cat, SKILLS.filter((s) => s.category === cat));
    }
    return map;
  }, []);

  return (
    <section id="skills" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-bold text-navy md:text-4xl"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center text-near-black/50"
        >
          Click a skill to see where it was used
        </motion.p>

        <div className="mb-12 space-y-8">
          {CATEGORIES.map((cat) => (
            <div key={cat}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-mauve">
                {cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(grouped.get(cat) ?? []).map((skill, i) => (
                  <SkillChip
                    key={skill.name}
                    skill={skill}
                    index={i}
                    isActive={activeSkill === skill.name}
                    onClick={() =>
                      setActiveSkill(activeSkill === skill.name ? null : skill.name)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 rounded-xl border border-coral/20 bg-coral/5 p-4 text-center text-sm text-near-black/70"
          >
            <span className="font-semibold text-coral">{activeSkill}</span> was used at:{" "}
            {SKILLS.find((s) => s.name === activeSkill)
              ?.usedAt.map((id) => {
                const names: Record<string, string> = {
                  tidi: "TIDI Products",
                  kpmg: "KPMG",
                  cloudhack: "CloudHack.AI",
                  usc: "USC Baseball",
                };
                return names[id] || id;
              })
              .join(", ")}
          </motion.div>
        )}

        {/* Marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="text-sm font-medium text-near-black/20"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
