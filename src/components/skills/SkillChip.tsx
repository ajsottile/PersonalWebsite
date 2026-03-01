"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { Skill } from "@/data/resume";

interface SkillChipProps {
  skill: Skill;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function SkillChip({ skill, index, isActive, onClick }: SkillChipProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
        isActive
          ? "border-coral bg-coral text-white shadow-md shadow-coral/20"
          : "border-light-gray bg-white text-near-black/70 hover:border-coral/50 hover:text-coral"
      )}
    >
      {skill.name}
    </motion.button>
  );
}
