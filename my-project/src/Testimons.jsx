import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer",
    image: "images/pic1.png",
    feedback:
      "I was always passionate about software development, but coming from a non-tech background, I felt lost. ASHA AI became my virtual career coach. The AI chatbot answered all my queries about coding bootcamps, free courses, and scholarships for women in tech. Today, I’m working as a junior software engineer, and I owe a huge part of my success to ASHA AI!",
  },
  {
    name: "Shradha",
    role: "Frontend Engineer",
    image: "images/pic2.jpg",
    feedback:
      "ASHA AI helped me polish my frontend skills. The personalized suggestions and coding challenges made me job-ready in no time!",
  },
  {
    name: "Emily Watson",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    feedback:
      "From career advice to design tips, ASHA AI gave me the mentorship I needed to transition into UX design. Super grateful!",
  },
  {
    name: "Neha Kapoor",
    role: "Backend Developer",
    image: "images/pic3.jpeg",
    feedback:
      "Coming from a small town, I had limited exposure to tech. ASHA AI opened doors I didn’t even know existed. It's more than a platform—it's a movement!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" font-poppins font-normal  w-full px-6 py-10 bg-gradient-to-r from-purple-100 to-white text-center mt-10">
      <h2 className="text-3xl font-bold mb-10">
        Our <span className="text-purple-700 underline">Testimonials</span>
      </h2>

      <div className="flex justify-center gap-8 mt-12 items-center mb-6">
        {testimonials.map((t, index) => (
          <img
            key={index}
            src={t.image}
            alt={t.name}
            className={`w-14 h-14 rounded-full border-2 border-purple-300 transition-opacity duration-300 ${
              index === current ? "w-28 h-28 border-4 border-purple-500" : "opacity-40"
            }`}
          />
        ))}
      </div>

      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-gray-700 mb-4 italic">{testimonials[current].feedback}</p>
        <p className="font-semibold text-lg text-black">
          {testimonials[current].name} <span className="text-sm text-gray-500">| {testimonials[current].role}</span>
        </p>
      </motion.div>

      <div className="flex justify-center mt-6 gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-purple-600" : "bg-purple-300"
            }`}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-purple-500 text-white px-4 py-1 rounded-full hover:bg-purple-600"
        >
          <FaRegHandPointLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-purple-500 text-white px-4 py-1 rounded-full hover:bg-purple-600"
        >
         <FaRegHandPointRight />
        </button>
      </div>
    </div>
  );
}
