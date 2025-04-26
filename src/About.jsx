import React from "react";
import Testimons from './Testimons'


const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>

      <div className="flex flex-col md:flex-row items-center  mt-13 ms-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="images/team.jpeg" // Replace with your actual image path
            alt="About ASHA AI"
            className="rounded-xl shadow-md max-w-full w-[500px]"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 ms-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Meet <span className="text-purple-700 font-bold underline underline-offset-4">ASHA AI</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            ASHA AI is your smart companion for job preparation and interview success.
            Whether you're looking for personalized interview tips, trending job roles, or expert guidance,
            ASHA AI provides real-time answers tailored to your career goals.
          </p>
        </div>
      </div>

      <Testimons />
    </section>

    
  );
};

export default AboutUs;
