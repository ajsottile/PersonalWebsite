"use client";

import { STRIKE_ZONE_DATA } from "@/data/baseballData";
import { cn } from "@/lib/cn";

interface StrikeZoneHeatmapProps {
  playerId: string;
}

function cellColor(value: number, max: number): string {
  const ratio = max === 0 ? 0 : value / max;
  if (ratio > 0.75) return "bg-[#D4775B] text-white";
  if (ratio > 0.5) return "bg-[#E0A08D] text-white";
  if (ratio > 0.25) return "bg-[#ECC8BB] text-[#0D0D0D]";
  return "bg-[#F0EDED] text-[#0D0D0D]";
}

export default function StrikeZoneHeatmap({ playerId }: StrikeZoneHeatmapProps) {
  const cells = STRIKE_ZONE_DATA[playerId] ?? [];
  const max = Math.max(...cells.map((c) => c.value), 1);

  const grid: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (const c of cells) {
    grid[c.row][c.col] = c.value;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-gray-400 tracking-wide uppercase">
        Strike Zone
      </span>
      <div className="grid grid-cols-3 gap-1 w-fit">
        {grid.map((row, ri) =>
          row.map((val, ci) => (
            <div
              key={`${ri}-${ci}`}
              className={cn(
                "flex items-center justify-center w-16 h-16 rounded-md text-sm font-semibold transition-colors",
                cellColor(val, max),
              )}
            >
              {val}
            </div>
          )),
        )}
      </div>
      <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-400">
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-sm bg-[#F0EDED]" /> Low
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3 rounded-sm bg-[#D4775B]" /> High
        </span>
      </div>
    </div>
  );
}
