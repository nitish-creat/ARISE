import SpaceBackground from "./space"
import { FaInstagram, FaPhone, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import StarsBackground from "./StarsBackground";
export default function Contact(){
    return (
           <div className="relative w-full px-6 py-20 bg-[#020521] text-white overflow-hidden mt-32">
  {/* ⭐ Star Background */}
  <div className="absolute inset-0 z-0">
    {Array.from({ length: 100 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-60"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `twinkle ${Math.random() * 2 + 1}s infinite`,
        }}
      ></div>
    ))}
  </div>

  {/* 💡 White Glow */}
  <div className="absolute w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-10 top-[30%] left-[50%] -translate-x-1/2 z-0"></div>

  {/* 🌠 Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-4">
      Ready to Elevate Your Journey?
    </h2>
    <p className="text-lg text-gray-300 mb-8">
      Become part of the ARISE mission — where self-growth meets adventure. Reach out to us today.
    </p>

    <a
      href="mailto:arise@mission.com"
      className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
    >
      🚀 Contact the Crew
    </a>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 mt-10 text-2xl text-white/80">
      <a href="#" className="hover:text-pink-400" title="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="hover:text-green-400" title="WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="#" className="hover:text-blue-400" title="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#" className="hover:text-yellow-400" title="Phone">
        <i className="fas fa-phone"></i>
      </a>
    </div>
  </div>
</div>



    )
}