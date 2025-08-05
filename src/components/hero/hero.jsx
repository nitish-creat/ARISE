import React from 'react';
import StarsBackground from '../StarsBackground';
import { motion } from 'framer-motion';
import Entrepreneur from '../../assets/entreprneur.png';
import Sports from '../../assets/sports.png';
import Student from '../../assets/student.png';

const floatVariant = {
  animate: {
    x: [0, 15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};
function Hero() {
  return (
    <>
      
      <div className="bg-[#020521] text-white min-h-screen relative flex items-center justify-center overflow-y-hidden" >
      <StarsBackground />

        <div className="px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 grid md:grid-cols-2 place-items-center w-full pb-20 overflow-hidden">
          {/* Text section */}
          <div
            className="relative z-10 flex flex-col items-center justify-center px-4 py-5 md:py-32 lg:py-40 text-center]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {/* Glowing Background Gradient Glow */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial pointer-events-none overflow-hidden  from-blue-500/10 via-blue-800/20 to-transparent rounded-full blur-[150px] z-0" />

            {/* Actual Text Content */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_25px_rgba(0,123,255,0.6)] z-10">
              Welcome to <span className="bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] bg-clip-text text-transparent animate-pulse lg:text-6xl">
            ARISE
        </span>

            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl z-10">
              <span className="text-blue-400 font-semibold">ARISE</span> isn't just a platform — it's your <span className="text-white font-semibold">arena for transformation</span>.
              <br />
              Push limits. Earn XP. Defeat laziness. <span className="text-blue-300 font-bold">Unleash your best self.</span>
              <br />
              Every challenge is a mission. Every step forward, a level up.
              <br />
              Build discipline like a warrior. Track growth like a strategist.
              <br />
              <span className="text-white font-semibold">You're not just surviving — you're evolving.</span>
              <br />
              The grind is real. But so is your power.
            </p>


            {/* Call-to-action (Optional) */}
            <div className="mt-8 z-10">
             <a href="#form"> <button className="px-6 py-2 border rounded-full text-white 
                                drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] 
                                hover:scale-105 transition-transform duration-300 
                                bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] 
                                border-transparent active:scale-90 active:bg-blue-400/10">
                Start Your Journey
              </button>
              </a>
            </div>
          </div>

          {/* Modern horizontal image layout */}
          <div data-aos='fade' data-aos-delay='400' data-aos-duration='1000'>
            <div className="flex justify-center items-end gap-[-40px] md:gap-[-60px] relative w-full max-w-[380px] md:max-w-[480px] pb-30 pr-10 ">
              {/* Left image */}
              <motion.img
                src={Student}
                alt=""
                animate={{ x: [0, 15, 0], y: [0, 10, 0], z: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="w-34 md:w-60 h-auto rounded-xl mb-8 md:mb-22 rotate-[350deg] z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] ,drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              />

              {/* Center image */}
              <motion.img
                src={Entrepreneur}
                alt=""
                animate={{ x: [0, 15, 0], y: [0, 10, 0], z: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} // Add slight delay
                className="w-38 md:w-70 h-auto rounded-xl mb-4 md:mb-6 -ml-6 -mr-6 md:-ml-10 md:-mr-10 z-20 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.9)], drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              />

              {/* Right image */}
              <motion.img
                src={Sports}
                alt=""
                animate={{ x: [0, 15, 0], y: [0, 10, 0], z: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} // Add more delay
                className="w-34 md:w-60 h-auto rounded-xl mb-8 md:mb-25 z-10  filter drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] ,drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] rotate-[20deg]"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Hero;