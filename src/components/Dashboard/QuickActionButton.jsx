import React from "react";

/**
 * QuickActionButton
 * Floating pill CTA. `variant="solid"` for the primary action (New Quest),
 * `variant="outline"` for secondary actions — keeps one clear visual
 * hierarchy among the three quick actions instead of three equal buttons.
 */
function QuickActionButton({ icon: Icon, label, variant = "outline", onClick }) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70 active:scale-95";

  const variants = {
    solid:
      "bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] text-white shadow-[0_4px_20px_-2px_rgba(79,70,229,0.5)] hover:shadow-[0_6px_28px_-2px_rgba(147,51,234,0.65)] hover:-translate-y-0.5",
    outline:
      "bg-white/[0.06] border border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5",
  };

  return (
    <button type="button" onClick={onClick} className={`${base} ${variants[variant]}`}>
      <Icon size={16} />
      {label}
    </button>
  );
}

export default QuickActionButton;
