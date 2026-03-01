"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Experience } from "@/data/resume";

interface TimelineCardProps {
  experience: Experience;
  index: number;
}

export default function TimelineCard({ experience, index }: TimelineCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      className={cn(
        "relative flex w-full items-start gap-6 md:gap-0",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Timeline dot */}
      <div className="absolute left-[19px] top-2 z-10 h-4 w-4 rounded-full border-4 border-coral bg-white md:left-1/2 md:-translate-x-1/2" />

      {/* Spacer for opposite side on desktop */}
      <div className="hidden w-1/2 md:block" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "group ml-10 w-full rounded-2xl border border-light-gray bg-white p-6 shadow-sm transition-shadow hover:shadow-lg md:ml-0 md:w-[calc(50%-2rem)]",
          isLeft ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
        )}
      >
        {/* Spotlight effect on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(400px_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(212,119,91,0.06),transparent)]" />

        <div className="relative">
          <h3 className="text-lg font-bold text-navy">{experience.company}</h3>
          <div className="mb-4 flex items-center gap-1 text-sm text-near-black/50">
            <MapPin size={14} />
            {experience.location}
          </div>

          {experience.roles.map((role, ri) => (
            <div key={ri} className="mb-4 last:mb-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-near-black">{role.title}</span>
                <span className="rounded-full bg-coral/10 px-2 py-0.5 text-xs font-medium text-coral">
                  {role.dateRange}
                </span>
              </div>

              <ul className="mt-2 space-y-1.5">
                {role.bullets
                  .slice(0, expanded ? undefined : 2)
                  .map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-2 text-sm leading-relaxed text-near-black/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-coral/40" />
                      {bullet}
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          {experience.roles.some((r) => r.bullets.length > 2) && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 flex items-center gap-1 text-sm font-medium text-coral transition-colors hover:text-rose"
            >
              {expanded ? "Show less" : "See more"}
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform",
                  expanded && "rotate-180"
                )}
              />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
