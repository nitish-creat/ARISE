import React from "react";
import StarsBackground from "../StarsBackground";
import DashNavbar from "./DashNavBar";
import DashHero from "./DashHero";
import Contact from "../footer/Contact";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/Arise/Login");
  };

  return (
    <div className="bg-[#020521] min-h-screen overflow-hidden">
      <DashNavbar onLogout={handleLogout} />

      <DashHero />

      <div className="relative w-full mt-10">
        <StarsBackground />
        <Contact />
      </div>
    </div>
  );
}

export default Dashboard;
