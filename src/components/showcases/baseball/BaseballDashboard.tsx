"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PLAYERS } from "@/data/baseballData";
import { cn } from "@/lib/cn";
import PitchVelocityChart from "./PitchVelocityChart";
import BattingLineChart from "./BattingLineChart";
import PlayerRadarChart from "./PlayerRadarChart";
import StrikeZoneHeatmap from "./StrikeZoneHeatmap";

const cards = [
  { title: "Pitch Velocity Distribution", key: "velocity" },
  { title: "Batting Average Trend", key: "batting" },
  { title: "Player Skill Profile", key: "radar" },
  { title: "Strike Zone Heatmap", key: "zone" },
] as const;

export default function BaseballDashboard() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(PLAYERS[0].id);

  return (
    <motion.section
      id="showcase-baseball"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-4 py-16"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#0D0D0D]">
          Baseball Analytics Dashboard
        </h2>
        <p className="mt-2 text-base text-gray-500 max-w-xl mx-auto">
          AI-powered scouting reports built for D1 college teams at CloudHack.AI
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <select
          value={selectedPlayerId}
          onChange={(e) => setSelectedPlayerId(e.target.value)}
          className={cn(
            "rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm",
            "text-[#0D0D0D] outline-none focus:ring-2 focus:ring-[#D4775B]/40 transition",
          )}
        >
          {PLAYERS.map((p) => (
            <option key={p.id} value={p.id}>
              #{p.number} {p.name} — {p.position}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map(({ title, key }) => (
          <div
            key={key}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h3 className="mb-4 text-sm font-semibold text-[#1A1A2E] tracking-wide uppercase">
              {title}
            </h3>
            {key === "velocity" && (
              <PitchVelocityChart playerId={selectedPlayerId} />
            )}
            {key === "batting" && <BattingLineChart />}
            {key === "radar" && (
              <PlayerRadarChart playerId={selectedPlayerId} />
            )}
            {key === "zone" && (
              <StrikeZoneHeatmap playerId={selectedPlayerId} />
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
