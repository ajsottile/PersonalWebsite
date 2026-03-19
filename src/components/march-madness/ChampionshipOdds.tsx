"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CHAMP_PROBS_MEN,
  CHAMP_PROBS_WOMEN,
  ADVANCEMENT_MEN,
  ADVANCEMENT_WOMEN,
  MATCHUPS_MEN,
  MATCHUPS_WOMEN,
} from "@/data/marchMadnessData";
import {
  TEAM_METRICS_MEN,
  TEAM_METRICS_WOMEN,
} from "@/data/marchMadnessTeamMetrics";
import { TEAM_LOGO_MAP } from "@/data/teamLogos";
import { cn } from "@/lib/cn";

type Gender = "M" | "W";

interface ChampionshipOddsProps {
  selectedTeam?: string | null;
  onSelectTeam?: (teamName: string) => void;
}

interface MetricHeaderProps {
  label: string;
  description: string;
}

function MetricHeader({ label, description }: MetricHeaderProps) {
  return (
    <div className="group relative flex items-center justify-center gap-1">
      <span>{label}</span>
      <span
        tabIndex={0}
        aria-label={`${label} definition`}
        className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/60 text-[9px] font-bold text-white/80 outline-none transition group-hover:border-coral/70 group-hover:text-coral focus:border-coral/70 focus:text-coral"
      >
        i
      </span>
      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-1 w-52 -translate-x-1/2 rounded-md border border-mauve/20 bg-white p-2 text-left text-[10px] normal-case leading-snug text-near-black opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
        {description}
      </div>
    </div>
  );
}

function probToAmericanOdds(probPct: number) {
  const p = Math.max(0.0001, Math.min(0.9999, probPct / 100));
  if (p >= 0.5) {
    return Math.round((-100 * p) / (1 - p));
  }
  return Math.round((100 * (1 - p)) / p);
}

function fmtOdds(american: number) {
  return american > 0 ? `+${american}` : `${american}`;
}

