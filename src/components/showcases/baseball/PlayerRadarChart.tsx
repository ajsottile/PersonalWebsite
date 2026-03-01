"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { PLAYER_RADAR_DATA } from "@/data/baseballData";

interface PlayerRadarChartProps {
  playerId: string;
}

export default function PlayerRadarChart({ playerId }: PlayerRadarChartProps) {
  const data = PLAYER_RADAR_DATA[playerId] ?? [];

  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart cx="50%" cy="50%" outerRadius="72%" data={data}>
        <PolarGrid stroke="#D1D5DB" />
        <PolarAngleAxis
          dataKey="metric"
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fontSize: 10, fill: "#9CA3AF" }}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #E5E5E5",
            boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            fontSize: 13,
          }}
        />
        <Radar
          name="Rating"
          dataKey="value"
          stroke="#D4775B"
          fill="#D4775B"
          fillOpacity={0.25}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
