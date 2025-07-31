// SpaceBackground.jsx
import React from "react";

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Stars */}
      <div className="absolute w-full h-full animate-pulse bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

      {/* Planet 1 */}
      <div className="absolute w-40 h-40 bg-gradient-to-r from-purple-600 to-indigo-900 rounded-full top-20 left-10 shadow-xl shadow-purple-500/30" />

      {/* Planet 2 */}
      <div className="absolute w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full bottom-20 right-10 shadow-xl shadow-yellow-400/40" />

      {/* Planet 3 */}
      <div className="absolute w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-700 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-500/30" />
    </div>
  );
};

export default SpaceBackground;
