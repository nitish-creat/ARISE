import React from 'react';
import StarsBackground from '../StarsBackground';
import DashNavbar from './DashNavBar';
import DashHero from './DashHero';
import Contact from '../footer/Contact';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear stored auth/user data
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // Redirect to login
    navigate('/Arise/Login');
  };

  return (
    <div className="bg-[#020521] min-h-screen overflow-hidden">
      {/* Navbar with logout */}
      <DashNavbar onLogout={handleLogout} />

      {/* Hero / main content */}
      <DashHero />

      {/* Footer with animated stars */}
      <div className="relative w-full mt-10">
        <StarsBackground />
        <Contact />
      </div>
    </div>
  );
}

export default Dashboard;
