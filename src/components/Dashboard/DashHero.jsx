import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "./taskContext";
import StarsBackground from "../StarsBackground";
import avatarImg from "../../assets/avatar2.jpg";
import { useNavigate } from "react-router-dom";

function DashHero() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) setUsername(storedName);
  }, []);

  const toggleTask = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const editTask = (index) => {
    const newText = prompt("Edit your task:", tasks[index].text);
    if (newText && newText.trim() !== "") {
      const updated = tasks.map((task, i) =>
        i === index ? { ...task, text: newText.trim() } : task
      );
      setTasks(updated);
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <section className="bg-[#020521] text-white relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10">
      <StarsBackground />
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="rounded-full overflow-hidden w-24 h-24 md:w-28 md:h-28 border-4 border-white/30 shadow-lg">
            <img src={avatarImg} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-bold">
              Welcome{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea]">
                {username || "Adventurer"}
              </span>
            </h2>
            <p className="text-white/70 mt-1">"Keep pushing forward, your journey continues!"</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-bold text-xl mb-3">
            Dailies & Habits
          </h3>
          <p className="text-white/70 text-sm">Track your daily goals and positive habits here.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-bold text-xl">
              Tasks / To-Do Board
            </h3>
            {tasks.length > 0 && (
              <span className="text-xs text-white/60">
                {pendingCount} pending • {completedCount} done
              </span>
            )}
          </div>
          {tasks.length > 0 ? (
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white/5 p-2 rounded-lg"
                >
                  <span
                    onClick={() => toggleTask(index)}
                    className={`cursor-pointer flex-1 ${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => editTask(index)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
                      title="Edit Task"
                    >
                      ✏
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                      title="Delete Task"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white/70 text-sm mb-4">No tasks yet.</p>
          )}
          <button
            onClick={() => navigate("/add")}
            className="mt-2 px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] text-white shadow-lg hover:shadow-[0_0_15px_rgba(79,70,229,0.8)] hover:scale-105 transition-transform"
          >
            {tasks.length === 0 ? "➕ Add To-Do" : "➕ Add More To-Do"}
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-bold text-xl mb-3">
            Achievements & Badges
          </h3>
          <p className="text-white/70 text-sm">
            Grid or card view of unlocked achievements, badges, and milestones.
            Visual progress indicator for ongoing badges.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] font-bold text-xl mb-3">
            Reward Yourself
          </h3>
          <p className="text-white/70 text-sm">Redeem rewards and celebrate your wins.</p>
        </div>
      </div>
    </section>
  );
}

export default DashHero;
