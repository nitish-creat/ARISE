import React from "react";
import GlassCard from "./GlassCard";
import GradientText from "./GradientText";

/**
 * AchievementCard
 * Floating widget surfacing the user's most recent achievement —
 * keeps the win visible without requiring a trip to the Achievements tab.
 */
function AchievementCard({
  title = "Discipline Master",
  description = "Completed 30 habits in a row",
  delay = 0,
}) {
  return (
    <GlassCard
      elevation="secondary"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
      className="group p-5 flex flex-col h-full hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl" role="img" aria-label="Trophy">
          🏆
        </span>
        <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
          Latest Achievement
        </p>
      </div>
      <p className="font-bold text-lg leading-snug">
        <GradientText>{title}</GradientText>
      </p>
      <p className="text-white/60 text-sm mt-1 leading-relaxed">{description}</p>
    </GlassCard>
  );
}

export default AchievementCard;
