import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import StarsBackground from '../StarsBackground';
import {
    FiSettings,
    FiBell,
    FiLogOut,
    FiUser,
    FiHelpCircle,
    FiX,
    FiBarChart2,
    FiAward,
    FiBox,
    FiTrendingUp,
} from "react-icons/fi";
import Rare1 from '../../assets/rare1.jpg';
import Coin from '../../assets/arise coin.png';
import GradientText from './GradientText';

const DRAWER_SECTIONS = [
    {
        items: [
            { icon: FiUser, label: 'Profile' },
            { icon: FiBarChart2, label: 'Statistics' },
            { icon: FiAward, label: 'Achievements' },
        ],
    },
    {
        items: [
            { icon: FiBox, label: 'Inventory' },
            { icon: FiTrendingUp, label: 'Leaderboard' },
            { icon: FiBell, label: 'Notifications', badge: 3 },
        ],
    },
    {
        items: [
            { icon: FiSettings, label: 'Settings' },
            { icon: FiHelpCircle, label: 'Help' },
        ],
    },
];

function DashNavbar({ onLogout, level = 12, xp = 1200, coins = 350, notifications = 3 }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [username, setUsername] = useState('');
    const menuRef = useRef(null);
    const closeBtnRef = useRef(null);
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

    // Close on Escape + focus the close button when the drawer opens
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener('keydown', handleKeyDown);
            closeBtnRef.current?.focus();
        }
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [menuOpen]);

    // Logout — calls the handler passed down from Dashboard (which clears
    // 'user' + 'token' and redirects to /Arise/Login) when provided, while
    // still clearing the legacy 'username' key this component originally
    // owned. Falls back to the old behavior if no prop is passed.
    const handleLogout = () => {
        localStorage.removeItem('username');
        if (onLogout) {
            onLogout();
        } else {
            navigate('/Arise/login');
        }
    };

    return (
        <>
            {/* Top Navbar — command-center glass surface */}
            <nav className="sticky top-0 bg-[#020521]/80 backdrop-blur-xl text-white py-3 z-40 border-b border-white/5 shadow-lg shadow-black/40">
                <StarsBackground />
                <div
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-2 gap-3"
                >
                    {/* Logo — unchanged */}
                    <h1 className="font-extrabold flex items-center gap-2 bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] bg-clip-text text-transparent animate-pulse text-2xl sm:text-3xl lg:text-5xl cursor-pointer select-none motion-reduce:animate-none shrink-0">
                        ARISE
                    </h1>

                    {/* Right Side */}
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
                        {/* Username (desktop only) */}
                        {username && (
                            <span className="hidden lg:block font-semibold text-base text-purple-300 drop-shadow mr-1">
                                Hi, {username} 👋
                            </span>
                        )}

                        {/* Level + XP indicator */}
                        <div className="hidden sm:flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-full pl-3 pr-4 py-1.5">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] text-[11px] font-bold shrink-0">
                                {level}
                            </span>
                            <div className="flex flex-col leading-none gap-1 min-w-[64px]">
                                <span className="text-[10px] text-white/50 font-medium">Lv. {level}</span>
                                <div className="h-1 w-16 rounded-full bg-white/10 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea]"
                                        style={{ width: `${Math.min(100, Math.round((xp / 1500) * 100))}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Coin count */}
                        <button
                            type="button"
                            aria-label={`ARISE coin balance: ${coins}`}
                            className="flex items-center gap-1.5 sm:gap-2 rounded-full pl-1 pr-3 py-1 border border-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.8),0_0_35px_rgba(147,51,234,0.6)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70"
                        >
                            <img
                                src={Coin}
                                alt=""
                                className="object-cover rounded-full w-8 h-8 md:w-10 md:h-10"
                            />
                            <span className="text-sm md:text-base font-semibold text-white/85 tabular-nums">
                                {coins.toLocaleString()}
                            </span>
                        </button>

                        {/* Notification bell with badge */}
                        <button
                            type="button"
                            aria-label={`Notifications${notifications ? `, ${notifications} unread` : ''}`}
                            className="relative p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                             hover:bg-white/20 hover:shadow-[0_0_20px_rgba(79,70,229,0.8),0_0_35px_rgba(147,51,234,0.6)] 
                             transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70"
                        >
                            <FiBell size={20} />
                            {notifications > 0 && (
                                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-[10px] font-bold text-white border-2 border-[#020521]">
                                    {notifications > 9 ? '9+' : notifications}
                                </span>
                            )}
                        </button>

                        {/* Avatar */}
                        <button
                            type="button"
                            aria-label="Open profile"
                            className="relative rounded-full p-0.5 border-2 border-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.8),0_0_35px_rgba(147,51,234,0.6)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70"
                        >
                            <img
                                src={Rare1}
                                alt=""
                                className="object-cover rounded-full w-9 h-9 md:w-12 md:h-12"
                            />
                            <span className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] text-[9px] font-bold border-2 border-[#020521]">
                                {level}
                            </span>
                        </button>

                        {/* Settings Icon */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Open settings menu"
                            aria-expanded={menuOpen}
                            className="p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                             hover:bg-white/20 hover:shadow-[0_0_20px_rgba(79,70,229,0.8),0_0_35px_rgba(147,51,234,0.6)] 
                             transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70"
                        >
                            <FiSettings size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Scrim */}
            <div
                aria-hidden="true"
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Side Menu Drawer — gaming dashboard command menu */}
            <div
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Dashboard menu"
                className={`fixed top-0 right-0 h-full w-80 max-w-[88vw] bg-[#0a0a1a]/95 backdrop-blur-xl border-l border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] z-50 transform overflow-y-auto
                   ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-out`}
            >
                <div className="flex flex-col min-h-full text-white p-6 gap-2">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl font-bold">
                            <GradientText>Menu</GradientText>
                        </h2>
                        <button
                            ref={closeBtnRef}
                            type="button"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70"
                        >
                            <FiX size={20} />
                        </button>
                    </div>

                    {/* Mini profile summary */}
                    <div className="flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-xl p-3 mb-3">
                        <img src={Rare1} alt="" className="w-11 h-11 rounded-full object-cover border border-white/15" />
                        <div className="min-w-0">
                            <p className="font-semibold truncate">{username || 'Adventurer'}</p>
                            <p className="text-xs text-white/45">Level {level} · {xp.toLocaleString()} XP</p>
                        </div>
                    </div>

                    {/* Sectioned menu items */}
                    {DRAWER_SECTIONS.map((section, sIdx) => (
                        <React.Fragment key={sIdx}>
                            <nav className="flex flex-col gap-1">
                                {section.items.map(({ icon: Icon, label, badge }) => (
                                    <button
                                        key={label}
                                        className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70"
                                    >
                                        <span className="flex items-center gap-3">
                                            <Icon size={19} className="text-white/70" />
                                            <span className="text-[15px] font-medium text-white/85">{label}</span>
                                        </span>
                                        {badge ? (
                                            <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-[10px] font-bold">
                                                {badge}
                                            </span>
                                        ) : null}
                                    </button>
                                ))}
                            </nav>
                            {sIdx < DRAWER_SECTIONS.length - 1 && (
                                <div className="h-px bg-white/10 my-2" aria-hidden="true" />
                            )}
                        </React.Fragment>
                    ))}

                    <div className="flex-1 h-px bg-white/10 my-2" aria-hidden="true" />

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-600/20 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70"
                    >
                        <FiLogOut size={19} className="text-red-400" />
                        <span className="text-[15px] font-semibold text-red-400">Logout</span>
                    </button>

                    {/* Footer */}
                    <div className="mt-4 text-xs opacity-50 text-center">
                        © {new Date().getFullYear()} ARISE
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashNavbar;
