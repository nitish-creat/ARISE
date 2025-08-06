import React from "react";
import { Link } from "react-router-dom";

function Learn() {
  return (
    <div className="min-h-screen bg-[#020521] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">


        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse py-2">
          🌐 Learn More About ARISE
        </h1>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link
            to="/"
            className="px-6 py-2 rounded-full text-white scale-105 transition-transform duration-300 
           bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] 
            drop-shadow-sm hover:drop-shadow-[0_0_18px_rgba(147,51,234,0.8)] 
           hover:from-[#6d28d9] hover:via-[#4f46e5] hover:to-[#7c3aed] 
          active:scale-90 active:bg-blue-400/10 hover:scale-110"
          >
            ← Back to Home
          </Link>
          <a
            href="#faq"
            className="px-6 py-2 rounded-full text-white scale-105 transition-transform duration-300 
           bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] 
            drop-shadow-sm hover:drop-shadow-[0_0_18px_rgba(147,51,234,0.8)] 
           hover:from-[#6d28d9] hover:via-[#4f46e5] hover:to-[#7c3aed] 
          active:scale-90 active:bg-blue-400/10 hover:scale-110"
          >
            FAQ ↓
          </a>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          ARISE is not just a platform; it's a revolution in how gamers and learners connect. With AI-powered insights,
          personalized dashboards, and a bold community vision, ARISE empowers users to grow while playing. Whether you're a gamer,
          coach, or creator, this space is built for your evolution.
        </p>
        <p className="text-gray-400 italic">
          Beyond ARISE, the world is evolving—mental health, digital literacy, and sustainable tech are at the core of global transformation.
          Our mission is to give people tools that fuel not just games, but personal growth and community impact.
        </p>


      </div>

      {/* FAQ SECTION */}
      <div id="faq" className="max-w-3xl mx-auto mt-16 space-y-10">
        <h2 className="text-3xl font-bold border-b border-white/20 pb-2">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-purple-300">What is ARISE?</h3>
            <p className="text-gray-400">ARISE is a futuristic platform blending gaming, growth, and AI for a smarter play experience.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-300">How can I join the ARISE community?</h3>
            <p className="text-gray-400">Click on "Get Started" on the homepage or join our Discord for beta access and updates.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-300">Why is ARISE focused on self-growth?</h3>
            <p className="text-gray-400">
              Because every gamer has the potential to grow beyond the game—mentally, socially, and technically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
