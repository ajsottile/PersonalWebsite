"use client";

import { motion } from "framer-motion";
import { ExternalLink, Rocket, TrendingUp, Users } from "lucide-react";
import type { Project } from "@/data/resume";

const ICON_MAP: Record<string, React.ReactNode> = {
  rocket: <Rocket className="h-8 w-8" />,
  "trending-up": <TrendingUp className="h-8 w-8" />,
  users: <Users className="h-8 w-8" />,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      className="group block rounded-2xl border border-light-gray bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
      style={{ perspective: "1000px" }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-coral/10 text-coral transition-colors group-hover:bg-coral group-hover:text-white">
          {ICON_MAP[project.icon]}
        </div>
        <ExternalLink
          size={18}
          className="text-near-black/30 transition-colors group-hover:text-coral"
        />
      </div>

      <h3 className="mb-2 text-lg font-bold text-navy">{project.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-near-black/60">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-light-gray px-3 py-1 text-xs font-medium text-near-black/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
