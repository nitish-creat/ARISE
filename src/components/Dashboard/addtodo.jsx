import React, { useState, useContext } from "react";
import { TaskContext } from "./taskContext";
import { useNavigate } from "react-router-dom";
import StarsBackground from "../StarsBackground";

function AddTodo() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;
    setTasks([...tasks, { text: taskText, completed: false }]);
    navigate(-1); // Dashboard par wapas
  };

  return (
    <section className="bg-[#020521] min-h-screen flex items-center justify-center px-4">
      <StarsBackground />
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] mb-4">
          Add New To-Do
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter your task..."
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] text-white shadow-lg hover:scale-105 transition-transform"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex-1 px-4 py-2 rounded-lg font-semibold bg-gray-500 text-white shadow-lg hover:scale-105 transition-transform"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddTodo;