export default function ChampionshipOdds({
  selectedTeam,
  onSelectTeam,
}: ChampionshipOddsProps) {
  const [gender, setGender] = useState<Gender>("M");

  const data = useMemo(() => {
    const base = gender === "M" ? CHAMP_PROBS_MEN : CHAMP_PROBS_WOMEN;
    const adv = gender === "M" ? ADVANCEMENT_MEN : ADVANCEMENT_WOMEN;
    const matchups = gender === "M" ? MATCHUPS_MEN : MATCHUPS_WOMEN;
    const metrics = gender === "M" ? TEAM_METRICS_MEN : TEAM_METRICS_WOMEN;
    const metricLookup = new Map(metrics.map((m) => [m.TeamID, m]));

    const advLookup = new Map<string, Record<string, number>>();
    for (const row of adv) {
      const current = advLookup.get(row.TeamName) ?? {};
      current[row.Round] = Number(row.AdvProb) * 100;
      advLookup.set(row.TeamName, current);
    }

    const seedLookup = new Map<string, number>();
    const r1WinLookup = new Map<string, number>();
    for (const row of matchups) {
      if (row.Round !== "R1") continue;
      const sSeed = Number(row.StrongSeed.slice(-2));
      const wSeed = Number(row.WeakSeed.slice(-2));
      seedLookup.set(row.StrongTeam, sSeed);
      seedLookup.set(row.WeakTeam, wSeed);
      r1WinLookup.set(row.StrongTeam, Number(row.StrongWinPct));
      r1WinLookup.set(row.WeakTeam, Number(row.WeakWinPct));
    }

    return [...base]
      .sort((a, b) => b.ChampProb - a.ChampProb)
      .slice(0, 24)
      .map((d, index) => {
        const rounds = advLookup.get(d.TeamName) ?? {};
        const r1Win = r1WinLookup.get(d.TeamName) ?? 50;
        const title = Number(d.ChampProb) * 100;
        const final4 = rounds.R5 ?? 0;
        const elite8 = rounds.R4 ?? 0;
        const sweet16 = rounds.R3 ?? 0;
        const seed = seedLookup.get(d.TeamName) ?? 99;
        const pathRisk = Math.max(0, 100 - r1Win);
        const tm = metricLookup.get(d.TeamID);
        const adjOE = tm?.AdjOE ?? 0;
        const adjDE = tm?.AdjDE ?? 0;
        const adjEM = tm?.AdjEM ?? 0;
        const elo = tm?.Elo ?? 0;
        const tempo = tm?.AdjTempo ?? 0;
        const winPct = (tm?.WinPct ?? 0) * 100;
        const efgEdge = ((tm?.O_eFG ?? 0) - (tm?.D_eFG ?? 0)) * 100;
        const odds = probToAmericanOdds(title);
        const modelSignal = title * 0.5 + final4 * 0.25 + elite8 * 0.15 + sweet16 * 0.1;

        return {
          rank: index + 1,
          team: d.TeamName,
          seed,
          title,
          final4,
          elite8,
          sweet16,
          r1Win,
          pathRisk,
          odds,
          adjOE,
          adjDE,
          adjEM,
          elo,
          tempo,
          winPct,
          efgEdge,
          modelSignal,
        };
      });
  }, [gender]);

  return (
    <section className="bg-light-gray/20 py-16">
      <div className="mx-auto max-w-[1680px] px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative inline-block text-3xl font-bold tracking-tight md:text-4xl"
            >
              <span className="bg-gradient-to-r from-navy via-mauve to-coral bg-[length:180%_180%] bg-clip-text text-transparent transition-all duration-500 group-hover:animate-[gradient-shift_2.2s_ease_infinite]">
                Championship Leaderboard
              </span>
            </motion.h2>
          </div>

          <div className="inline-flex rounded-full border border-light-gray bg-light-gray/40 p-1">
            <button
              onClick={() => setGender("M")}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-semibold transition",
                gender === "M"
                  ? "bg-coral text-white shadow-sm"
                  : "text-near-black/70 hover:text-near-black"
              )}
            >
              Men
            </button>
            <button
              onClick={() => setGender("W")}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-semibold transition",
                gender === "W"
                  ? "bg-coral text-white shadow-sm"
                  : "text-near-black/70 hover:text-near-black"
              )}
            >
              Women
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-2xl border border-mauve/20 bg-white shadow-sm"
        >
          <div className="grid grid-cols-[56px_1.9fr_repeat(10,minmax(0,1fr))] gap-2 border-b border-light-gray bg-gradient-to-r from-navy to-midnight px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-white/90 text-center">
            <MetricHeader
              label="Rank"
              description="Position after sorting teams by Championship Title % (highest to lowest)."
            />
            <MetricHeader
              label="Team"
              description="Program name. Click a row to sync team selection with the drilldown section."
            />
            <MetricHeader
              label="Seed"
              description="Tournament seed number (lower is better). Derived from official 2026 bracket seeding."
            />
            <MetricHeader
              label="Title %"
              description="Probability of winning the championship from the model simulation output: ChampProb x 100."
            />
            <MetricHeader
              label="Odds"
              description="American odds converted from Title % implied probability. Favorite: negative odds; underdog: positive odds."
            />
            <MetricHeader
              label="Final 4"
              description="Probability of reaching the Final Four (Round R5) from advancement probabilities."
            />
            <MetricHeader
              label="AdjO"
              description="Adjusted Offensive Efficiency: estimated points scored per 100 possessions, opponent-adjusted."
            />
            <MetricHeader
              label="AdjD"
              description="Adjusted Defensive Efficiency: estimated points allowed per 100 possessions, opponent-adjusted. Lower is better."
            />
            <MetricHeader
              label="AdjEM"
              description="Adjusted Efficiency Margin = AdjO - AdjD. Positive values indicate stronger two-way profile."
            />
            <MetricHeader
              label="Elo"
              description="Elo team rating from game outcomes and margin context; higher indicates stronger expected win probability."
            />
            <MetricHeader
              label="Tempo"
              description="Adjusted pace estimate (possessions pace context). Higher values indicate faster expected game speed."
            />
            <MetricHeader
              label="R1 Risk"
              description="Round 1 upset risk = 100 - Round 1 win probability from matchup projections."
            />
          </div>

          <div className="max-h-[620px] overflow-y-auto">
            {data.map((row) => {
              const active = selectedTeam === row.team;
              return (
                <button
                  key={row.team}
                  type="button"
                  onClick={() => onSelectTeam?.(row.team)}
                  className={cn(
                    "grid w-full grid-cols-[56px_1.9fr_repeat(10,minmax(0,1fr))] items-center gap-2 border-b border-light-gray px-3 py-2 text-center transition",
                    active
                      ? "bg-coral/10 ring-1 ring-inset ring-coral/30"
                      : "bg-white hover:bg-light-gray/40"
                  )}
                >
                  <div className="text-sm font-bold text-navy">#{row.rank}</div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-near-black">
                      {TEAM_LOGO_MAP[row.team] ? (
                        <img
                          src={TEAM_LOGO_MAP[row.team]}
                          alt=""
                          className="h-4 w-4 rounded-full object-contain"
                        />
                      ) : (
                        <span className="h-4 w-4 rounded-full border border-[#d7deea] bg-white" />
                      )}
                      <span>{row.team}</span>
                    </div>
                    <div className="mt-0.5 text-[11px] text-near-black/50">
                      Signal {row.modelSignal.toFixed(1)}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-navy">{row.seed}</div>
                  <div className="text-sm font-semibold text-coral">{row.title.toFixed(2)}%</div>
                  <div className="text-sm font-semibold text-mauve">{fmtOdds(row.odds)}</div>
                  <div className="text-sm text-navy">{row.final4.toFixed(1)}%</div>
                  <div className="text-sm text-navy">{row.adjOE.toFixed(1)}</div>
                  <div className="text-sm text-navy">{row.adjDE.toFixed(1)}</div>
                  <div className={cn("text-sm font-semibold", row.adjEM >= 0 ? "text-coral" : "text-rose")}>
                    {row.adjEM.toFixed(1)}
                  </div>
                  <div className="text-sm text-navy">{row.elo.toFixed(0)}</div>
                  <div className="text-sm text-navy">{row.tempo.toFixed(1)}</div>
                  <div
                    className={cn(
                      "text-sm font-semibold",
                      row.pathRisk >= 30 ? "text-rose" : row.pathRisk >= 18 ? "text-mauve" : "text-coral"
                    )}
                  >
                    {row.pathRisk.toFixed(1)}%
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
