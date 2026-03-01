"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BATTING_DATA } from "@/data/baseballData";

export default function BattingLineChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={BATTING_DATA} margin={{ top: 8, right: 16, left: -4, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 12, fill: "#6B7280" }}
          tickLine={false}
          axisLine={{ stroke: "#D1D5DB" }}
        />
        <YAxis
          domain={[0.22, 0.32]}
          tickFormatter={(v: number) => v.toFixed(3)}
          tick={{ fontSize: 12, fill: "#6B7280" }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: "1px solid #E5E5E5",
            boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            fontSize: 13,
          }}
          formatter={(value) => typeof value === "number" ? value.toFixed(3) : String(value)}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12, paddingTop: 4 }}
        />
        <Line
          type="monotone"
          dataKey="teamAvg"
          name="Team Avg"
          stroke="#D4775B"
          strokeWidth={2.5}
          dot={{ r: 4, fill: "#D4775B" }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="leagueAvg"
          name="League Avg"
          stroke="#1A1A2E"
          strokeWidth={2.5}
          dot={{ r: 4, fill: "#1A1A2E" }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
