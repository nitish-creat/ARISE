import React from "react";
import GlassCard from "./GlassCard";
import GradientText from "./GradientText";

/**
 * StatCard
 * One cell in the top-level statistics row. Pure presentation —
 * pass an icon component, a label, and a value.
 */
function StatCard({ icon: Icon, label, value, delay = 0 }) {
  return (
    <GlassCard
      elevation="secondary"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
      className="group p-4 md:p-5 flex items-center gap-3 md:gap-4 hover:scale-[1.02] hover:-translate-y-1 cursor-default"
    >
      <span className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/[0.06] border border-white/10 text-white/70 shrink-0 group-hover:text-white group-hover:border-white/25 group-hover:shadow-[0_0_18px_rgba(79,70,229,0.5)] transition-all duration-300">
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-xl md:text-2xl font-bold leading-tight">
          <GradientText>{value}</GradientText>
        </p>
        <p className="text-white/50 text-xs md:text-sm truncate">{label}</p>
      </div>
    </GlassCard>
  );
}

export default StatCard;
