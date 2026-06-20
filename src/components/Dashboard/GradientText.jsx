import React from "react";

/**
 * GradientText
 * Single source of truth for ARISE's signature brand gradient on text.
 * Keeps the exact original palette: #4f46e5 -> #3b82f6 -> #9333ea
 */
function GradientText({ as: Tag = "span", className = "", children }) {
  return (
    <Tag
      className={`text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] ${className}`}
    >
      {children}
    </Tag>
  );
}

export default GradientText;
