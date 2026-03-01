"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-bold text-navy md:text-4xl"
        >
          Side Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center text-near-black/50"
        >
          Personal projects built on nights and weekends
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
