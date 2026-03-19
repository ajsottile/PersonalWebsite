"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  ADVANCEMENT_MEN,
  ADVANCEMENT_WOMEN,
  CHAMP_PROBS_MEN,
  CHAMP_PROBS_WOMEN,
  ROUND_LABELS,
} from "@/data/marchMadnessData";
import { cn } from "@/lib/cn";

type Gender = "M" | "W";
const ROUND_ORDER = ["R1", "R2", "R3", "R4", "R5", "R6"];

interface TeamDrillDownProps {
  selectedTeam?: string | null;
}

export default function TeamDrillDown({ selectedTeam }: TeamDrillDownProps) {
  const [gender, setGender] = useState<Gender>("M");
  const [team, setTeam] = useState<string>("");

  const adv = gender === "M" ? ADVANCEMENT_MEN : ADVANCEMENT_WOMEN;
  const champ = gender === "M" ? CHAMP_PROBS_MEN : CHAMP_PROBS_WOMEN;

  const teams = useMemo(
    () => Array.from(new Set(adv.map((r) => r.TeamName))).sort(),
    [adv]
  );

  const activeTeam = team || selectedTeam || teams[0];

  const data = useMemo(() => {
    return adv
      .filter((r) => r.TeamName === activeTeam && ROUND_ORDER.includes(r.Round))
      .sort((a, b) => ROUND_ORDER.indexOf(a.Round) - ROUND_ORDER.indexOf(b.Round))
      .map((r) => ({
        round: ROUND_LABELS[r.Round] ?? r.Round,
        prob: +(r.AdvProb * 100).toFixed(2),
      }));
  }, [adv, activeTeam]);

  const champProb = useMemo(() => {
    const row = champ.find((c) => c.TeamName === activeTeam);
    return row ? row.ChampProb * 100 : 0;
  }, [champ, activeTeam]);

  return (
    <section id="team-drilldown" className="bg-light-gray/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-navy">Team Drilldown</h2>
            <p className="mt-1 text-sm text-near-black/60">
              Explore a team’s round-by-round advancement profile
            </p>
          </div>
          <div className="inline-flex rounded-full border border-light-gray bg-white p-1">
            <button
              onClick={() => setGender("M")}
              className={cn("rounded-full px-4 py-1.5 text-sm font-semibold", gender === "M" ? "bg-coral text-white" : "text-near-black/70")}
            >
              Men
            </button>
            <button
              onClick={() => setGender("W")}
              className={cn("rounded-full px-4 py-1.5 text-sm font-semibold", gender === "W" ? "bg-coral text-white" : "text-near-black/70")}
            >
              Women
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-light-gray bg-white p-4 shadow-sm md:col-span-1">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-near-black/60">
              Select Team
            </label>
            <select
              value={activeTeam}
              onChange={(e) => setTeam(e.target.value)}
              className="w-full rounded-lg border border-light-gray bg-white px-3 py-2 text-sm"
            >
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <div className="mt-6 rounded-xl bg-midnight p-4 text-white">
              <p className="text-xs uppercase tracking-wide text-white/70">Championship Probability</p>
              <p className="mt-1 text-3xl font-bold text-coral">{champProb.toFixed(2)}%</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-light-gray bg-white p-4 shadow-sm md:col-span-2"
          >
            <div className="mb-3 text-sm font-semibold text-navy">{activeTeam} advancement funnel</div>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 12, left: 12, bottom: 16 }}>
                  <XAxis dataKey="round" tick={{ fontSize: 11 }} angle={-10} textAnchor="end" height={55} />
                  <YAxis tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(v) => [`${Number(v ?? 0).toFixed(2)}%`, "Advance probability"]} />
                  <Bar dataKey="prob" fill="#D4775B" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
