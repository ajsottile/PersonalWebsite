"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";
import { cn } from "@/lib/cn";
import BaseballScene from "./BaseballScene";
import { PITCH_SPIN_DATA } from "@/data/spinData";

interface TooltipBadgeProps {
  content: string;
  className?: string;
}

function TooltipBadge({ content, className }: TooltipBadgeProps) {
  return (
    <span className={cn("relative inline-flex items-center group", className)}>
      <button
        type="button"
        aria-label="Visualization details"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 bg-white/90 text-[#7A4B5A] transition-colors hover:bg-white"
      >
        <Info className="h-3.5 w-3.5" />
      </button>
      <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-md border border-[#D9CCE2] bg-white p-2 text-[11px] font-normal leading-relaxed text-[#3A2E42] opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
        {content}
      </span>
    </span>
  );
}

export default function SpinVisualization() {
  const [pitchAId, setPitchAId] = useState("sinker");
  const [pitchBId, setPitchBId] = useState("slider");
  const [viewMode, setViewMode] = useState<"default" | "pitcher" | "hitter">("default");

  const pitchA = useMemo(
    () => PITCH_SPIN_DATA.find((item) => item.id === pitchAId) ?? PITCH_SPIN_DATA[0],
    [pitchAId],
  );
  const pitchB = useMemo(
    () => PITCH_SPIN_DATA.find((item) => item.id === pitchBId) ?? PITCH_SPIN_DATA[1],
    [pitchBId],
  );

  const comparisons = useMemo(
    () => [
      {
        label: "Spin Rate",
        a: `${pitchA.spinRate.toFixed(1)} RPM`,
        b: `${pitchB.spinRate.toFixed(1)} RPM`,
        delta: pitchB.spinRate - pitchA.spinRate,
        suffix: " RPM",
      },
      {
        label: "Velocity",
        a: `${pitchA.velocity.toFixed(1)} mph`,
        b: `${pitchB.velocity.toFixed(1)} mph`,
        delta: pitchB.velocity - pitchA.velocity,
        suffix: " mph",
      },
      {
        label: "IVB",
        a: `${pitchA.ivb.toFixed(1)} in`,
        b: `${pitchB.ivb.toFixed(1)} in`,
        delta: pitchB.ivb - pitchA.ivb,
        suffix: " in",
      },
      {
        label: "HB",
        a: `${pitchA.hb.toFixed(1)} in`,
        b: `${pitchB.hb.toFixed(1)} in`,
        delta: pitchB.hb - pitchA.hb,
        suffix: " in",
      },
    ],
    [pitchA, pitchB],
  );

  return (
    <motion.section
      id="showcase-spin"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-4 py-16"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-[#0D0D0D]">
            3D Pitch Spin Lab
          </h2>
          <TooltipBadge content="Rendered with React Three Fiber + Three.js. The baseball uses a procedural seam texture. Spin axis and gyro values orient the 3D axis/ring, while spin rate drives rotation speed for each pitch." />
        </div>
        <p className="mt-2 text-base text-gray-500 max-w-xl mx-auto">
          CloudHack-style side-by-side spin comparison with interactive 3D movement.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {[
          { id: "default", label: "Default View" },
          { id: "pitcher", label: "Pitcher View" },
          { id: "hitter", label: "Hitter View" },
        ].map((view) => (
          <button
            key={view.id}
            onClick={() => setViewMode(view.id as "default" | "pitcher" | "hitter")}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
              viewMode === view.id
                ? "border-[#1A1A2E] bg-[#1A1A2E] text-white"
                : "border-gray-300 bg-white text-[#1A1A2E] hover:bg-gray-100",
            )}
          >
            {view.label}
          </button>
        ))}
      </div>
      <p className="mb-5 text-center text-xs text-gray-500">
        {viewMode === "pitcher" && "Pitcher View: ball shown from behind, moving away toward the hitter."}
        {viewMode === "hitter" && "Hitter View: ball shown from the plate, coming in from the pitcher."}
        {viewMode === "default" && "Default View: angled perspective for easiest spin inspection."}
      </p>
      <div className="mb-6 flex justify-center">
        <TooltipBadge
          className="max-w-full"
          content="Data source: local dummy dataset in spinData.ts. Each pitch includes spinRate (RPM), velocity (mph), spinEfficiency (%), IVB/HB (inches), spinAxis (degrees), and gyroAngle (degrees). Camera toggles switch to default, pitcher, or hitter perspective."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="rounded-xl border border-[#D4775B]/50 bg-white px-4 py-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: pitchA.color }} />
            <span className="text-sm font-semibold text-[#0D0D0D]">Pitch A</span>
          </div>
          <select
            value={pitchA.id}
            onChange={(event) => setPitchAId(event.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-[#0D0D0D] outline-none focus:ring-2 focus:ring-[#D4775B]/30"
          >
            {PITCH_SPIN_DATA.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="rounded-xl border border-[#C9B600]/50 bg-white px-4 py-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: pitchB.color }} />
            <span className="text-sm font-semibold text-[#0D0D0D]">Pitch B</span>
          </div>
          <select
            value={pitchB.id}
            onChange={(event) => setPitchBId(event.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-[#0D0D0D] outline-none focus:ring-2 focus:ring-[#D4775B]/30"
          >
            {PITCH_SPIN_DATA.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-[#1A1A2E] p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: pitchA.color }} />
              Pitch A | {pitchA.shortName}
            </span>
            <span className="text-xs uppercase tracking-wide text-white/60">
              {pitchA.spinRate} RPM
            </span>
          </div>
          <BaseballScene pitch={pitchA} viewMode={viewMode} />
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-white/80">
            <div className="rounded-md bg-white/10 px-2 py-1.5">
              <p className="uppercase text-white/60">Velocity</p>
              <p className="font-semibold">{pitchA.velocity.toFixed(1)} mph</p>
            </div>
            <div className="rounded-md bg-white/10 px-2 py-1.5">
              <p className="uppercase text-white/60">Spin Eff</p>
              <p className="font-semibold">{pitchA.spinEfficiency}%</p>
            </div>
            <div className="rounded-md bg-white/10 px-2 py-1.5">
              <p className="uppercase text-white/60">IVB</p>
              <p className="font-semibold">{pitchA.ivb.toFixed(1)} in</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-[#1A1A2E] p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: pitchB.color }} />
              Pitch B | {pitchB.shortName}
            </span>
            <span className="text-xs uppercase tracking-wide text-white/60">
              {pitchB.spinRate} RPM
            </span>
          </div>
          <BaseballScene pitch={pitchB} viewMode={viewMode} />
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-white/80">
            <div className="rounded-md bg-white/10 px-2 py-1.5">
              <p className="uppercase text-white/60">Velocity</p>
              <p className="font-semibold">{pitchB.velocity.toFixed(1)} mph</p>
            </div>
            <div className="rounded-md bg-white/10 px-2 py-1.5">
              <p className="uppercase text-white/60">Spin Eff</p>
              <p className="font-semibold">{pitchB.spinEfficiency}%</p>
            </div>
            <div className="rounded-md bg-white/10 px-2 py-1.5">
              <p className="uppercase text-white/60">IVB</p>
              <p className="font-semibold">{pitchB.ivb.toFixed(1)} in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[#D9CCE2] bg-gradient-to-br from-[#FEFDFF] via-[#F9F3FD] to-[#F2FBFF] p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-[#1A1A2E]">
            Quick Comparison
          </h3>
          <TooltipBadge content="Each card compares Pitch A vs Pitch B for one metric. Delta is calculated as B - A. Velocity, IVB, and HB use the selected pitch movement profile; spin rate reflects raw RPM from the same selected pitch records." />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${pitchA.id}-${pitchB.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
          >
            {comparisons.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#E3D4EC] bg-white/90 p-3 shadow-[0_8px_25px_rgba(122,75,90,0.08)]"
              >
                <p className="text-[11px] uppercase tracking-wide text-[#6C5A74]">{item.label}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[#7A4B5A]">
                      <span className="h-2 w-2 rounded-full bg-[#D4775B]" />A
                    </span>
                    <span className="font-semibold text-[#1A1A2E]">{item.a}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[#7A4B5A]">
                      <span className="h-2 w-2 rounded-full bg-[#C9B600]" />B
                    </span>
                    <span className="font-semibold text-[#1A1A2E]">{item.b}</span>
                  </p>
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm font-semibold rounded-md px-2 py-1 w-fit",
                    item.delta >= 0 ? "text-emerald-600" : "text-rose-600",
                  )}
                  style={{
                    backgroundColor:
                      item.delta >= 0 ? "rgba(16, 185, 129, 0.12)" : "rgba(244, 63, 94, 0.12)",
                  }}
                >
                  {item.delta >= 0 ? "+" : ""}
                  {item.delta.toFixed(1)}
                  {item.suffix}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
