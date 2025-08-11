import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import StarsBackground from "../StarsBackground";

function TodoBoard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskText, setTaskText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;
    setTasks([...tasks, { text: taskText, completed: false }]);
    setTaskText("");
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    const newTask = prompt("Edit task:", tasks[index].text);
    if (newTask !== null && newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = newTask;
      setTasks(updatedTasks);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <section className="bg-[#020521] min-h-screen flex items-center justify-center px-4">
      <StarsBackground />
      <div className="flex gap-8 w-full max-w-5xl px-2">
        {/* Pehla div: Add task form + task list */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-lg">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] mb-4">
            To-Do List
          </h2>
          <form onSubmit={handleAddTask} className="flex gap-3">
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Enter your task..."
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] text-white shadow-lg hover:scale-105 transition-transform"
            >
              Add
            </button>
          </form>
          <ul className="mt-6 space-y-3 max-h-[400px] overflow-y-auto">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white/10 px-3 py-2 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                  <span
                    className={`${
                      task.completed ? "line-through text-gray-400" : "text-white"
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditTask(index)}
                    className="text-blue-400 hover:text-blue-200"
                    aria-label="Edit Task"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="text-red-400 hover:text-red-200"
                    aria-label="Delete Task"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 w-full px-4 py-2 rounded-lg font-semibold bg-gray-500 text-white shadow-lg hover:scale-105 transition-transform"
          >
            Back
          </button>
        </div>

        {/* Naya div with just "Tasks" text */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-lg flex items-center justify-center">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea]">
            Tasks
          </h2>
        </div>
      </div>
    </section>
  );
}

export default TodoBoard;
