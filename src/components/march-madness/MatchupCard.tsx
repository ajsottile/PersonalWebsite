"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { MatchupRating } from "@/data/marchMadnessData";

export interface MatchupTeam {
  seed: string;
  team: string;
  prob: number;
}

interface MatchupCardProps {
  slot: string;
  rating?: MatchupRating | string;
  top: MatchupTeam;
  bottom: MatchupTeam;
  selectedTeam?: string | null;
  onPick?: (teamName: string) => void;
  compact?: boolean;
  variant?: "default" | "bracket";
}

function ratingClass(rating?: string) {
  if (rating === "COIN FLIP") return "bg-mauve/15 text-mauve border-mauve/30";
  if (rating === "UPSET ALERT") return "bg-rose/15 text-rose border-rose/30";
  if (rating === "Competitive") return "bg-coral/15 text-coral border-coral/30";
  return "bg-light-gray/60 text-near-black/60 border-light-gray";
}

function TeamRow({
  item,
  active,
  onClick,
  compact = false,
  variant = "default",
}: {
  item: MatchupTeam;
  active: boolean;
  onClick?: () => void;
  compact?: boolean;
  variant?: "default" | "bracket";
}) {
  const width = `${Math.max(2, Math.min(98, item.prob))}%`;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("w-full rounded-lg border text-left transition", compact ? "p-1.5" : "p-2", {
        "border-coral bg-coral/10 shadow-sm": active && variant === "default",
        "border-light-gray hover:border-coral/50 hover:bg-light-gray/40":
          !active && variant === "default",
        "border-[#d7dbe2] bg-white hover:border-[#bcc3cf]":
          variant === "bracket" && !active,
        "border-[#7b8fb2] bg-[#eef3ff]": variant === "bracket" && active,
      })}
    >
      <div className={cn("mb-1 flex items-center justify-between gap-1.5", compact && "mb-0.5")}>
        <span
          className={cn(
            "rounded font-semibold",
            variant === "bracket" ? "bg-[#f3f5f9] text-[#5a6270]" : "bg-midnight text-white",
            compact ? "px-1 py-0.5 text-[9px]" : "px-1.5 py-0.5 text-[10px]"
          )}
        >
          {item.seed}
        </span>
        <span className={cn("truncate font-medium text-near-black", compact ? "text-[10px]" : "text-sm")}>
          {item.team}
        </span>
        {variant === "default" ? (
          <span className={cn("font-semibold text-navy", compact ? "text-[10px]" : "text-xs")}>
            {item.prob.toFixed(1)}%
          </span>
        ) : (
          <span
            className={cn(
              "h-3 w-3 rounded-full border",
              active ? "border-[#5f7ec9] bg-[#dbe7ff]" : "border-[#9ca7ba] bg-white"
            )}
          />
        )}
      </div>
      {variant === "default" && (
        <div className={cn("rounded-full bg-light-gray", compact ? "h-1.5" : "h-2")}>
          <div className="h-full rounded-full bg-coral transition-all" style={{ width }} />
        </div>
      )}
      {variant === "bracket" && (
        <div className={cn("rounded-full bg-[#e5e8ef]", compact ? "h-1" : "h-1.5")}>
          <div className="h-full rounded-full bg-[#8fa1c5] transition-all" style={{ width }} />
        </div>
      )}
    </button>
  );
}

export default function MatchupCard({
  slot,
  rating,
  top,
  bottom,
  selectedTeam,
  onPick,
  compact = false,
  variant = "default",
}: MatchupCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-xl border shadow-sm",
        variant === "bracket" ? "border-[#d2d7e1] bg-white" : "border-light-gray bg-white",
        compact ? "p-2" : "p-3"
      )}
    >
      <div className={cn("flex items-center justify-between gap-2", compact ? "mb-1" : "mb-2")}>
        <span
          className={cn(
            "font-semibold uppercase tracking-wide",
            variant === "bracket" ? "text-[#6f7889]" : "text-near-black/60",
            compact ? "text-[10px]" : "text-xs"
          )}
        >
          {slot}
        </span>
        {variant === "default" && (
          <span
            className={cn(
              "rounded-full border font-semibold",
              ratingClass(rating),
              compact ? "px-1.5 py-0.5 text-[9px]" : "px-2 py-0.5 text-[10px]"
            )}
          >
            {rating ?? "Likely"}
          </span>
        )}
      </div>

      <div className={cn(compact ? "space-y-1" : "space-y-2")}>
        <TeamRow
          item={top}
          active={selectedTeam === top.team}
          onClick={onPick ? () => onPick(top.team) : undefined}
          compact={compact}
          variant={variant}
        />
        <TeamRow
          item={bottom}
          active={selectedTeam === bottom.team}
          onClick={onPick ? () => onPick(bottom.team) : undefined}
          compact={compact}
          variant={variant}
        />
      </div>
    </motion.div>
  );
}
