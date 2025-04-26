import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { FiMenu } from "react-icons/fi";
import Dashboard from "./Dashboard";

// Initialize Supabase client
const supabaseUrl = "https://wodkxkcbdrlksnzerezz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZGt4a2NiZHJsa3NuemVyZXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTQ5MTYsImV4cCI6MjA2MTE3MDkxNn0.SV7zqbCCMnidBNT-IGYq0kN0eVRtQlJcvD6-_0ZWCLo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
  const [profile, setProfile] = useState({
    full_name: "",
    nickname: "",
    gender: "",
    country: "",
    language: "",
    time_zone: "",
  });

  const [isEditable, setIsEditable] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("profile");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const saveProfile = async () => {
    const { data, error } = await supabase.from("user_profiles").insert([
      {
        ...profile,
      },
    ]);

    if (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile.");
    } else {
      console.log("Profile saved successfully!", data);
      alert("Profile saved successfully!");
      setIsEditable(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveProfile();
  };

  const unlockFields = () => {
    setIsEditable(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const switchPage = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col bg-purple-800 text-white">
        <button onClick={toggleSidebar} className="p-4 focus:outline-none">
          <FiMenu size={30} />
        </button>

        {sidebarOpen && (
          <div className="w-64 p-6">
            <ul>
              <li
                className="mb-6 cursor-pointer hover:underline"
                onClick={() => switchPage("profile")}
              >
                User Profile
              </li>
              <li
                className="mb-6 cursor-pointer hover:underline"
                onClick={() => switchPage("dashboard")}
              >
                Dashboard
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1  bg-gray-100 overflow-auto">
        <header className="bg-purple-700 text-white p-3 text-center">
          <h1 className="text-2xl font-bold">
            {activePage === "profile" ? "User Profile" : "Dashboard"}
          </h1>
        </header>

        {activePage === "profile" && (
          <>
        
            <section className="bg-white border-2 border-purple-400 rounded-lg p-5 mt-5 flex justify-between items-center">
                
              <h2 className="text-lg font-semibold">
                Managing your profile details
              </h2>
              <button
                type="button"
                onClick={unlockFields}
                className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
              >
                Edit Profile
              </button>            
             
            </section>

            <div className="flex align-center justify-center mb-5 mt-4">
              <p className="card w-120 text-center font-bold text-sm text-gray-600">
                Note: Click "Edit Profile" before entering your details
              </p>
            </div>


            <form
              onSubmit={handleSubmit}
              className="bg-white border border-purple-400 rounded-lg p-5 mt-5 flex flex-col gap-4"
            >
              <h3 className="text-purple-700 text-xl mb-2">Personal Info</h3>

              <input
                id="full_name"
                type="text"
                placeholder="Enter your full name"
                value={profile.full_name}
                onChange={handleChange}
                readOnly={!isEditable}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              />

              <input
                id="nickname"
                type="text"
                placeholder="Enter your nickname"
                value={profile.nickname}
                onChange={handleChange}
                readOnly={!isEditable}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              />

              <input
                id="gender"
                type="text"
                placeholder="Enter your gender"
                value={profile.gender}
                onChange={handleChange}
                readOnly={!isEditable}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              />

              <input
                id="country"
                type="text"
                placeholder="Enter your country"
                value={profile.country}
                onChange={handleChange}
                readOnly={!isEditable}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              />

              <input
                id="language"
                type="text"
                placeholder="Enter your language"
                value={profile.language}
                onChange={handleChange}
                readOnly={!isEditable}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              />

              <input
                id="time_zone"
                type="text"
                placeholder="Enter your time zone"
                value={profile.time_zone}
                onChange={handleChange}
                readOnly={!isEditable}
                className="p-2 border border-gray-300 rounded focus:outline-none"
              />

              {/* Actions */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
                >
                  Call Support
                </button>
                <button
                  type="submit"
                  className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </>
        )}

        {activePage === "dashboard" && (
          <Dashboard />
        )}
      </main>
    </div>
  );
}
