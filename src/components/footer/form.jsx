import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import StarsBackground from "../StarsBackground";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setError("All fields are required!");
      return;
    }

    // ✅ Store user data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    setError("");
    navigate("/Arise/Dashboard"); // Go directly to dashboard after signup
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#020521] px-4"
      id="form"
    >
      <StarsBackground />
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-6 border border-white/10">
        <h2 className="text-3xl font-bold text-center text-white animate-pulse">
          Create an{" "}
          <span className="bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] bg-clip-text text-transparent">
            ARISE
          </span>{" "}
          Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-gray-300 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              placeholder="Enter your name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#9333ea]"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 pr-10 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 right-3 top-6 flex items-center justify-center cursor-pointer text-gray-400"
              onClick={togglePassword}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full px-6 py-2 rounded-full text-white font-semibold transition-transform duration-300 bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] active:scale-95"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to="/Arise/Login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
