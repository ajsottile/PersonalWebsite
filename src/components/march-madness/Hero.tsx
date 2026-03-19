"use client";

import { motion } from "framer-motion";
import { Brain, Trophy, Target, BarChart3 } from "lucide-react";

const STATS = [
  { label: "Validation Accuracy", value: "82.4%", icon: Target },
  { label: "Brier Score", value: "0.127", icon: BarChart3 },
  { label: "Simulations", value: "100,000", icon: Trophy },
  { label: "Model Features", value: "19", icon: Brain },
] as const;

export default function MarchMadnessHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-midnight to-navy py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,119,91,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(199,91,122,0.14),transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-coral">
            CloudHack Model Intelligence
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            March Madness Prediction Engine
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            Explore calibrated matchup probabilities, championship odds, upset alerts,
            and interactive bracket simulations generated from our stacked ensemble model.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="mb-2 flex items-center gap-2 text-coral">
                  <Icon size={16} />
                  <span className="text-xs font-medium uppercase tracking-wide text-white/70">
                    {stat.label}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
