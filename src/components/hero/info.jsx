import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import StarsBackground from '../StarsBackground';
import PixelCard from '../PixelCard';
import { motion } from "framer-motion";
import picone from '../../assets/picone.jpg';
import pictwo from '../../assets/pictwo.jpg';
import picthree from '../../assets/picthree.jpg';
function Info() {
    return (
        <>
           <div className="relative bg-[#020521] text-white flex flex-col justify-center items-center min-h-screen w-full overflow-hidden px-4">

                <StarsBackground />
                <div data-aos='fade' data-aos-delay='50' data-aos-duration='500' className='z-10'>
                    <FaAngleDoubleDown className=' text-5xl mb-10'  />
                </div>
                <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000' className='z-10 mb-10 text-center text-4xl md:text-4xl font-extrabold leading-tight text-white drop-shadow-md'>
                    <h1 data-aos='fade-up' data-aos-delay='50' data-aos-duration='1000'>
                        <h2 className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Gamify Your Life <br /> With <br /></h2>
                        <span className="text-blue-400 animate-pulse text-6xl">
                            Arise
                        </span>
                    </h1>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className="z-10 mb-10 text-center text-2xl md:text-3xl leading-tight bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md w-full max-w-4xl px-4"
                >
                    <p className='font-semibold'>
                        ARISE is more than a game—it's your arena for transformation. <br />
                        Powered by AI. Driven by purpose. Built to evolve your mindset, habits, and life.
                    </p>
                </div>

                <div

                    className="z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 mb-20"
                >
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="h-100 w-100 md:w-[200px] lg:w-[450px] rounded-3xl flex flex-col justify-center items-center p-4 text-center"
                    >
                        <img
                            src={picone}
                            alt="Motivation"
                            className="h-4/5 object-contain rounded-xl drop-shadow-[0_0_15px_white] mb-4"
                        />

                        <h2 className="text-sm font-semibold text-white leading-tight mb-1">
                            You weren’t born to be average.
                        </h2>
                        <p className="text-[12px] text-gray-300 leading-snug">
                            <span className="text-blue-400 font-semibold">ARISE</span> isn’t just an app—
                            it’s your battlefield for self-mastery.
                            <br />
                            <span className="font-bold text-white">Win the day. Every day.</span>
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="h-100 w-100 md:w-[200px] lg:w-[450px] rounded-3xl flex flex-col justify-center items-center p-5 text-center"
                    >
                        <img
                            src={pictwo}
                            alt="ARISE Awards"
                            className="h-5/5 object-contain rounded-xl drop-shadow-[0_0_15px_white] mb-4"
                        />

                        <h2 className="text-sm font-semibold text-white leading-tight mb-1">
                            Victory is more than a moment — it’s a mindset.
                        </h2>
                        <p className="text-[12px] text-gray-300 leading-snug">
                            Earn your accolades through discipline, focus, and grit.
                            <br />
                            <span className="text-yellow-400 font-semibold">ARISE</span> celebrates the warrior in you,
                            <br />
                            turning every challenge into a triumph.
                            <br />
                            <span className="font-bold text-white">You don’t just win — you evolve.</span>
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="h-120 w-100 md:w-[200px] lg:w-[450px] rounded-3xl flex flex-col justify-center items-center p-4 mt-5 text-center"
                    >
                        <img
                            src={picthree}
                            alt="ARISE XP Progress"
                            className="h-3/5 object-contain rounded-xl drop-shadow-[0_0_15px_white] mb-4"
                        />

                        <h2 className="text-sm font-semibold text-white leading-tight mb-1">
                            Progress isn’t magic — it’s momentum.
                        </h2>
                        <p className="text-[12px] text-gray-300 leading-snug">
                            Every task you conquer powers your next level.
                            <br />
                            <span className="text-purple-400 font-semibold">ARISE</span> tracks your XP, fuels your grind,
                            <br />
                            and celebrates every step forward.
                            <br />
                            <span className="font-bold text-white">You’re not just growing — you’re leveling up.</span>
                        </p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Info;