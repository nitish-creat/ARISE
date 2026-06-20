import React from "react";

/**
 * GlassCard
 * Shared glass-panel primitive with an `elevation` prop so depth in the
 * layout is consistent and intentional rather than every card looking
 * identical (the original "flat depth" issue).
 *
 * elevation="primary"   -> the hero / identity card, sits closest to camera
 * elevation="secondary"  -> feature/content panels, sits one layer back
 */
function GlassCard({
  elevation = "secondary",
  className = "",
  children,
  as: Tag = "div",
  ...props
}) {
  const base =
    "relative rounded-2xl border backdrop-blur-md transition-all duration-300 ease-out";

  const tiers = {
    primary:
      "bg-white/[0.08] border-white/25 shadow-[0_8px_40px_-8px_rgba(79,70,229,0.35)] hover:shadow-[0_8px_50px_-6px_rgba(147,51,234,0.45)]",
    secondary:
      "bg-white/[0.05] border-white/15 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.4)] hover:bg-white/[0.08] hover:border-white/25 hover:shadow-[0_8px_30px_-4px_rgba(79,70,229,0.3)] hover:-translate-y-1",
  };

  return (
    <Tag className={`${base} ${tiers[elevation]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default GlassCard;
