import React from "react";
import GlassCard from "./GlassCard";

/**
 * StreakCard
 * Floating widget showing the user's daily streak. Lives in the
 * "command row" alongside the XP bar and Latest Achievement card.
 */
function StreakCard({ days = 12, delay = 0 }) {
  return (
    <GlassCard
      elevation="secondary"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
      className="group p-5 flex flex-col items-center justify-center text-center h-full hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
    >
      <span
        className="text-3xl mb-1 motion-safe:animate-[flicker_2.6s_ease-in-out_infinite] motion-reduce:animate-none"
        role="img"
        aria-label="Fire"
      >
        🔥
      </span>
      <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
        Daily Streak
      </p>
      <p className="text-2xl font-bold text-white mt-1">{days} Days</p>
      <p className="text-orange-300/80 text-xs font-medium mt-1">Keep going!</p>
    </GlassCard>
  );
}

export default StreakCard;
