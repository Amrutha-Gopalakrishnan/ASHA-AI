import React from "react";

export default function ContactForm() {
  return (
    <div className=" flex items-center justify-center bg-white" id="contact">
      <div className="min-h-100 bg-white rounded-2xl shadow-2xl p-10 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Get in <span className="text-purple-700 underline">Touch</span>
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div>
            <label className="block text-sm text-purple-600 font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-1"
            />
          </div>

          <div>
            <label className="block text-sm text-purple-600 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-1"
            />
          </div>

          <div>
            <label className="block text-sm text-purple-600 font-semibold mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Your Contact"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-1"
            />
          </div>

          <div>
            <label className="block text-sm text-purple-600 font-semibold mb-1">Domain</label>
            <select
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-1 bg-transparent"
            >
              <option>Choose your subject</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Graphic Design</option>
              <option>Data Science</option>
              <option>Software Development</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md shadow-md"
              style={{borderRadius: "50px"}}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
