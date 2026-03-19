"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Eye } from "lucide-react";
import MatchupPreview from "./MatchupPreview";
import {
  MATCHUPS_MEN,
  MATCHUPS_WOMEN,
  BRACKET_SLOTS_MEN,
  BRACKET_SLOTS_WOMEN,
  type MatchupRow,
} from "@/data/marchMadnessData";
import { MEN_SEED_ROUND_SLOTS } from "@/data/marchMadnessSeedRoundSlots";
import {
  PROB_MATRIX_MEN,
  PROB_MATRIX_WOMEN,
} from "@/data/marchMadnessProbMatrix";
import { TEAM_LOGO_MAP } from "@/data/teamLogos";
import { cn } from "@/lib/cn";

type Gender = "M" | "W";
type RegionCode = "W" | "X" | "Y" | "Z";

interface SlotRow {
  Slot: string;
  StrongSeed: string;
  WeakSeed: string;
}

const REGIONS: RegionCode[] = ["W", "X", "Y", "Z"];
const REGION_LABELS: Record<RegionCode, string> = {
  W: "East",
  X: "West",
  Y: "South",
  Z: "Midwest",
};

const CARD_W = 146;
const CARD_H = 72;
const COL_GAP = 20;
const ROW_STEP = 78;
const REGION_W = CARD_W * 4 + COL_GAP * 3;
const REGION_H = ROW_STEP * 8 - 8;

type ResolvedRow = {
  slot: string;
  top: { team: string; seed: string; prob: number } | null;
  bottom: { team: string; seed: string; prob: number } | null;
  rating: string;
};

function getSeedMap(matchups: MatchupRow[]) {
  const map: Record<string, string> = {};
  for (const row of matchups) {
    if (row.Round === "PlayIn") {
      const winner = row.StrongWinPct >= row.WeakWinPct ? row.StrongTeam : row.WeakTeam;
      map[row.StrongSeed.slice(0, 3)] = winner;
      continue;
    }
    if (row.Round === "R1") {
      map[row.StrongSeed] = row.StrongTeam;
      map[row.WeakSeed] = row.WeakTeam;
    }
  }
  return map;
}

function bySlotOrder(a: SlotRow, b: SlotRow) {
  return a.Slot.localeCompare(b.Slot, undefined, { numeric: true });
}

function roundX(roundIndex: number, direction: "left" | "right") {
  const stepX = CARD_W + COL_GAP;
  return direction === "left" ? roundIndex * stepX : (3 - roundIndex) * stepX;
}

function roundIndexFromSlot(slotName: string): number {
  const m = slotName.match(/^R([1-6])/);
  if (!m) return 0;
  return Number(m[1]) - 1;
}

function isSlotRef(ref: string) {
  return /^R\d/.test(ref);
}

