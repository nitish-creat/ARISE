import React from "react";
import GradientText from "./GradientText";

/**
 * XPBar
 * "XP Command Center" — level, current/next-level XP, percentage, and an
 * animated progress bar. `xp` and `levelCap` keep the original values
 * (1200 XP), just rendered as a full progress system instead of plain text.
 */
function XPBar({ xp = 1200, levelCap = 1500, level = 12 }) {
  const pct = Math.min(100, Math.round((xp / levelCap) * 100));

  return (
    <div className="w-full">
      <div className="flex items-end justify-between mb-2 flex-wrap gap-x-3 gap-y-1">
        <div className="flex items-baseline gap-2">
          <GradientText as="span" className="text-sm font-bold uppercase tracking-wide">
            Level {level}
          </GradientText>
          <span className="text-white/70 text-sm font-medium">
            {xp.toLocaleString()}
            <span className="text-white/40"> / {levelCap.toLocaleString()} XP</span>
          </span>
        </div>
        <span className="text-white/40 text-xs font-semibold">{pct}% Complete</span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={xp}
        aria-valuemin={0}
        aria-valuemax={levelCap}
        aria-label={`Experience progress — level ${level}`}
        className="relative h-3 w-full rounded-full bg-white/10 overflow-hidden border border-white/10"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] relative overflow-hidden transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%` }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2.4s_ease-in-out_infinite] motion-reduce:animate-none" />
        </div>
      </div>

      <p className="text-white/35 text-xs mt-1.5">
        {(levelCap - xp).toLocaleString()} XP to Level {level + 1}
      </p>
    </div>
  );
}

export default XPBar;
