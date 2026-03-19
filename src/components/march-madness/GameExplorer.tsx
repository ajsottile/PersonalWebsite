"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MATCHUPS_MEN,
  MATCHUPS_WOMEN,
  ROUND_LABELS,
  REGION_LABELS,
} from "@/data/marchMadnessData";
import { cn } from "@/lib/cn";

type Gender = "M" | "W";

export default function GameExplorer() {
  const [gender, setGender] = useState<Gender>("M");
  const [round, setRound] = useState<string>("ALL");
  const [region, setRegion] = useState<string>("ALL");
  const [rating, setRating] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"upset" | "round" | "team">("upset");

  const base = gender === "M" ? MATCHUPS_MEN : MATCHUPS_WOMEN;

  const rounds = useMemo(
    () => ["ALL", ...Array.from(new Set(base.map((r) => r.Round)))],
    [base]
  );
  const regions = useMemo(
    () =>
      [
        "ALL",
        ...Array.from(new Set(base.map((r) => r.region).filter((r): r is string => Boolean(r)))),
      ],
    [base]
  );
  const ratings = useMemo(
    () => ["ALL", ...Array.from(new Set(base.map((r) => r.Rating)))],
    [base]
  );

  const filtered = useMemo(() => {
    let rows = base.filter((r) => {
      if (round !== "ALL" && r.Round !== round) return false;
      if (region !== "ALL" && r.region !== region) return false;
      if (rating !== "ALL" && r.Rating !== rating) return false;
      return true;
    });

    rows = [...rows].sort((a, b) => {
      if (sortBy === "upset") return b.UpsetProb - a.UpsetProb;
      if (sortBy === "round") return a.Round.localeCompare(b.Round) || a.Slot.localeCompare(b.Slot);
      return a.StrongTeam.localeCompare(b.StrongTeam);
    });
    return rows;
  }, [base, round, region, rating, sortBy]);

  return (
    <section className="bg-light-gray/20 py-16">
      <div className="mx-auto max-w-[1680px] px-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative inline-block text-3xl font-bold tracking-tight md:text-4xl"
            >
              <span className="bg-gradient-to-r from-navy via-mauve to-coral bg-[length:180%_180%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-[gradient-shift_2.2s_ease_infinite]">
                Game Explorer
              </span>
            </motion.h2>
          </div>
          <div className="inline-flex rounded-full border border-light-gray bg-light-gray/50 p-1">
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

        <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-5">
          <select value={round} onChange={(e) => setRound(e.target.value)} className="rounded-lg border border-mauve/20 bg-white px-3 py-2 text-sm text-center">
            {rounds.map((r) => (
              <option key={r} value={r}>
                {r === "ALL" ? "All Rounds" : ROUND_LABELS[r] ?? r}
              </option>
            ))}
          </select>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="rounded-lg border border-mauve/20 bg-white px-3 py-2 text-sm text-center">
            {regions.map((r) => (
              <option key={r} value={r}>
                {r === "ALL" ? "All Regions" : REGION_LABELS[r] ?? `Region ${r}`}
              </option>
            ))}
          </select>
          <select value={rating} onChange={(e) => setRating(e.target.value)} className="rounded-lg border border-mauve/20 bg-white px-3 py-2 text-sm text-center">
            {ratings.map((r) => (
              <option key={r} value={r}>
                {r === "ALL" ? "All Ratings" : r}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "upset" | "round" | "team")}
            className="rounded-lg border border-mauve/20 bg-white px-3 py-2 text-sm text-center"
          >
            <option value="upset">Sort: Upset %</option>
            <option value="round">Sort: Round</option>
            <option value="team">Sort: Team</option>
          </select>
          <div className="rounded-lg border border-mauve/20 bg-white px-3 py-2 text-center text-sm font-medium text-navy">
            {filtered.length} matchups
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-mauve/20 bg-white shadow-sm"
        >
          <div className="max-h-[560px] overflow-auto">
            <table className="w-full table-fixed border-collapse text-sm">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-navy to-midnight text-white">
                <tr>
                  <th className="px-2 py-2 text-center text-[11px] uppercase tracking-wide">Slot</th>
                  <th className="px-2 py-2 text-center text-[11px] uppercase tracking-wide">Round</th>
                  <th className="px-2 py-2 text-center text-[11px] uppercase tracking-wide">Strong</th>
                  <th className="px-2 py-2 text-center text-[11px] uppercase tracking-wide">Weak</th>
                  <th className="px-2 py-2 text-center text-[11px] uppercase tracking-wide">Split</th>
                  <th className="px-2 py-2 text-center text-[11px] uppercase tracking-wide">Upset %</th>
                  <th className="px-2 py-2 text-center text-[11px] uppercase tracking-wide">Rating</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filtered.map((row) => (
                  <tr key={`${row.Round}-${row.Slot}`} className="border-t border-light-gray/70 text-center transition hover:bg-light-gray/35">
                    <td className="px-2 py-2 font-semibold text-navy">{row.Slot}</td>
                    <td className="px-2 py-2 text-near-black/70">{ROUND_LABELS[row.Round] ?? row.Round}</td>
                    <td className="px-2 py-2">
                      <div className="mx-auto flex max-w-[220px] items-center justify-center gap-1.5">
                        <span className="rounded bg-midnight px-1.5 py-0.5 text-[10px] font-semibold text-white">{row.StrongSeed}</span>
                        <span className="truncate">{row.StrongTeam}</span>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="mx-auto flex max-w-[220px] items-center justify-center gap-1.5">
                        <span className="rounded bg-midnight px-1.5 py-0.5 text-[10px] font-semibold text-white">{row.WeakSeed}</span>
                        <span className="truncate">{row.WeakTeam}</span>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="mx-auto h-2 w-36 rounded-full bg-light-gray">
                        <div className="h-full rounded-full bg-coral" style={{ width: `${row.StrongWinPct}%` }} />
                      </div>
                      <div className="mt-1 text-xs text-near-black/60">{row.StrongWinPct.toFixed(1)} / {row.WeakWinPct.toFixed(1)}</div>
                    </td>
                    <td className="px-2 py-2 font-semibold text-navy">{row.UpsetProb.toFixed(1)}%</td>
                    <td className="px-2 py-2">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-semibold",
                          row.Rating === "COIN FLIP" && "bg-mauve/20 text-mauve",
                          row.Rating === "UPSET ALERT" && "bg-rose/20 text-rose",
                          row.Rating === "Competitive" && "bg-coral/20 text-coral",
                          row.Rating === "Likely" && "bg-light-gray text-near-black/70"
                        )}
                      >
                        {row.Rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
