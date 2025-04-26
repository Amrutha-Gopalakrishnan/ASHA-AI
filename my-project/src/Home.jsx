import React from "react";

const Home = () => {

  return (
    <div className="p-0">
      

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-white via-violet-50 to-purple-100" id="home">
        <div className="w-full lg:w-1/2  lg:mb-0">
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
