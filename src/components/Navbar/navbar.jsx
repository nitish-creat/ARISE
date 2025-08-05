import React, { useRef, useEffect } from 'react';
import StarsBackground from '../StarsBackground';
import { HiMiniSquares2X2 } from "react-icons/hi2";
import ResMenu from './resmenu';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const [showmenu, setshowmenu] = React.useState(false);
  const menuToggleRef = useRef(null);

  const togglemenu = () => {
    setshowmenu(!showmenu);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menuElement = document.getElementById('resmenu');
      if (
        showmenu &&
        !menuToggleRef.current?.contains(e.target) &&
        !menuElement?.contains(e.target)
      ) {
        setshowmenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showmenu]);

  return (
    <>
      <nav className='bg-[#020521] text-white py-6 relative z-50' id='home'>
        <StarsBackground />
        <div
          data-aos='fade'
          data-aos-delay='400'
          data-aos-duration='1000'
          className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        >
          <h1 className='font-extrabold flex justify-center items-center gap-2 bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] bg-clip-text text-transparent animate-pulse text-4xl lg:text-6xl cursor-pointer'>
            ARISE
          </h1>

          <ul className='hidden md:flex flex-row items-center gap-4 lg:gap-8 text-lg'>
            <li>
              <a
                href="#form"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] hover:from-[#3b82f6] hover:via-[#6366f1] hover:to-[#8b5cf6] transition duration-300 ease-in-out font-semibold text-lg"
              >
                GET STARTED
              </a>
            </li>
            <li>
              <NavLink
                to="/learn"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] hover:from-[#3b82f6] hover:via-[#6366f1] hover:to-[#8b5cf6] transition duration-300 ease-in-out font-semibold text-lg"
              >
                LEARN MORE
              </NavLink>
            </li>
            <li>
              <a
                href="#contact"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#9333ea] hover:from-[#3b82f6] hover:via-[#6366f1] hover:to-[#8b5cf6] transition duration-300 ease-in-out font-semibold text-lg"
              >
                CONTACT US
              </a>
            </li>
            <li>
              <a
                href="#"
                className='inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-200'
              >
                <button className="px-6 py-2 border border-white rounded-full text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r hover:from-[#4f46e5] hover:via-[#3b82f6] hover:to-[#9333ea] hover:border-transparent active:scale-90 active:bg-blue-400/10">
                  login
                </button>
              </a>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div
            ref={menuToggleRef}
            className='md:hidden block flex justify-center items-center gap-2'
          >
            <a
              href="#"
              className='inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-200'
            >
              <button className="px-6 py-2 border border-white rounded-full text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r hover:from-[#4f46e5] hover:via-[#3b82f6] hover:to-[#9333ea] hover:border-transparent active:scale-90 active:bg-blue-400/10">
                login
              </button>
            </a>
            <button onClick={togglemenu} className='cursor-pointer'>
              <HiMiniSquares2X2 className='text-2xl text-white' />
            </button>
          </div>
        </div>
      </nav>

      {showmenu && window.innerWidth < 768 && (
  <ResMenu showmenu={showmenu} setShowmenu={setshowmenu} />
)}

    </>
  );
}

export default Navbar;