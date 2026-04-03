"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-white/60"
        >
          I&apos;m always open to discussing data engineering, analytics, or new opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="mailto:anthonysottile8@gmail.com"
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-coral hover:bg-coral hover:text-white"
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href="https://github.com/ajsottile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-coral hover:bg-coral hover:text-white"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anthonysottile/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-coral hover:bg-coral hover:text-white"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>

        <motion.a
          href="/AnthonySottile_Resume.pdf"
          download
          title="Download Resume (PDF)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-light"
        >
          <FileDown size={18} />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
