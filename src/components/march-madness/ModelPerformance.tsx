"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { MODEL_COMPARISON, ROUND_BREAKDOWN } from "@/data/marchMadnessData";

export default function ModelPerformance() {
  const comparison = MODEL_COMPARISON.map((m) => ({
    model: m.Model,
    brier: +m.brier.toFixed(3),
    accuracy: +(m.accuracy * 100).toFixed(1),
  }));

  const roundData = ROUND_BREAKDOWN.map((r) => ({
    round: r.Round,
    accuracy: +(r.accuracy * 100).toFixed(1),
    brier: +r.brier.toFixed(3),
  }));

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-navy">Model Performance</h2>
          <p className="mt-1 text-sm text-near-black/60">
            Leave-one-tournament-out cross-validation across historical tournaments
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-light-gray p-4"
          >
            <h3 className="mb-2 text-sm font-semibold text-mauve">Model vs Model</h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparison} margin={{ top: 10, right: 10, left: 0, bottom: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="model" tick={{ fontSize: 11 }} />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="brier" fill="#C75B7A" name="Brier (lower better)" radius={[6, 6, 0, 0]} />
                  <Bar yAxisId="right" dataKey="accuracy" fill="#D4775B" name="Accuracy %" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-light-gray p-4"
          >
            <h3 className="mb-2 text-sm font-semibold text-mauve">Accuracy by Round</h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={roundData} margin={{ top: 10, right: 10, left: 0, bottom: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="round" tick={{ fontSize: 11 }} />
                  <YAxis domain={[70, 90]} />
                  <Tooltip formatter={(v) => [`${Number(v ?? 0).toFixed(1)}%`, "Accuracy"]} />
                  <Line type="monotone" dataKey="accuracy" stroke="#1A1A2E" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