function buildRegionLayout(
  region: RegionCode,
  regionSlots: Record<"R1" | "R2" | "R3" | "R4", SlotRow[]>,
  direction: "left" | "right"
) {
  const all = [...regionSlots.R1, ...regionSlots.R2, ...regionSlots.R3, ...regionSlots.R4];
  const slotByName = new Map(all.map((s) => [s.Slot, s]));
  const preferredSeedOrder = [1, 8, 5, 4, 6, 3, 7, 2];

  // Use MNCAATourneySeedRoundSlots to build the exact R1 visual order by seed line.
  const seedToSlot = new Map(
    MEN_SEED_ROUND_SLOTS
      .filter((r) => r.GameRound === 1 && r.Seed.startsWith(region))
      .map((r) => [r.Seed, r.GameSlot])
  );

  const leafOrder: string[] = preferredSeedOrder
    .map((seedNum) => seedToSlot.get(`${region}${String(seedNum).padStart(2, "0")}`) ?? null)
    .filter((v): v is string => Boolean(v));

  const yBySlot = new Map<string, number>();
  leafOrder.forEach((slotName, index) => {
    yBySlot.set(slotName, index * ROW_STEP);
  });

  const resolveY = (slotName: string): number => {
    const existing = yBySlot.get(slotName);
    if (existing !== undefined) return existing;
    const slot = slotByName.get(slotName);
    if (!slot) return 0;
    const children = [slot.StrongSeed, slot.WeakSeed].filter(isSlotRef);
    if (children.length !== 2) {
      // Fallback: if leaf wasn't in seed-round mapping, place by slot number.
      const r1Index = Number(slotName.match(/R1[A-Z](\d+)/)?.[1] ?? "1") - 1;
      const y = r1Index * ROW_STEP;
      yBySlot.set(slotName, y);
      return y;
    }
    const y = (resolveY(children[0]) + resolveY(children[1])) / 2;
    yBySlot.set(slotName, y);
    return y;
  };

  all.forEach((s) => resolveY(s.Slot));

  const cards = all.map((slot) => {
    const roundIdx = roundIndexFromSlot(slot.Slot);
    return {
      slot: slot.Slot,
      x: roundX(roundIdx, direction),
      y: yBySlot.get(slot.Slot) ?? 0,
    };
  });

  const cardBySlot = new Map(cards.map((c) => [c.slot, c]));
  const connectors: string[] = [];
  all.forEach((slot) => {
    const parent = cardBySlot.get(slot.Slot);
    if (!parent) return;
    [slot.StrongSeed, slot.WeakSeed].forEach((childRef) => {
      if (!isSlotRef(childRef)) return;
      const child = cardBySlot.get(childRef);
      if (!child) return;
      const childX = direction === "left" ? child.x + CARD_W : child.x;
      const parentX = direction === "left" ? parent.x : parent.x + CARD_W;
      const elbowX = (childX + parentX) / 2;
      const childY = child.y + CARD_H / 2;
      const parentY = parent.y + CARD_H / 2;
      connectors.push(`M ${childX} ${childY} H ${elbowX} V ${parentY} H ${parentX}`);
    });
  });

  return { cards, connectors };
}

function BracketGameCard({
  row,
  selectedTeam,
  onPick,
  onPreview,
  x,
  y,
}: {
  row: ResolvedRow;
  selectedTeam?: string | null;
  onPick: (teamName: string) => void;
  onPreview?: () => void;
  x: number;
  y: number;
}) {
  if (!row.top || !row.bottom) {
    return (
      <div
        className="absolute rounded-md border border-[#d5dbe7] bg-white p-1"
        style={{ left: x, top: y, width: CARD_W, height: CARD_H }}
      >
        <div className="mb-1 h-1.5 w-full rounded bg-[#e6ebf5]" />
        <div className="h-1.5 w-5/6 rounded bg-[#e6ebf5]" />
        <div className="mt-1 text-right text-[8px] font-semibold text-[#9da7bb]">TBD</div>
      </div>
    );
  }

  const topProb = row.top.prob;
  const botProb = row.bottom.prob;

  const teamRowCls = (active: boolean) =>
    cn(
      "flex h-[22px] items-center gap-1.5 rounded-sm px-1.5 text-[10px] transition",
      active
        ? "bg-coral/16 text-navy"
        : "bg-transparent text-[#3f4b63] hover:bg-[#f4f6fb]"
    );

  return (
    <div
      className="absolute rounded-lg border border-[#ccd4e2] bg-white p-1.5 shadow-[0_6px_18px_rgba(26,26,46,0.06)]"
      style={{ left: x, top: y, width: CARD_W, height: CARD_H }}
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="truncate text-[8px] font-semibold uppercase tracking-[0.08em] text-[#7c879f]">
          {row.slot}
        </span>
        {onPreview && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPreview(); }}
            className="flex h-4 w-4 items-center justify-center rounded-full text-[#9da7bb] transition hover:bg-coral/10 hover:text-coral"
            title="Preview matchup"
          >
            <Eye size={10} />
          </button>
        )}
      </div>
      <button type="button" className={teamRowCls(selectedTeam === row.top.team)} onClick={() => onPick(row.top!.team)}>
        <span className="w-[16px] text-[9px] font-bold text-[#64708b]">{row.top.seed.replace(/^R\d/, "")}</span>
        <span className="min-w-0 flex-1 truncate text-left font-medium">{row.top.team}</span>
        {TEAM_LOGO_MAP[row.top.team] ? (
          <img src={TEAM_LOGO_MAP[row.top.team]} alt="" className="h-3.5 w-3.5 rounded-full object-contain" />
        ) : (
          <span className="h-3.5 w-3.5 rounded-full border border-[#d7deea] bg-white" />
        )}
        <span className={cn("text-[9px] font-semibold", topProb >= 50 ? "text-coral" : "text-mauve")}>{topProb.toFixed(0)}%</span>
      </button>
      <button type="button" className={teamRowCls(selectedTeam === row.bottom.team)} onClick={() => onPick(row.bottom!.team)}>
        <span className="w-[16px] text-[9px] font-bold text-[#64708b]">{row.bottom.seed.replace(/^R\d/, "")}</span>
        <span className="min-w-0 flex-1 truncate text-left font-medium">{row.bottom.team}</span>
        {TEAM_LOGO_MAP[row.bottom.team] ? (
          <img src={TEAM_LOGO_MAP[row.bottom.team]} alt="" className="h-3.5 w-3.5 rounded-full object-contain" />
        ) : (
          <span className="h-3.5 w-3.5 rounded-full border border-[#d7deea] bg-white" />
        )}
        <span className={cn("text-[9px] font-semibold", botProb >= 50 ? "text-coral" : "text-mauve")}>{botProb.toFixed(0)}%</span>
      </button>
    </div>
  );
}

