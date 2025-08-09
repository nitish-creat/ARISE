import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import StarsBackground from '../StarsBackground';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Get stored user details from Sign-Up
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // ✅ Check credentials
    if (username === storedUsername && password === storedPassword) {
      setError("");
      navigate('/Arise/Dashboard');
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020521] px-4">
      <StarsBackground />
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-6 border border-white/10">
        <h2 className="text-3xl font-bold text-center text-white animate-pulse">
          Sign In to <span className="bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] bg-clip-text text-transparent">ARISE</span>
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

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
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
            Login
          </button>
        </form>

        <div className="text-center text-gray-400 text-sm">
          Don’t have an account?{' '}
          <Link to="/Arise/Combine" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </div>

        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Login;
