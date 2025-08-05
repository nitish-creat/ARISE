import React from "react";
import { FaRocket, FaBookOpen, FaEnvelope } from "react-icons/fa";

function ResMenu({ showmenu, setShowmenu }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
        showmenu ? "top-20 opacity-100" : "-top-full opacity-0"
      } bg-white/10 backdrop-blur-md shadow-lg border-b border-white/10`}
    >
      <nav className="py-10 px-6 text-white text-center font-semibold text-xl space-y-6">
        <ul className="space-y-6">
          <li>
            <a
              href="#form"
              onClick={() => setShowmenu(false)}
              className="flex items-center justify-center gap-3 px-6 py-2  rounded-full text-white
                drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] 
                hover:scale-105 transition-transform duration-300 
                bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] 
                 active:scale-90 active:bg-blue-400/10"
            >
              <FaRocket className="text-lg" /> Get Started
            </a>
          </li>
          <li>
            <a
              href="#learn"
              onClick={() => setShowmenu(false)}
              className="flex items-center justify-center gap-3 px-6 py-2  rounded-full text-white
                drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] 
                hover:scale-105 transition-transform duration-300 
                bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] 
                 active:scale-90 active:bg-blue-400/10"
            >
              <FaBookOpen className="text-lg"/> Learn More
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setShowmenu(false)}
              className="flex items-center justify-center gap-3 px-6 py-2  rounded-full text-white
                drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] 
                hover:scale-105 transition-transform duration-300 
                bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] 
                 active:scale-90 active:bg-blue-400/10"
            >
              <FaEnvelope className="text-lg"/> Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ResMenu;
