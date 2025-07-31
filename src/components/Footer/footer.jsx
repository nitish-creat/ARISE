import React, { useState } from 'react';
import StarsBackground from '../StarsBackground';
import Blueaura from '../../assets/blueaura.jpeg';
const blueaura={
  backgroundImage: `url(${Blueaura})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'bottom',
};
function Footer() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const isPasswordMatch = form.password && form.password === form.confirmPassword;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic here
  };

  return (
    <div
    className="h-screen w-full flex justify-center items-center bg-[#020521] text-white">
      <StarsBackground />
      <form
        className={`w-80 rounded-lg p-6 duration-900 ${
          darkMode
            ? 'bg-gray-600 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'
            : 'bg-gray-400 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]'
        }`}
        onSubmit={handleRegister}
      >
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          className="p-3 rounded-lg w-full bg-gray-700 outline-none mb-3"
          type="text"
          name="name"
          placeholder="Enter your good name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          className="p-3 rounded-lg w-full bg-gray-700 outline-none mb-3"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password" className="block mb-2 text-sm font-medium">
          Password
        </label>
        <div className="relative mb-3">
          <input
            id="password"
            className="p-3 rounded-lg w-full bg-gray-700 outline-none"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl font-medium duration-900 hover:text-blue-500 transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? '🐵' : '🙈'}
          </button>
        </div>

        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium"
          style={{
            opacity: isPasswordMatch || !form.confirmPassword ? 1 : 0.5,
            transition: 'opacity 0.3s',
          }}
        >
          Confirm Password
        </label>
        <div className="relative mb-3">
          <input
            id="confirmPassword"
            className={`p-3 rounded-lg w-full bg-gray-700 outline-none ${
              isPasswordMatch || !form.confirmPassword ? '' : 'opacity-50'
            }`}
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl font-medium duration-900 hover:text-blue-500 transition hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showConfirmPassword ? '🐵' : '🙈'}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}
          className={`mb-4 text-sm font-medium px-3 py-1 rounded-lg ${
            darkMode
              ? 'bg-blue-200 text-black duration-1000'
              : 'bg-gray-800 text-white duration-900'
          }`}
        >
          {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </button>

        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-bold ${
            isPasswordMatch
              ? 'bg-blue-500 text-white hover:bg-blue-600 transition'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed opacity-50'
          }`}
          disabled={!isPasswordMatch}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Footer;