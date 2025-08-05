import { useState } from "react";
import { FaInstagram, FaPhone, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
export default function Contact() {
  const [activeCard, setActiveCard] = useState("social");

  const cardBase =
    "cursor-pointer transition-all duration-700 ease-in-out rounded-2xl p-6 bg-white/5 border border-white/10 shadow-inner backdrop-blur-lg min-h-[300px] flex flex-col items-center justify-center relative z-10 overflow-hidden";

  const getCardWidth = (type) => {
    const isActive = activeCard === type;
    return isActive
      ? "w-[70%] md:w-[60%] min-w-[250px] shadow-[0_0_30px_#7f5af0] ring-1 ring-blue-400/30"
      : "w-[15%] md:w-[20%] min-w-[100px] opacity-60";
  };

  const showContent = (type) => activeCard === type;

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto  bg-[#020521] text-white overflow-hidden rounded-t-3xl mt-10" id="contact">
        {/* Star Background */}

        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 2 + 1}s infinite`,
              }}
            ></div>
          ))}
        </div>
        <div className="flex flex-row gap-4 overflow-x-auto md:overflow-visible px-2 py-10 scroll-smooth snap-x relative z-10">
          {/* === Email Card === */}

          <div
            onClick={() => setActiveCard("email")}
            className={`${cardBase} ${getCardWidth("email")} snap-start data-aos='fade' data-aos-delay='200' data-aos-duration='1000'`}
          >
            {showContent("email") ? (
              <div className="animate-fade transition-opacity duration-700 text-center">
                <h2 className="text-3xl font-bold text-purple-300 mb-2">📧 Email the Visionaries</h2>
                <p className="text-gray-300 mb-4 text-sm">Got something to share? Let's connect meaningfully.</p>
                <a
                  href="mailto:arise@mission.com"
                  className="px-6 py-2 text-sm bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold shadow hover:scale-105 transition-transform"
                >
                  Contact Crew
                </a>
              </div>
            ) : (
              <h2 className="text-4xl md:text-7xl">📧</h2>
            )}
          </div>

          {/* === Social Card === */}
          <div
            onClick={() => setActiveCard("social")}
            className={`${cardBase} ${getCardWidth("social")} snap-start`}
          >
            <div className="absolute w-[200px] h-[200px] bg-blue-400/10 blur-2xl rounded-full -z-10"></div>
            {showContent("social") ? (
              <div className="animate-fade-in transition-opacity duration-700 text-center">
                <h2 className="text-3xl font-bold text-purple-300 mb-2">🌐 Social Universe</h2>
                <p className="text-gray-300 mb-4 text-sm">Follow the mission. Be part of the orbit.</p>
                <div className="flex justify-center gap-4 text-2xl">
                  <FaInstagram className="hover:text-pink-400 transition" />
                  <FaWhatsapp className="hover:text-green-400 transition" />
                  <FaLinkedin className="hover:text-blue-400 transition" />
                  <FaPhone className="hover:text-yellow-400 transition" />
                </div>
              </div>
            ) : (
              <h2 className="text-4xl md:text-7xl">🌐</h2>
            )}
          </div>

          {/* === Join Card === */}
          <div
            onClick={() => setActiveCard("join")}
            className={`${cardBase} ${getCardWidth("join")} snap-start`}
          >
            <div className="absolute w-[200px] h-[200px] bg-indigo-400/10 blur-2xl rounded-full -z-10"></div>
            {showContent("join") ? (
              <div className="animate-fade-in transition-opacity duration-700 text-center">
                <h2 className="text-3xl font-bold text-purple-300 mb-2">⚔️ Join the ARISE Mission</h2>
                <p className="text-gray-300 mb-4 text-sm">Get early access, shape the future, and rise together.</p>
                <a
                  href="#"
                  className="px-6 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold shadow hover:scale-105 transition-transform"
                >
                  Enlist Now
                </a>
              </div>
            ) : (
              <h2 className="text-4xl md:text-7xl">⚔️</h2>
            )}
          </div>
        </div>

        <div className=" flex justify-center text-center mb-10">
          <a href="#home">
          <button className="flex items-center justify-center gap-3 px-4 py-4  rounded-full text-white
                drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] 
                hover:scale-105 transition-transform duration-300 
                bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] 
                 active:scale-90 active:bg-blue-400/10">
                  <MdArrowUpward />
          </button>
          </a>
        </div>
      </div>
    </>
  );
}
