"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  TEAM_METRICS_MEN,
  TEAM_METRICS_WOMEN,
  type TeamMetricRow,
} from "@/data/marchMadnessTeamMetrics";
import { TEAM_LOGO_MAP } from "@/data/teamLogos";
import { cn } from "@/lib/cn";

interface MatchupPreviewProps {
  teamA: string;
  teamB: string;
  probA: number;
  gender: "M" | "W";
  onClose: () => void;
}

const STAT_ROWS: Array<{
  label: string;
  key: keyof TeamMetricRow;
  format: (v: number) => string;
  higherBetter: boolean;
  description: string;
}> = [
  { label: "AdjO", key: "AdjOE", format: (v) => v.toFixed(1), higherBetter: true, description: "Offensive efficiency (pts/100 poss)" },
  { label: "AdjD", key: "AdjDE", format: (v) => v.toFixed(1), higherBetter: false, description: "Defensive efficiency (lower is better)" },
  { label: "AdjEM", key: "AdjEM", format: (v) => v.toFixed(1), higherBetter: true, description: "Net efficiency margin" },
  { label: "Elo", key: "Elo", format: (v) => v.toFixed(0), higherBetter: true, description: "Overall team strength rating" },
  { label: "Win %", key: "WinPct", format: (v) => (v * 100).toFixed(1) + "%", higherBetter: true, description: "Season win percentage" },
  { label: "Tempo", key: "AdjTempo", format: (v) => v.toFixed(1), higherBetter: true, description: "Pace (possessions per game)" },
  { label: "Off eFG%", key: "O_eFG", format: (v) => (v * 100).toFixed(1) + "%", higherBetter: true, description: "Effective field goal % (offense)" },
  { label: "Def eFG%", key: "D_eFG", format: (v) => (v * 100).toFixed(1) + "%", higherBetter: false, description: "Opp effective FG% allowed (lower better)" },
  { label: "Off TO%", key: "O_TORate", format: (v) => (v * 100).toFixed(1) + "%", higherBetter: false, description: "Turnover rate (lower is better)" },
  { label: "Def TO%", key: "D_TORate", format: (v) => (v * 100).toFixed(1) + "%", higherBetter: true, description: "Forced turnover rate (higher better)" },
  { label: "Momentum", key: "Momentum", format: (v) => v.toFixed(2), higherBetter: true, description: "Late-season win trend (0-1)" },
  { label: "Conf Strength", key: "ConfStrength", format: (v) => v.toFixed(0), higherBetter: true, description: "Conference average Elo" },
];

function getMetrics(name: string, gender: "M" | "W"): TeamMetricRow | null {
  const list = gender === "M" ? TEAM_METRICS_MEN : TEAM_METRICS_WOMEN;
  return list.find((m) => m.TeamName === name) ?? null;
}

export default function MatchupPreview({
  teamA,
  teamB,
  probA,
  gender,
  onClose,
}: MatchupPreviewProps) {
  const mA = getMetrics(teamA, gender);
  const mB = getMetrics(teamB, gender);
  const probB = 100 - probA;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-[min(96vw,560px)] max-h-[85vh] overflow-y-auto rounded-2xl border border-mauve/20 bg-white p-4 sm:p-5 shadow-2xl"
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 24, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full p-1 text-near-black/50 transition hover:bg-light-gray hover:text-navy"
          >
            <X size={16} />
          </button>

          <div className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-mauve">
            Matchup Preview
          </div>

          {/* Team Headers */}
          <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              {TEAM_LOGO_MAP[teamA] ? (
                <img src={TEAM_LOGO_MAP[teamA]} alt="" className="h-10 w-10 rounded-full object-contain" />
              ) : (
                <span className="h-10 w-10 rounded-full border border-[#d7deea] bg-white" />
              )}
              <div className="text-sm font-bold text-navy">{teamA}</div>
              <div className="text-[10px] text-near-black/50">
                {mA?.SeedNum ? `#${mA.SeedNum} seed` : ""}
              </div>
            </div>

            <div className="text-center">
              <div className="text-xs font-semibold text-mauve">VS</div>
            </div>

            <div className="flex flex-col items-center gap-1">
              {TEAM_LOGO_MAP[teamB] ? (
                <img src={TEAM_LOGO_MAP[teamB]} alt="" className="h-10 w-10 rounded-full object-contain" />
              ) : (
                <span className="h-10 w-10 rounded-full border border-[#d7deea] bg-white" />
              )}
              <div className="text-sm font-bold text-navy">{teamB}</div>
              <div className="text-[10px] text-near-black/50">
                {mB?.SeedNum ? `#${mB.SeedNum} seed` : ""}
              </div>
            </div>
          </div>

          {/* Win Probability Bar */}
          <div className="mb-5 rounded-lg bg-light-gray/50 p-3">
            <div className="mb-1 flex justify-between text-[11px] font-semibold">
              <span className="text-coral">{probA.toFixed(1)}%</span>
              <span className="text-[10px] font-medium text-mauve">Model Win Probability</span>
              <span className="text-mauve">{probB.toFixed(1)}%</span>
            </div>
            <div className="flex h-2.5 overflow-hidden rounded-full bg-mauve/20">
              <div className="rounded-l-full bg-coral transition-all" style={{ width: `${probA}%` }} />
              <div className="rounded-r-full bg-mauve/50 transition-all" style={{ width: `${probB}%` }} />
            </div>
          </div>

          {/* Stats Comparison Table */}
          <div className="overflow-x-auto rounded-lg border border-light-gray">
            <div className="grid min-w-[430px] grid-cols-[1fr_110px_1fr] gap-1 bg-gradient-to-r from-navy to-midnight px-3 py-1.5 text-[10px] font-semibold text-white/85">
              <div className="text-center">{teamA}</div>
              <div className="text-center">Metric</div>
              <div className="text-center">{teamB}</div>
            </div>

            {STAT_ROWS.map((stat) => {
              const vA = mA ? Number(mA[stat.key]) : 0;
              const vB = mB ? Number(mB[stat.key]) : 0;
              const aWins = stat.higherBetter ? vA > vB : vA < vB;
              const bWins = stat.higherBetter ? vB > vA : vB < vA;

              return (
                <div
                  key={stat.key}
                  className="group grid min-w-[430px] grid-cols-[1fr_110px_1fr] gap-1 border-t border-light-gray/60 px-3 py-1.5"
                >
                  <div className={cn("text-center text-[11px]", aWins ? "font-bold text-coral" : "text-near-black/70")}>
                    {stat.format(vA)}
                  </div>
                  <div className="relative text-center text-[10px] font-medium text-mauve">
                    {stat.label}
                    <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 w-44 -translate-x-1/2 rounded border border-mauve/15 bg-white px-2 py-1 text-[9px] text-near-black opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                      {stat.description}
                    </div>
                  </div>
                  <div className={cn("text-center text-[11px]", bWins ? "font-bold text-coral" : "text-near-black/70")}>
                    {stat.format(vB)}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