export default function BracketSimulator() {
  const [gender, setGender] = useState<Gender>("M");
  const [picks, setPicks] = useState<Record<string, string>>({});
  const [previewSlot, setPreviewSlot] = useState<string | null>(null);

  const matchups = gender === "M" ? MATCHUPS_MEN : MATCHUPS_WOMEN;
  const slots = (gender === "M" ? BRACKET_SLOTS_MEN : BRACKET_SLOTS_WOMEN) as SlotRow[];
  const probMatrix = gender === "M" ? PROB_MATRIX_MEN : PROB_MATRIX_WOMEN;

  const seedMap = useMemo(() => getSeedMap(matchups), [matchups]);

  const defaultWinnerMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const row of matchups) {
      if (row.Slot && row.Round !== "PlayIn") {
        map[row.Slot] = row.StrongWinPct >= row.WeakWinPct ? row.StrongTeam : row.WeakTeam;
      }
    }
    return map;
  }, [matchups]);

  const resolveRef = (ref: string): string | null => {
    if (seedMap[ref]) return seedMap[ref];
    if (picks[ref]) return picks[ref];
    if (defaultWinnerMap[ref]) return defaultWinnerMap[ref];
    return null;
  };

  const probabilityOf = (teamA: string, teamB: string) => {
    const [a, b] = [teamA, teamB].sort();
    const key = `${a}::${b}`;
    const p = probMatrix[key];
    if (typeof p === "number") {
      return teamA === a ? p : 100 - p;
    }
    return 50;
  };

  const rowsBySlot = (() => {
    const rows: Record<
      string,
      {
        slot: string;
        top: { team: string; seed: string; prob: number } | null;
        bottom: { team: string; seed: string; prob: number } | null;
        rating: string;
      }
    > = {};
    for (const slot of slots) {
      if (!slot.Slot.startsWith("R")) continue;
      const top = resolveRef(slot.StrongSeed);
      const bottom = resolveRef(slot.WeakSeed);
      if (!top || !bottom) {
        rows[slot.Slot] = { slot: slot.Slot, top: null, bottom: null, rating: "Likely" };
        continue;
      }
      const pTop = probabilityOf(top, bottom);
      const rating =
        pTop > 45 && pTop < 55
          ? "COIN FLIP"
          : Math.min(pTop, 100 - pTop) >= 35
            ? "UPSET ALERT"
            : Math.min(pTop, 100 - pTop) >= 30
              ? "Competitive"
              : "Likely";
      rows[slot.Slot] = {
        slot: slot.Slot,
        top: { team: top, seed: slot.StrongSeed, prob: pTop },
        bottom: { team: bottom, seed: slot.WeakSeed, prob: 100 - pTop },
        rating,
      };
    }
    return rows;
  })();

  const regionRoundSlots = useMemo(() => {
    const out: Record<RegionCode, Record<"R1" | "R2" | "R3" | "R4", SlotRow[]>> = {
      W: { R1: [], R2: [], R3: [], R4: [] },
      X: { R1: [], R2: [], R3: [], R4: [] },
      Y: { R1: [], R2: [], R3: [], R4: [] },
      Z: { R1: [], R2: [], R3: [], R4: [] },
    };
    for (const slot of slots) {
      const m = slot.Slot.match(/^(R[1-4])([WXYZ])/);
      if (!m) continue;
      const round = m[1] as "R1" | "R2" | "R3" | "R4";
      const region = m[2] as RegionCode;
      out[region][round].push(slot);
    }
    for (const region of REGIONS) {
      out[region].R1.sort(bySlotOrder);
      out[region].R2.sort(bySlotOrder);
      out[region].R3.sort(bySlotOrder);
      out[region].R4.sort(bySlotOrder);
    }
    return out;
  }, [slots]);

  const finalSlots = useMemo(() => {
    const r5 = slots.filter((s) => s.Slot.startsWith("R5")).sort(bySlotOrder);
    const r6 = slots.filter((s) => s.Slot.startsWith("R6")).sort(bySlotOrder);
    return { r5, r6 };
  }, [slots]);

  const reset = () => setPicks({});

  const picksCount = Object.keys(picks).length;
  const totalGames = slots.filter((s) => s.Slot.startsWith("R")).length;
  const championTeam = picks["R6CH"] ?? defaultWinnerMap["R6CH"] ?? "TBD";
  const championLogo = TEAM_LOGO_MAP[championTeam];

  const upsetPicks = useMemo(() => {
    let count = 0;
    for (const [slotName, picked] of Object.entries(picks)) {
      const row = rowsBySlot[slotName];
      if (!row?.top || !row?.bottom) continue;
      const favored = row.top.prob >= row.bottom.prob ? row.top.team : row.bottom.team;
      if (picked !== favored) count++;
    }
    return count;
  }, [picks, rowsBySlot]);

  const renderFinalFourCard = (slotName: string | null, label: string) => {
    if (!slotName) {
      return (
        <div className="w-[180px] rounded-lg border border-dashed border-mauve/30 bg-white p-3 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-mauve/60">{label}</div>
          <div className="mt-2 text-xs text-near-black/40">TBD</div>
        </div>
      );
    }
    const row = rowsBySlot[slotName];
    if (!row || !row.top || !row.bottom) {
      return (
        <div className="w-[180px] rounded-lg border border-dashed border-mauve/30 bg-white p-3 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-mauve/60">{label}</div>
          <div className="mt-2 text-xs text-near-black/40">TBD</div>
        </div>
      );
    }
    const selected = picks[slotName] ?? defaultWinnerMap[slotName];
    const teamRow = (team: { team: string; seed: string; prob: number }, isActive: boolean) => (
      <button
        key={team.team}
        type="button"
        onClick={() => setPicks((prev) => ({ ...prev, [slotName]: team.team }))}
        className={cn(
          "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-[11px] transition",
          isActive
            ? "bg-coral/15 text-navy"
            : "bg-transparent text-[#3f4b63] hover:bg-[#f4f6fb]"
        )}
      >
        <span className="w-[18px] text-[10px] font-bold text-[#64708b]">{team.seed.replace(/^R\d/, "")}</span>
        <span className="min-w-0 flex-1 truncate font-medium">{team.team}</span>
        {TEAM_LOGO_MAP[team.team] ? (
          <img src={TEAM_LOGO_MAP[team.team]} alt="" className="h-4 w-4 rounded-full object-contain" />
        ) : (
          <span className="h-4 w-4 rounded-full border border-[#d7deea] bg-white" />
        )}
        <span className="text-[10px] font-semibold text-mauve">{team.prob.toFixed(0)}%</span>
      </button>
    );
    return (
      <div className="w-[180px] rounded-lg border border-[#ccd4e2] bg-white p-2 shadow-sm">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-wide text-mauve/70">{label}</span>
          <button
            type="button"
            onClick={() => setPreviewSlot(slotName)}
            className="flex h-4 w-4 items-center justify-center rounded-full text-[#9da7bb] transition hover:bg-coral/10 hover:text-coral"
            title="Preview matchup"
          >
            <Eye size={10} />
          </button>
        </div>
        <div className="space-y-1.5">
          {teamRow(row.top, selected === row.top.team)}
          {teamRow(row.bottom, selected === row.bottom.team)}
        </div>
      </div>
    );
  };

  const renderSlotCard = (slotName: string, x: number, y: number) => {
    const row = rowsBySlot[slotName];
    const resolved = row ?? { slot: slotName, top: null, bottom: null, rating: "Likely" };
    const canPreview = Boolean(resolved.top && resolved.bottom);
    return (
      <BracketGameCard
        key={slotName}
        row={resolved}
        selectedTeam={picks[slotName] ?? defaultWinnerMap[slotName]}
        onPick={(teamName) => setPicks((prev) => ({ ...prev, [slotName]: teamName }))}
        onPreview={canPreview ? () => setPreviewSlot(slotName) : undefined}
        x={x}
        y={y}
      />
    );
  };

  const renderRegion = (region: RegionCode, direction: "left" | "right") => {
    const rounds = regionRoundSlots[region];
    const layout = buildRegionLayout(region, rounds, direction);

    return (
      <div className="rounded-xl border border-mauve/20 bg-white/30 p-2">
        <div className="mb-1 text-center text-[11px] font-bold uppercase tracking-wide text-navy">
          {REGION_LABELS[region]}
        </div>
        <div className="mb-1 grid grid-cols-4 gap-1 text-[9px] font-semibold uppercase text-mauve/80">
          <div className="text-left">Round 1</div>
          <div className="text-left">Round 2</div>
          <div className="text-left">Sweet 16</div>
          <div className="text-left">Elite 8</div>
        </div>
        <div className="relative" style={{ width: REGION_W, height: REGION_H }}>
          <svg className="absolute inset-0" width={REGION_W} height={REGION_H}>
            {layout.connectors.map((d, i) => (
              <path key={`${region}-path-${i}`} d={d} fill="none" stroke="#7A4B5A" strokeOpacity="0.45" strokeWidth="1.5" />
            ))}
          </svg>
          {layout.cards.map((card) => renderSlotCard(card.slot, card.x, card.y))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-light-gray/60 to-lavender/40 py-10">
      <div className="mx-auto max-w-[1820px] px-3">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy">Bracket Simulator</h2>
            <p className="mt-1 text-sm text-near-black/60">
              Full bracket view (4 regions + Final Four). Click winners to play out your path.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-full border border-[#cbd2dd] bg-white p-1">
              <button
                onClick={() => {
                  setGender("M");
                  setPicks({});
                }}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-semibold",
                  gender === "M" ? "bg-coral text-white" : "text-near-black/70"
                )}
              >
                Men
              </button>
              <button
                onClick={() => {
                  setGender("W");
                  setPicks({});
                }}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-semibold",
                  gender === "W" ? "bg-coral text-white" : "text-near-black/70"
                )}
              >
                Women
              </button>
            </div>

            <button
              onClick={reset}
              className="inline-flex items-center gap-1 rounded-full border border-[#cbd2dd] bg-white px-3 py-1.5 text-sm font-medium text-near-black/70 hover:text-navy"
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-4 rounded-xl border border-mauve/20 bg-white px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-mauve">Picks Made</span>
            <span className="rounded-full bg-coral px-2.5 py-0.5 text-xs font-bold text-white">{picksCount}</span>
            <span className="text-xs text-near-black/50">/ {totalGames}</span>
          </div>
          <div className="h-5 w-px bg-mauve/20" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-mauve">Upsets Picked</span>
            <span className={cn(
              "rounded-full px-2.5 py-0.5 text-xs font-bold",
              upsetPicks > 0 ? "bg-rose/15 text-rose" : "bg-light-gray text-near-black/60"
            )}>{upsetPicks}</span>
          </div>
          <div className="h-5 w-px bg-mauve/20" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-mauve">Champion</span>
            <span className="text-sm font-bold text-navy">{picks["R6CH"] ?? defaultWinnerMap["R6CH"] ?? "TBD"}</span>
          </div>
          <div className="ml-auto text-[11px] text-near-black/50">
            Probabilities update dynamically as you make picks
          </div>
        </div>

        <div className="bg-white/35 p-2 lg:p-3">
          <motion.div
            layout
            className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_560px_1fr] lg:grid-rows-2 lg:gap-3"
          >
            <div className="lg:row-start-1 lg:col-start-1">{renderRegion("W", "left")}</div>
            <div className="lg:row-start-2 lg:col-start-1">{renderRegion("X", "left")}</div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-mauve/20 bg-white/70 p-4 lg:row-span-2 lg:row-start-1 lg:col-start-2">
              <div className="mb-1 text-center text-sm font-bold uppercase tracking-[0.16em] text-navy">
                Final Four
              </div>
              <div className="mb-6 text-center text-[10px] font-semibold uppercase tracking-wide text-mauve">
                National Semifinals / Championship
              </div>

              <div className="flex items-start gap-6">
                {renderFinalFourCard(finalSlots.r5[0]?.Slot ?? null, "Semifinal 1")}
                {renderFinalFourCard(finalSlots.r5[1]?.Slot ?? null, "Semifinal 2")}
              </div>

              <div className="my-1 h-8 w-px bg-mauve/30" />

              <div className="flex justify-center">
                {renderFinalFourCard(finalSlots.r6[0]?.Slot ?? null, "Championship")}
              </div>

              <div className="my-1 h-6 w-px bg-mauve/30" />

              <motion.div
                key={championTeam}
                initial={{ scale: 0.96, opacity: 0.9 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="relative w-[220px] rounded-lg border border-mauve/25 bg-white px-4 py-3 text-center shadow-sm"
              >
                {championTeam !== "TBD" && (
                  <>
                    <motion.div
                      className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 text-coral"
                      initial={{ y: -8, opacity: 0, rotate: -10 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.45 }}
                    >
                      <Trophy size={26} />
                    </motion.div>
                    <motion.div
                      className="pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {[...Array(14)].map((_, i) => (
                        <motion.span
                          key={`confetti-${i}`}
                          className="absolute block h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor: i % 3 === 0 ? "#D4775B" : i % 3 === 1 ? "#C75B7A" : "#7A4B5A",
                          }}
                          animate={{
                            x: [0, Math.cos((i / 14) * Math.PI * 2) * 34],
                            y: [0, Math.sin((i / 14) * Math.PI * 2) * 22 + 12],
                            opacity: [1, 0],
                            scale: [1, 0.6],
                          }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.06 }}
                        />
                      ))}
                    </motion.div>
                  </>
                )}

                <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-mauve">Champion</div>
                <div className="mt-1 flex items-center justify-center gap-2 text-lg font-bold text-navy">
                  {championLogo ? (
                    <img src={championLogo} alt="" className="h-5 w-5 rounded-full object-contain" />
                  ) : (
                    <span className="h-5 w-5 rounded-full border border-[#d7deea] bg-white" />
                  )}
                  <span>{championTeam}</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:row-start-1 lg:col-start-3">{renderRegion("Y", "right")}</div>
            <div className="lg:row-start-2 lg:col-start-3">{renderRegion("Z", "right")}</div>
          </motion.div>
        </div>
      </div>

      {previewSlot && rowsBySlot[previewSlot]?.top && rowsBySlot[previewSlot]?.bottom && (
        <MatchupPreview
          teamA={rowsBySlot[previewSlot].top!.team}
          teamB={rowsBySlot[previewSlot].bottom!.team}
          probA={rowsBySlot[previewSlot].top!.prob}
          gender={gender}
          onClose={() => setPreviewSlot(null)}
        />
      )}
    </section>
  );
}
