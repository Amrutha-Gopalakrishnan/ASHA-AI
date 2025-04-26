import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { FiMenu } from "react-icons/fi";
import Dashboard from "./Dashboard";

const ProfilePage = () => {
  const initialProfileData = {
    email:"",
    full_name: "",
    nickname: "",
    gender: "",
    country: "",
    language: "",
    time_zone: "",
    job_title: "",
    company: "",
    experience: "",
    career_objective: "",
    skill: "",
    skill_level: "Beginner",
    degree: "",
    university: "",
    year_of_graduation: "",
    linkedin_url: "",
    portfolio_url: "",
    github_url: "",
    preferred_roles: "",
    job_types: "",
    locations: ""
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [originalData, setOriginalData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("profile");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { 
        data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (data) {
          setProfileData({ ...initialProfileData, ...data });
          setOriginalData({ ...initialProfileData, ...data });
        }
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, []);


const handleSaveChanges = async () => {
    if (!user) {
      alert("No user found. Are you logged in?");
      return;
    }
  
    const updatedProfile = {
      ...profileData,
      id: user.id,
      email: user.email,
    };
  
    const { error } = await supabase
      .from("profiles")
      .upsert(updatedProfile, { onConflict: ["id"] });
  
    if (error) {
      console.error("Error saving profile:", error.message);
      alert("Failed to save profile.");
    } else {
      setOriginalData(updatedProfile);
      setIsEditing(false);
      alert("Profile saved successfully!");
    }
  };
  


  const handleCancelChanges = () => {
    setProfileData(originalData); // Reset to original data
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const switchPage = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
    setIsEditing(false);
    setProfileData(originalData); // Reset to original when switching page
  };

  

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen ">
      
      {/* Sidebar */}
      <div className="flex flex-col bg-purple-800 text-white">
        <button
          onClick={toggleSidebar}
          className="p-4 focus:outline-none"
        >
          <FiMenu size={30} />
        </button>

        {sidebarOpen && (
          <div className="w-64 p-6">
            <ul>
              <li className="mb-6 cursor-pointer hover:underline" onClick={() => switchPage("profile")}>
                User Profile
              </li>
              <li className="mb-6 cursor-pointer hover:underline" onClick={() => switchPage("dashboard")}>
                Dashboard
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1">
       
        {/* Navbar */}
        <nav className="bg-purple-800 ">
        <div className="flex justify-center items-center mb-8  ">
          <h1 className="text-3xl font-bold " style={{color:"white"}}>
            {activePage === "profile" ? "User Profile" : "Dashboard"}
          </h1>
        </div>
        </nav>
       

        {/* Pages */}
        {activePage === "profile" && (
          <div className="border p-6 rounded-md" id="user">
            <h2 className="text-xl font-semibold text-purple-800 mb-8 text-center">
              Manage your profile details
            </h2>

            {/* Edit/Save/Cancel buttons */}
            <div className="flex gap-4 mb-6 mt-3 justify-center">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-purple-700 text-white px-4 py-2 rounded"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSaveChanges}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancelChanges}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
            
            <div className="flex align-center justify-center">
                <p className=" card w-120  text-center">Note: Click Edit Profile before entering your details</p>
             </div>

           

            {/* Profile Form */}
            <div className="row gap-4 mt-5">
              {Object.keys(initialProfileData).map((key, idx) => (
              
                  
                <div key={idx}>
                  <label className="block text-purple-800 font-semibold mb-1">
                    {key.replace(/_/g, " ").toUpperCase()}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={profileData[key] || ""}
                    onChange={handleChange}
                    disabled={!isEditing }
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder={`Enter your ${key.replace(/_/g, " ")}`}
                  />
                </div> 
                  
              ))}
            </div>

            
          </div>
        )}


        {activePage === "dashboard" && (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;






