import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import StarsBackground from '../StarsBackground';
import { FiSettings, FiBell, FiLogOut, FiUser, FiHelpCircle, FiX } from "react-icons/fi";
import Rare1 from '../../assets/rare1.jpg';
import Coin from '../../assets/arise coin.png';

function DashNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [username, setUsername] = useState('');
    const menuRef = useRef(null);
    const navigate = useNavigate();

    // Load username from localStorage
    useEffect(() => {
        const storedName = localStorage.getItem('username');
        if (storedName) {
            setUsername(storedName);
        }
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    // Logout Function
    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/Arise/login');
    };

    return (
        <>
            {/* Top Navbar */}
            <nav className="bg-[#020521] text-white py-3 z-50 shadow-lg shadow-blue-900/50">
                <StarsBackground />
                <div
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-5"
                >
                    {/* Logo */}
                    <h1 className="font-extrabold flex items-center gap-2 bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] bg-clip-text text-transparent animate-pulse text-3xl lg:text-5xl cursor-pointer select-none">
                        ARISE
                    </h1>

                    {/* Right Side */}
                    <div className="flex items-center gap-6">
                        {/* Username */}
                        {username && (
                            <span className="hidden md:block font-semibold text-lg text-purple-300 drop-shadow">
                                Hi, {username} 👋
                            </span>
                        )}

                        {/* Avatar */}
                        <button className="rounded-full p-1 border border-white/20 hover:shadow-[0_0_20px_rgba(79,70,229,0.8),0_0_35px_rgba(147,51,234,0.6)] transition duration-300">
                            <img
                                src={Rare1}
                                alt="User Avatar"
                                className="object-cover rounded-full w-12 h-12 md:w-14 md:h-14"
                            />
                        </button>

                        {/* ARISE Coin */}
                        <button className="rounded-full p-1 border border-white/20 hover:shadow-[0_0_20px_rgba(79,70,229,0.8),0_0_35px_rgba(147,51,234,0.6)] transition duration-300">
                            <img
                                src={Coin}
                                alt="ARISE Coin"
                                className="object-cover rounded-full w-12 h-12 md:w-14 md:h-14"
                            />
                        </button>

                        {/* Settings Icon */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                             hover:bg-white/20 hover:shadow-[0_0_20px_rgba(79,70,229,0.8),0_0_35px_rgba(147,51,234,0.6)] 
                             transition duration-300"
                        >
                            <FiSettings size={22} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Side Menu Drawer (Right Side) */}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a1a] shadow-lg z-50 transform 
                   ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col h-full text-white p-6 gap-6">
                    {/* Header with Close Button */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Settings</h2>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 rounded-full hover:bg-white/10 transition"
                        >
                            <FiX size={20} />
                        </button>
                    </div>

                    {/* Menu Buttons */}
                    <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
                        <FiBell size={20}/>
                        <span className="text-lg font-semibold text-purple-300">Notifications</span>
                    </button>

                    <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
                        <FiUser size={20} />
                        <span className="text-lg font-semibold text-purple-300">Profile</span>
                    </button>

                    <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition">
                        <FiHelpCircle size={20} />
                        <span className="text-lg font-semibold text-purple-300">Help</span>
                    </button>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-600/20 transition"
                    >
                        <FiLogOut size={20} className="text-red-400" />
                        <span className="text-lg font-semibold text-red-400">Logout</span>
                    </button>

                    {/* Footer */}
                    <div className="mt-auto text-sm opacity-75">
                        © {new Date().getFullYear()} ARISE
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashNavbar;
