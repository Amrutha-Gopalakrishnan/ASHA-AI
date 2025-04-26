

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    message: "Auto-generated message", // required by Web3Forms
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "93f08afe-079b-4a20-b6be-2726b81e72b9",
        ...formData,
      }),
    });

    const result = await res.json();
    setIsSubmitting(false);

    if (result.success) {
      alert("Form submitted successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        domain: "",
        message: "Auto-generated message",
      });
    } else {
      alert("Failed to submit. Please try again ❌");
    }
  };

  return (
    <div className="flex items-center justify-center bg-white" id="contact">
      <div className="min-h-100 bg-white rounded-2xl shadow-2xl p-10 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Get in <span className="text-purple-700 underline">Touch</span>
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm text-purple-600 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-purple-600 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-purple-600 font-semibold mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              maxLength="10"
              placeholder="Your Contact"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-purple-600 font-semibold mb-1">
              Domain
            </label>
            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-purple-600 py-1 bg-transparent"
              required
            >
              <option value="">Choose your subject</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Graphic Design</option>
              <option>Data Science</option>
              <option>Software Development</option>
              <option>Other</option>
            </select>
          </div>

          {/* message is required by Web3Forms, use hidden input */}
          <input type="hidden" name="message" value={formData.message} />

          <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md shadow-md"
              style={{ borderRadius: "50px" }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
