import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      
      <nav className="flex justify-between items-center p-4 px-8 shadow-md bg-white sticky top-0  z-50 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img src="images/logo.jpg" alt="Logo" className="w-8 h-8" /> {/* Update path */}
          <span className="text-xl font-bold text-purple-700">Asha AI</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-black-800 font-medium border border-purple-700 rounded-full px-10 py-3">
          <li><a href="#home" className="text-decoration-none">Home</a></li>
          <li><a href="#job" className="text-decoration-none ">Find Jobs</a></li>
          <li><a href="#about" className="text-decoration-none ">About Us</a></li>
          <li><a href="#contact" className="text-decoration-none">Contact Us</a></li>
          <li className="text-purple-700 text-2xl"><FaUserCircle /></li>
        </ul>
        <div></div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-white via-violet-50 to-purple-100" id="home">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Welcome to ASHA AI <br />
            Your AI-powered career assistant for women
          </h1>
          <p className="text-gray-600 mt-6 text-lg">
            Asha AI is an intelligent chatbot designed to enhance user engagement on the JobsForHer Foundation platform. It provides seamless access to job listings, mentorship programs, community events, and career resources tailored for women...
          </p>
          <p className="text-sm mt-4 text-gray-500">
            <span className="font-semibold">Suggestion:</span> UI/UX Designer, Programming, <span className="text-purple-600 font-semibold">Digital Marketing</span>, Video, Animation.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="images/home.jpg" alt="Hero Illustration" className="max-w-md w-full" />
        </div>
      </section>
    </div>
  );
};

export default Home;
