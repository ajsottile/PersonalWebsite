"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PITCH_VELOCITY_DATA } from "@/data/baseballData";

interface PitchVelocityChartProps {
  playerId: string;
}

export default function PitchVelocityChart({ playerId }: PitchVelocityChartProps) {
  const data = PITCH_VELOCITY_DATA[playerId] ?? [];

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 8, right: 16, left: -4, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" vertical={false} />
        <XAxis
          dataKey="velocity"
          tick={{ fontSize: 12, fill: "#6B7280" }}
          tickLine={false}
          axisLine={{ stroke: "#D1D5DB" }}
          label={{ value: "MPH", position: "insideBottomRight", offset: -4, fontSize: 11, fill: "#9CA3AF" }}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#6B7280" }}
          tickLine={false}
          axisLine={false}
          label={{ value: "Pitches", angle: -90, position: "insideLeft", offset: 12, fontSize: 11, fill: "#9CA3AF" }}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #E5E5E5",
            boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            fontSize: 13,
          }}
          labelFormatter={(v) => `${v} mph`}
        />
        <Bar
          dataKey="count"
          fill="#D4775B"
          radius={[4, 4, 0, 0]}
          maxBarSize={36}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
