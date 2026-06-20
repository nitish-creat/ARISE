import React, { useEffect, useState } from "react";
import StarsBackground from "../StarsBackground";
import avatarImg from "../../assets/avatar2.jpg"; // replace with your avatar image
import GradientText from "./GradientText";
import GlassCard from "./GlassCard";
import XPBar from "./XPBar";
import StreakCard from "./StreakCard";
import AchievementCard from "./AchievementCard";
import StatCard from "./StatCard";
import QuickActionButton from "./QuickActionButton";
import {
  FiCheckSquare,
  FiList,
  FiAward,
  FiGift,
  FiArrowRight,
  FiPlusCircle,
  FiTarget,
  FiBox,
  FiBarChart2,
} from "react-icons/fi";

const PANELS = [
  {
    key: "dailies",
    title: "Dailies & Habits",
    icon: FiCheckSquare,
    body: "Track your daily goals and positive habits here.",
    status: "live",
  },
  {
    key: "tasks",
    title: "Tasks / To-Do Board",
    icon: FiList,
    body: null,
    list: [
      "List of current tasks, quests, or challenges",
      "Checkboxes or completion status indicators",
      "Option to mark tasks complete — triggers rewards",
    ],
    status: "live",
  },
  {
    key: "achievements",
    title: "Achievements & Badges",
    icon: FiAward,
    body: "Grid or card view of unlocked achievements, badges, and milestones. Visual progress indicator for ongoing badges.",
    status: "live",
  },
  {
    key: "rewards",
    title: "Reward Yourself",
    icon: FiGift,
    body: "Redeem rewards and celebrate your wins.",
    status: "coming-soon",
  },
];

const STATS = [
  { icon: FiCheckSquare, label: "Completed Tasks", value: "248" },
  { icon: FiTarget, label: "Active Quests", value: "6" },
  { icon: FiAward, label: "Badges Earned", value: "5" },
  { icon: FiBarChart2, label: "Current Rank", value: "Gold III" },
];

function StatusPill({ status }) {
  if (status === "coming-soon") {
    return (
      <span className="text-[10px] uppercase tracking-wider font-semibold text-white/40 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
        Coming soon
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-300/80 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2 py-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse motion-reduce:animate-none" />
      Live
    </span>
  );
}

function DashHero() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  return (
    <section className="bg-[#020521] text-white relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 md:py-14 max-w-[1600px] mx-auto">
      {/* LAYER 1 — starfield (unchanged) */}
      <StarsBackground />

      {/* LAYER 2 — ambient gradient glows, blur-based depth */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/5 w-[28rem] h-[28rem] bg-[#4f46e5]/20 rounded-full blur-[120px]" />
        <div className="absolute top-24 right-1/6 w-[26rem] h-[26rem] bg-[#9333ea]/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] bg-[#3b82f6]/15 rounded-full blur-[120px]" />
      </div>

      {/* LAYER 3 + 4 — Welcome card (primary elevation, identity anchor) */}
      <GlassCard
        elevation="primary"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="800"
        className="relative z-10 p-6 md:p-10"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] blur-md opacity-50" />
            <div className="relative rounded-full overflow-hidden w-28 h-28 md:w-32 md:h-32 border-4 border-white/30 shadow-lg">
              <img
                src={avatarImg}
                alt={`${username || "Adventurer"}'s avatar`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Welcome + XP command center */}
          <div className="flex flex-col text-center lg:text-left flex-1 w-full gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Welcome back,{" "}
                <GradientText>{username || "Adventurer"}</GradientText>
              </h2>
              <p className="text-white/60 mt-2 text-sm md:text-base italic">
                "Keep pushing forward, your journey continues!"
              </p>
            </div>

            {/* XP Command Center */}
            <div className="max-w-lg w-full mx-auto lg:mx-0">
              <XPBar xp={1200} levelCap={1500} level={12} />
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <QuickActionButton icon={FiPlusCircle} label="New Quest" variant="solid" />
              <QuickActionButton icon={FiTarget} label="Add Habit" variant="outline" />
              <QuickActionButton icon={FiGift} label="Claim Reward" variant="outline" />
            </div>
          </div>
        </div>
      </GlassCard>

      {/* LAYER 3 — Floating command row: Streak + Achievement */}
      <div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <StreakCard days={12} delay={200} />
        <AchievementCard
          title="Discipline Master"
          description="Completed 30 habits in a row"
          delay={260}
        />
      </div>

      {/* Statistics row */}
      <div
        data-aos="fade-up"
        data-aos-delay="220"
        data-aos-duration="800"
        className="relative z-10 mt-10 mb-4 flex items-center gap-3"
      >
        <h3 className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">
          Statistics
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {STATS.map((stat, idx) => (
          <StatCard key={stat.label} {...stat} delay={260 + idx * 60} />
        ))}
      </div>

      {/* Section label */}
      <div
        data-aos="fade-up"
        data-aos-delay="280"
        data-aos-duration="800"
        className="relative z-10 mt-10 mb-4 flex items-center gap-3"
      >
        <h3 className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">
          Your Quest Board
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>

      {/* Main content grid — secondary elevation panels */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {PANELS.map((panel, idx) => {
          const Icon = panel.icon;
          return (
            <GlassCard
              key={panel.key}
              elevation="secondary"
              as="article"
              data-aos="fade-up"
              data-aos-delay={320 + idx * 80}
              data-aos-duration="800"
              tabIndex={0}
              className="p-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/60 hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 text-white/70 group-hover:text-white group-hover:border-white/25 group-hover:shadow-[0_0_16px_rgba(79,70,229,0.5)] transition-all duration-300">
                    <Icon size={17} />
                  </span>
                  <h3 className="font-bold text-lg">
                    <GradientText>{panel.title}</GradientText>
                  </h3>
                </div>
                <StatusPill status={panel.status} />
              </div>

              {panel.body && (
                <p className="text-white/60 text-sm leading-relaxed">{panel.body}</p>
              )}

              {panel.list && (
                <ul className="text-white/60 text-sm list-disc pl-5 space-y-1.5">
                  {panel.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/50 group-hover:text-white/90 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/60 rounded"
              >
                View details
                <FiArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

export default DashHero;
