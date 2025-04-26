import React, { useState} from "react";
import { FaSignOutAlt, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className=" bg-white sticky top-0 ">

              <nav className="z-50 bg-white shadow-md border-b border-gray-200 px-4 py-2 ">
                <div className="  flex justify-between items-center space-x-2">
                  <div className="flex items-center space-x-2">
                  <img src="images/logo.jpg" alt="Logo" className="w-8 h-8" /> {/* Update path */}
                  <span className="text-xl font-bold text-purple-700">Asha AI</span>
        
                  </div>
                
        
        <ul className="hidden md:flex items-center space-x-10 font-medium text-purple-700 border border-purple-300 rounded-full px-8  bg-white shadow-sm ">
                  <li>
                    <ScrollLink to="home" smooth={true} offset={-80} duration={200} className="cursor-pointer  ">Home</ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="job" smooth={true} offset={-80} duration={200} className="cursor-pointer  ">Find Jobs</ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="about" smooth={true} offset={-80} duration={200} className="cursor-pointer ">About Us</ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="contact" smooth={true} offset={-80} duration={200} className="cursor-pointer ">Contact Us</ScrollLink>
                  </li>
                  <li className="text-purple-700 text-2xl">
                    <RouterLink to="/login">
                      <FaSignOutAlt title="Sign Out / Login" />
                    </RouterLink>
                  </li>
                  <li className="text-purple-900 text-2xl pl-3">
                  <RouterLink to="/userprofile">
                      <FaUserCircle title="Go to UserProfile" />
                    </RouterLink>
                    </li>
                </ul>

                <div></div>
                
        
                {/* Mobile Menu Button */}
                <button className="md:hidden text-purple-700 text-2xl" onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? <FaTimes /> : <FaBars />}
                  </button>
                </div>
        
                {navOpen && (
                  <ul className="md:hidden mt-2 flex flex-col items-center gap-3 text-purple-700 font-medium py-2 border-t border-gray-200">
                    <li><ScrollLink to="home" smooth={true} offset={-80} duration={200} onClick={() => setNavOpen(false)} className="cursor-pointer">Home</ScrollLink></li>
                    <li><ScrollLink to="job" smooth={true} offset={-80} duration={200} onClick={() => setNavOpen(false)} className="cursor-pointer">Find Jobs</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} offset={-80} duration={200} onClick={() => setNavOpen(false)} className="cursor-pointer">About Us</ScrollLink></li>
                    <li><ScrollLink to="contact" smooth={true} offset={-80} duration={200} onClick={() => setNavOpen(false)} className="cursor-pointer">Contact Us</ScrollLink></li>

                    <li className="text-xl flex gap-4 mt-4">
              <RouterLink to="/userprofile" onClick={() => setNavOpen(false)}>
                <FaUserCircle title="User Profile" className="text-purple-900" />
              </RouterLink>
              <RouterLink to="/login" onClick={() => setNavOpen(false)}>
                <FaSignOutAlt title="Sign Out / Login" className="text-purple-700" />
              </RouterLink>
            </li>
                  </ul>
                )}
        
              </nav> 
        </div>
  )
}
    export default Nav
