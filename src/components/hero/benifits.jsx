import React, { useState } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import StarsBackground from '../StarsBackground';
import brain from '../../assets/brain.jpeg';
import calm from '../../assets/calm.jpeg';
import lasereye from '../../assets/lasereye.jpeg';
import meditation from '../../assets/meditation.jpeg';
import stand from '../../assets/stand.jpeg';
import taskbar from '../../assets/taskbar.jpeg';
import time from '../../assets/time.jpeg';
import energy from '../../assets/energy.jpeg';

const benefitsData = [
    {
        title: 'Mind Boost',
        desc: 'Stimulate your brain with daily focus rituals and clarity enhancers',
        longDesc: 'Unlock your cognitive potential with scientifically-backed focus rituals, mental exercises, and clarity boosters designed to keep your mind sharp and energized throughout the day.',
        image: brain,
    },
    {
        title: 'Discipline Mode',
        desc: 'Build powerful habits with structured routines and no-excuse zones.',
        longDesc: 'Establish unbreakable routines and habit streaks with ARISE’s discipline mode. No-excuse zones and accountability features help you stay on track and crush procrastination.',
        image: meditation,
    },
    {
        title: 'Time Mastery',
        desc: 'Take control of every second using smart tasks and flow hacks.',
        longDesc: 'Master your schedule with intelligent task management, time-blocking, and productivity hacks that help you make the most of every minute.',
        image: time,
    },
    {
        title: 'Laser Focus',
        desc: 'Enter deep work zones with ambient sounds and distraction blockers.',
        longDesc: 'Dive into deep work with customizable ambient soundscapes and distraction-blocking tools that keep you locked in and performing at your best.',
        image: lasereye,
    },
    {
        title: 'Daily Grind',
        desc: 'Stack small wins every day with XP missions and momentum charts.',
        longDesc: 'Build momentum by completing daily XP missions and tracking your progress with visual charts. Celebrate small wins and keep leveling up.',
        image: taskbar,
    },
    {
        title: 'Motivation Surge',
        desc: 'Get fired up with anime-style quotes, colors, and challenge streaks.',
        longDesc: 'Stay motivated with dynamic anime-inspired quotes, vibrant colors, and challenge streaks that keep your energy high and your goals in sight.',
        image: energy,
    },
    {
        title: 'Calm Zone',
        desc: 'Lower anxiety and boost mental strength with peaceful task modes.',
        longDesc: 'Reduce stress and anxiety with calming task modes, mindfulness prompts, and mental strength exercises for a balanced mind.',
        image: calm,
    },
    {
        title: 'Digital Detox',
        desc: 'Take mindful breaks to reset your focus and restore mental clarity.',
        longDesc: 'Restore your mental clarity with guided digital detox breaks, breathing exercises, and focus resets to keep your mind refreshed.',
        image: stand,
    },
];

function Benifits() {
    const [selectedBenefit, setSelectedBenefit] = useState(null);

    return (
        <>
            <div className='relative bg-[#020521] text-white flex flex-col justify-center items-center overflow-hidden h-full w-full'>
                <StarsBackground />
                <div data-aos='fade' data-aos-delay='50' data-aos-duration='500' className='z-10'>
                    <FaAngleDoubleDown className='text-5xl mb-20' />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" className="z-10 text-center max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">
                        Why ARISE is Your Ultimate Level-Up Companion
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-wide font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Discipline. Focus. Progress. Power. Mastery.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 py-12 max-w-[1200px] mx-auto z-10">
                    {benefitsData.map((item, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={100 + index * 40}
                            className="flex flex-col items-center text-center transition-all duration-500 ease-in-out drop-shadow-[0_0_15px_white] hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(93,188,252,0.7)] rounded-3xl p-6 bg-[#1a1a2e] hover:bg-[#0f0f1a] cursor-pointer text-white"
                            onClick={() => setSelectedBenefit(item)}
                        >
                            <div className="w-[90px] h-[90px] rounded-full overflow-hidden mb-4  drop-shadow-[0_0_25px_rgba(30,64,175,0.8)]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                            <p className="text-[12px] text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedBenefit && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-blue/40 bg-opacity-60 backdrop-blur-sm transition-opacity"
                            onClick={() => setSelectedBenefit(null)}
                        />
                        {/* Modal Container */}
                        <div className="relative z-10 max-w-md w-full mx-4 sm:mx-0 bg-gradient-to-r from-[#0f172a] via-[#312e81] to-[#4c1d95] bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-2xl shadow-xl flex flex-col items-center p-6 glassmorphism">
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-300 transition"
                                onClick={() => setSelectedBenefit(null)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white border-opacity-40">
                                <img
                                    src={selectedBenefit.image}
                                    alt={selectedBenefit.title}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2 text-center">{selectedBenefit.title}</h3>
                            <p className="text-sm text-white lack mb-2 text-center">{selectedBenefit.desc}</p>
                            <p className="text-base text-white text-center">{selectedBenefit.longDesc}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Benifits;