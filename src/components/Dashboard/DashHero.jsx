import React, { useEffect, useState } from "react";
import StarsBackground from "../StarsBackground";
import avatarImg from "../../assets/avatar2.jpg"; // replace with your avatar image

function DashHero() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  return (
    <section className="bg-[#020521] text-white relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10">
      <StarsBackground />

      {/* Top card */}
      <div
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 
                   shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition duration-300"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="rounded-full overflow-hidden w-24 h-24 md:w-28 md:h-28 border-4 border-white/30 shadow-lg">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Welcome & motivational line */}
          <div className="flex flex-col text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-bold">
              Welcome{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea]">
                {username || "Adventurer"}
              </span>
              
            </h2>
            <p className="text-white/70 mt-1">
              "Keep pushing forward, your journey continues!"
            </p>

            {/* Badge & XP */}
            <div className="mt-4 flex justify-center md:justify-start">
              <div className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
                <div className="px-6 py-3 hover:bg-white/20 transition">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-semibold">
                    Badge
                  </p>
                  <p className="text-white/80">5</p>
                </div>
                <div className="px-6 py-3 hover:bg-white/20 transition border-l border-white/20">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-semibold">
                    XP
                  </p>
                  <p className="text-white/80">1200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Panels */}
      <div
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {/* Dailies & Habits */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-bold text-xl mb-3">
            Dailies & Habits
          </h3>
          <p className="text-white/70 text-sm">
            Track your daily goals and positive habits here.
          </p>
        </div>

        {/* Tasks / To-Do Board */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-bold text-xl mb-3">
            Tasks / To-Do Board
          </h3>
          <ul className="text-white/70 text-sm list-disc pl-5 space-y-1">
            <li>List of current tasks, quests, or challenges</li>
            <li>Checkboxes or completion status indicators</li>
            <li>Option to mark tasks complete — triggers rewards</li>
          </ul>
        </div>

        {/* Achievements & Badges */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-bold text-xl mb-3">
            Achievements & Badges
          </h3>
          <p className="text-white/70 text-sm">
            Grid or card view of unlocked achievements, badges, and milestones.
            Visual progress indicator for ongoing badges.
          </p>
        </div>

        {/* Reward Yourself */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-bold text-xl mb-3">
            Reward Yourself
          </h3>
          <p className="text-white/70 text-sm">
            Redeem rewards and celebrate your wins.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DashHero;
