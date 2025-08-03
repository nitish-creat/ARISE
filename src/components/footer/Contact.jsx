import { useState } from "react";
import { FaInstagram, FaPhone, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [activeCard, setActiveCard] = useState("social");

  const cardBase =
    "cursor-pointer transition-all duration-700 ease-in-out rounded-2xl p-6 backdrop-blur-lg bg-gradient-to-br from-[#1a1a2e]/70 to-[#16213e]/70 min-h-[350px] flex flex-col items-center justify-center relative z-10";

  const getCardWidth = (type) => {
    const isActive = activeCard === type;
    return isActive
      ? "w-[70%] md:w-[60%] min-w-[250px]"
      : "w-[15%] md:w-[20%] min-w-[100px] opacity-70";
  };

  const showContent = (type) => activeCard === type;

  return (
    <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='800' className="relative w-full px-4 py-20 bg-[#020521] text-white overflow-hidden mt-5">
      {/* Star BG */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 2 + 1}s infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="flex flex-row gap-4 overflow-x-auto md:overflow-visible px-2 py-10 md:py-16 scroll-smooth snap-x mb-70 md:h-30">
        {/* === Email Card === */}
        <div
          onClick={() => setActiveCard("email")}
          className={`${cardBase} ${getCardWidth("email")} snap-start`}
        >
          {showContent("email") ? (
            <>
              <h2 className="text-xl font-bold text-purple-300 mb-2 text-center md:text-5xl">
                📧 Email the Visionaries
              </h2>
              <p className="text-gray-300 text-center mb-4 text-sm">
                Share ideas or ask questions. We respond with purpose.
              </p>
              <a
                href="mailto:arise@mission.com"
                className="px-6 py-2 text-sm bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold shadow hover:scale-105 transition-transform"
              >
                Contact Crew
              </a>
            </>
          ) : (
            <h2 className="text-xl font-semibold text-purple-400 md:text-8xl">📧</h2>
          )}
        </div>

        {/* === Social Card === */}
        <div
          onClick={() => setActiveCard("social")}
          className={`${cardBase} ${getCardWidth("social")} snap-start`}
        >
          {showContent("social") ? (
            <>
              <h2 className="text-xl font-bold text-purple-300 mb-2 text-center md:text-5xl">
                🌐 Social Universe
              </h2>
              <p className="text-gray-300 text-center mb-4 text-sm">
                Follow the mission. Be part of the orbit.
              </p>
              <div className="flex justify-center gap-4 text-xl">
                <FaInstagram />
                <FaWhatsapp />
                <FaLinkedin />
                <FaPhone />
              </div>
            </>
          ) : (
            <div className="flex gap-2 text-xl md:text-8xl">
              🌐
            </div>
          )}
        </div>

        {/* === Join Card === */}
        <div
          onClick={() => setActiveCard("join")}
          className={`${cardBase} ${getCardWidth("join")} snap-start`}
        >
          {showContent("join") ? (
            <>
              <h2 className="text-xl font-bold text-purple-300 mb-2 text-center md:text-5xl">
                ⚔️ Join the ARISE Mission
              </h2>
              <p className="text-gray-300 text-center mb-4 text-sm">
                Get early access, shape the future, and rise together.
              </p>
              <a
                href="https://community.arise.com"
                className="px-6 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold shadow hover:scale-105 transition-transform"
              >
                Enlist Now
              </a>
            </>
          ) : (
            <h2 className="text-xl font-semibold text-purple-400 md:text-8xl">⚔️</h2>
          )}
        </div>
      </div>
    </div>
  );
}
