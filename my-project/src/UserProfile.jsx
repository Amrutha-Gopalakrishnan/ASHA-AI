// import React, { useEffect, useState } from 'react';
// import { supabase } from './supabaseClient';

// const initialState = {
//   full_name: '', nickname: '', gender: '', country: '', language: '', timezone: '',
//   job_title: '', company: '', experience: '', career_objective: '', skill: '', skill_level: '',
//   degree: '', university: '', graduation_year: '', linkedin_url: '', portfolio_url: '',
//   github_url: '', preferred_roles: '', job_types: '', locations: '',
//   resume_url: '', certificate_url: '',
// };

// const UserProfile = () => {
//   const [profile, setProfile] = useState(initialState);
//   const [editMode, setEditMode] = useState(false);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const session = JSON.parse(localStorage.getItem('ashaUser'));
//     if (session?.id) {
//       setUserId(session.id);
//       fetchProfile(session.id);
//     }
//   }, []);

//   const fetchProfile = async (id) => {
//     const { data } = await supabase.from('profiles').select('*').eq('id', id).single();
//     if (data) setProfile(data);
//   };

//   const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

//   const uploadFile = async (file, type) => {
//     const path = `${userId}/${type}-${Date.now()}`;
//     await supabase.storage.from('user-uploads').upload(path, file);
//     const { data } = supabase.storage.from('user-uploads').getPublicUrl(path);
//     return data.publicUrl;
//   };

//   const handleFileChange = async (e, type) => {
//     const file = e.target.files[0];
//     if (file) {
//       const url = await uploadFile(file, type);
//       setProfile(prev => ({ ...prev, [`${type}_url`]: url }));
//     }
//   };

//   const handleSave = async () => {
//     const { error } = await supabase.from('profiles').upsert({ id: userId, ...profile });
//     if (!error) {
//       alert('Profile saved!');
//       setEditMode(false);
//     }
//   };

//   const fields = Object.keys(initialState).filter(f => !f.includes('_url'));

//   return (
//     <div className="flex-1 p-4 space-y-6">
//       {fields.map((field, idx) => (
//         <div key={idx} className="bg-white p-4 rounded shadow">
//           <label className="block font-semibold capitalize">{field.replace(/_/g, ' ')}</label>
//           <input
//             type={field === 'experience' ? 'number' : 'text'}
//             name={field}
//             value={profile[field]}
//             onChange={handleChange}
//             disabled={!editMode}
//             className="w-full border mt-1 p-2 rounded"
//           />
//         </div>
//       ))}

//       <div className="bg-white p-4 rounded shadow">
//         <label>Upload Resume</label>
//         <input type="file" onChange={(e) => handleFileChange(e, 'resume')} disabled={!editMode} />
//         {profile.resume_url && <a href={profile.resume_url} target="_blank" rel="noreferrer">View Resume</a>}
//       </div>

//       <div className="bg-white p-4 rounded shadow">
//         <label>Upload Certificate</label>
//         <input type="file" onChange={(e) => handleFileChange(e, 'certificate')} disabled={!editMode} />
//         {profile.certificate_url && <a href={profile.certificate_url} target="_blank" rel="noreferrer">View Certificate</a>}
//       </div>

//       <div className="flex justify-between items-center bg-white p-4 rounded shadow">
//         <div>
//           <strong>Profile Completion:</strong> 80%
//           <div className="w-full bg-gray-200 h-2 rounded">
//             <div className="bg-purple-600 h-2 rounded w-4/5"></div>
//           </div>
//         </div>
//         <button
//           onClick={editMode ? handleSave : () => setEditMode(true)}
//           className="bg-purple-700 text-white px-6 py-2 rounded"
//         >
//           {editMode ? 'Save Changes' : 'Edit Profile'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


// import React from 'react';

// const SectionCard = ({ title, children }) => (
//     <div className="border border-purple-300 rounded-md p-4 shadow">
//       <h3 className="text-lg font-semibold text-purple-700 mb-2">{title}</h3>
//       {children}
//     </div>
//   );

// const ProfilePage = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 text-sm text-gray-800">

//       {/* Section Card Template */}
      

//       {/* Sections */}
//       <SectionCard title="Personal Info">
//         <p><strong>Name:</strong> Amrutha KG</p>
//         <p><strong>Email:</strong> amrutha@example.com</p>
//         <p><strong>Phone:</strong> +91 9876543210</p>
//         <p><strong>City:</strong> Coimbatore</p>
//         <p><strong>State:</strong> Tamil Nadu</p>
//         <p><strong>Country:</strong> India</p>
//       </SectionCard>

//       <SectionCard title="Career Snapshot">
//         <p><strong>Current Role:</strong> Frontend Developer</p>
//         <p><strong>Experience:</strong> 1 year</p>
//         <p><strong>Interested Roles:</strong> UI Designer, Web Developer</p>
//       </SectionCard>

//       <SectionCard title="Professional Skills">
//         <p><strong>Skills:</strong> React, HTML, CSS, Tailwind, JavaScript</p>
//       </SectionCard>

//       <SectionCard title="Education & Background">
//         <p><strong>Degree:</strong> BSc Computer Science with Data Analytics</p>
//         <p><strong>Institution:</strong> Sri Ramakrishna College of Arts & Science</p>
//         <p><strong>Graduation:</strong> 2026</p>
//       </SectionCard>

//       <SectionCard title="Links & Resume">
//         <p><strong>Portfolio:</strong> <a href="https://amrutha.dev" className="text-blue-600">amrutha.dev</a></p>
//         <p><strong>GitHub:</strong> github.com/amruthakg</p>
//         <p><strong>Resume:</strong> Uploaded</p>
//       </SectionCard>

//       <SectionCard title="Preferences & Alerts">
//         <p><strong>Job Alerts:</strong> Enabled</p>
//         <p><strong>Preferred Location:</strong> Remote / Bangalore</p>
//       </SectionCard>

//       {/* Edit/Save Button */}
//       <div className="flex justify-center gap-4 mt-4">
//         <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">Edit</button>
//         <button className="border border-purple-600 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-50">Save Changes</button>
//       </div>

//       {/* Profile Completion Bar */}
//       <div className="border border-purple-300 rounded-md p-4 shadow mt-6">
//         <h4 className="font-semibold mb-2 text-purple-700">Profile Completion Tracker</h4>
//         <div className="w-full bg-gray-200 rounded-full h-3">
//           <div className="bg-purple-600 h-3 rounded-full" style={{ width: '80%' }}></div>
//         </div>
//         <p className="text-sm text-right text-gray-500 mt-1">Profile Completed: 80%</p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React from 'react';



// const ProfilePage = () => {
//   return (
//     <div className="max-w-screen mx-auto px-4 py-6 space-y-6 text-sm text-gray-800">


//       {/* Personal Info */}
//       <div className="max-w-screen mx-auto mt-6 p-6  rounded-md shadow-sm  bg-white" style={{ border:"2px solid #6c00b2" }}>
//       <h2 className="text-lg font-bold  mb-4" style={{color: "#6c00b2"}}>Personal Info</h2>

//       <div className="space-y-4 text-lg">
//         <div>
//           <label className="block mb-1 font-semibold font-md">Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your full name"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold font-medium">Nickname</label>
//           <input
//             type="text"
//             placeholder="Enter your nickname"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1  font-medium">Gender</label>
//           <input
//             type="text"
//             placeholder="Enter your gender"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1  font-semibold font-medium">Country</label>
//           <input
//             type="text"
//             placeholder="Enter your country"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold font-medium">Language</label>
//           <input
//             type="text"
//             placeholder="Enter your language"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold font-medium">Time Zone</label>
//           <input
//             type="text"
//             placeholder="Enter your time zone"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//       </div>
//     </div>   

// {/* Career Snapshot */}
// <div className="max-w-screen mx-auto mt-6 p-6  rounded-md shadow-sm  bg-white" style={{ border:"2px solid #6c00b2" }}>
//       <h2 className="text-lg font-bold  mb-4" style={{color: "#6c00b2"}}>Career SnapShot</h2>
//       <div className="space-y-4 text-lg">
//         <div>
//           <label className="block mb-1 font-semibold font-md">Job Title</label>
//           <input
//             type="text"
//             placeholder="Enter your job title"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold font-medium">Company</label>
//           <input
//             type="text"
//             placeholder="Enter your company"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1  font-medium">Experience</label>
//           <input
//             type="text"
//             placeholder="Enter your experience in years"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1  font-semibold font-medium">Career Objective</label>
//           <input
//             type="text"
//             placeholder="Enter your career objective"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//       </div> 
//     </div>      


// {/* Skills */}
// <div className="max-w-screen mx-auto mt-6 p-6  rounded-md shadow-sm  bg-white" style={{ border:"2px solid #6c00b2" }}>
//       <h2 className="text-lg font-bold  mb-4" style={{color: "#6c00b2"}}>Professional Skills</h2>
//       <div className="space-y-4 text-lg">
//         <div>
//           <label className="block mb-1 font-semibold font-md">Skills</label>
//           <input
//             type="text"
//             placeholder="Enter your skills"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

        
//             <label className="block mb-1 font-semibold font-md">
//               Skill Level
//             </label>
//             <select
//               className="w-full border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 py-1 bg-transparent"
//               required
//             >
//               <option value="">Beginner</option>
//               <option>Intermediate</option>
//               <option>Advance</option>
              
//             </select>  
//       </div> 
//     </div>      


// {/* Education */}
// <div className="max-w-screen mx-auto mt-6 p-6  rounded-md shadow-sm  bg-white" style={{ border:"2px solid #6c00b2" }}>
//       <h2 className="text-lg font-bold  mb-4" style={{color: "#6c00b2"}}>Education & Background</h2>
//       <div className="space-y-4 text-lg">
//         <div>
//           <label className="block mb-1 font-semibold font-md">Degree</label>
//           <input
//             type="text"
//             placeholder="Enter your degree"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold font-medium">University</label>
//           <input
//             type="text"
//             placeholder="Enter your university"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1  font-medium">Year</label>
//           <input
//             type="text"
//             placeholder="Enter your year of graduation"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//       </div> 
//     </div>      

// {/* Links */}
// <div className="max-w-screen mx-auto mt-6 p-6  rounded-md shadow-sm  bg-white" style={{ border:"2px solid #6c00b2" }}>
//       <h2 className="text-lg font-bold  mb-4" style={{color: "#6c00b2"}}>Links & Resume</h2>
//       <div className="space-y-4 text-lg">
//         <div>
//           <label className="block mb-1 font-semibold font-md">LinkedIn URL</label>
//           <input
//             type="text"
//             placeholder="Enter your LinkedIn URL"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold font-medium">Portfolio URL</label>
//           <input
//             type="text"
//             placeholder="Enter your Portfolio URL"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1  font-medium">GitHub URL</label>
//           <input
//             type="text"
//             placeholder="Enter your GitHub URL"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//       </div> 
//     </div>      


// {/* Alerts */}
// <div className="max-w-screen mx-auto mt-6 p-6  rounded-md shadow-sm  bg-white" style={{ border:"2px solid #6c00b2" }}>
//       <h2 className="text-lg font-bold  mb-4" style={{color: "#6c00b2"}}>Preferences & Alerts</h2>
//       <div className="space-y-4 text-lg">
//         <div>
//           <label className="block mb-1 font-semibold font-md">Preferred Roles</label>
//           <input
//             type="text"
//             placeholder="Enter your preferred Roles"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold font-medium">Job Types</label>
//           <input
//             type="text"
//             placeholder="Enter your job types"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1  font-medium">Locations</label>
//           <input
//             type="text"
//             placeholder="Enter your locations"
//             className="w-full border border-purple-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>
//       </div> 
//     </div>      



      



//     <div className="flex justify-center gap-4 mt-4">
//     <button className="bg-[#8000ff] text-white font-semibold px-4 py-2 rounded hover:bg-[#6b00cc] transition">
//   Edit Changes
// </button>

// <button className="bg-[#8000ff] text-white font-semibold px-4 py-2 rounded hover:bg-[#6b00cc] transition">
//   Save Changes
// </button>
//        </div>

//       {/* Profile Completion */}
//       <div className="border border-purple-300 rounded-md p-4 shadow mt-6">
//         <h4 className="font-semibold mb-2 text-purple-700">Profile Completion Tracker</h4>
//         <div className="w-full bg-gray-200 rounded-full h-3">
//           <div className="bg-purple-600 h-3 rounded-full" style={{ width: '80%' }}></div>
//         </div>
//         <p className="text-sm text-right text-gray-500 mt-1">Profile Completed: 80%</p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;



// import React, { useEffect, useState } from "react";
// import { supabase } from "./supabaseClient"; // your supabase setup
// import { FiMenu } from "react-icons/fi";
// import { Link as ScrollLink } from 'react-scroll'


// const ProfilePage = () => {
//   const [profileData, setProfileData] = useState({
//     full_name: "",
//     nickname: "",
//     gender: "",
//     country: "",
//     language: "",
//     time_zone: "",
//     job_title: "",
//     company: "",
//     experience: "",
//     career_objective: "",
//     skill: "",
//     skill_level: "Beginner",
//     degree: "",
//     university: "",
//     year_of_graduation: "",
//     linkedin_url: "",
//     portfolio_url: "",
//     github_url: "",
//     preferred_roles: "",
//     job_types: "",
//     locations: ""
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const {
//         data: { user }
//       } = await supabase.auth.getUser();
//       setUser(user);

//       if (user) {
//         const { data, error } = await supabase
//           .from("user_profiles")
//           .select("*")
//           .eq("email", user.email)
//           .single();

//         if (data) {
//           setProfileData(data);
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleSaveChanges = async () => {
//     if (!user) return;

//     const { data, error } = await supabase
//       .from("user_profiles")
//       .upsert({ ...profileData, email: user.email });

//     if (!error) {
//       setIsEditing(false);
//       alert("Profile updated successfully!");
//     } else {
//       console.error(error);
//       alert("Failed to update profile.");
//     }
//   };

//   const handleChange = (e) => {
//     setProfileData({ ...profileData, [e.target.name]: e.target.value });
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       {sidebarOpen && (
//         <div className="w-64 bg-purple-800 text-white min-h-screen p-4">
//           <ul>
//              <li className="mb-4" ><a className="text-white" href="#user">User Profile</a></li> 
            
//             <li className="mb-4">Dashboard</li>
//             <li className="mb-4">Home</li>
//           </ul>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//         <button onClick={toggleSidebar} className="text-purple-800">
//             <FiMenu size={30} />
//           </button>
//           <h1 className="text-2xl text-center align-center justify-center font-bold text-purple-800">User Profile</h1>
          
//         </div>

//         {/* Manage Profile */}
//         <div className="border p-6 rounded-md" id="user">
//           <h2 className="text-xl font-semibold text-purple-800 mb-4">
//             Managing your profile details
//           </h2>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="bg-purple-700 text-white px-4 py-2 rounded mb-6"
//           >
//             {isEditing ? "Cancel Changes" : "Edit Profile"}
//           </button>

//           {/* Save Changes Logic */}
//           {isEditing && (
//             <button
//               onClick={handleSaveChanges}
//               className="bg-green-600 text-white px-4 py-2 rounded ml-4"
//             >
//               Save Changes
//             </button>
//           )}

//           {/* Form */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {Object.keys(profileData).map((key, idx) => (
//               <div key={idx}>
//                 <label className="block text-purple-800 font-semibold mb-1">
//                   {key.replace(/_/g, " ").toUpperCase()}
//                 </label>
//                 <input
//                   type="text"
//                   name={key}
//                   value={profileData[key]}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                   className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                   placeholder={`Enter your ${key.replace(/_/g, " ")}`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useEffect, useState } from "react";
// import { supabase } from "./supabaseClient";
// import { FiMenu } from "react-icons/fi";

// const UserProfile = () => {
//   const [profileData, setProfileData] = useState({
//     full_name: "",
//     nickname: "",
//     gender: "",
//     country: "",
//     language: "",
//     time_zone: "",
//     job_title: "",
//     company: "",
//     experience: "",
//     career_objective: "",
//     skill: "",
//     skill_level: "Beginner",
//     degree: "",
//     university: "",
//     year_of_graduation: "",
//     linkedin_url: "",
//     portfolio_url: "",
//     github_url: "",
//     preferred_roles: "",
//     job_types: "",
//     locations: ""
//   });

//   const [originalData, setOriginalData] = useState({}); // for cancel button
//   const [isEditing, setIsEditing] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar hidden initially
//   const [user, setUser] = useState(null);
//   const [activePage, setActivePage] = useState("profile"); // to toggle pages

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const {
//         data: { user }
//       } = await supabase.auth.getUser();
//       setUser(user);

//       if (user) {
//         const { data, error } = await supabase
//           .from("user_profiles")
//           .select("*")
//           .eq("email", user.email)
//           .single();

//         if (data) {
//           setProfileData(data);
//           setOriginalData(data); // store original data
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleSaveChanges = async () => {
//     if (!user) return;

//     const { data, error } = await supabase
//       .from("user_profiles")
//       .upsert({ ...profileData, email: user.email });

//     if (!error) {
//       setOriginalData(profileData); // update original after saving
//       setIsEditing(false);
//       alert("Profile updated successfully!");
//     } else {
//       console.error(error);
//       alert("Failed to update profile.");
//     }
//   };

//   const handleCancelChanges = () => {
//     setProfileData(originalData); // revert to original data
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setProfileData({ ...profileData, [e.target.name]: e.target.value });
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const switchPage = (page) => {
//     setActivePage(page);
//     setSidebarOpen(false); // close sidebar after navigation
//     setIsEditing(false); // if editing, disable it when changing pages
//   };

//   return (
//     <div className="flex min-h-screen">
      
//       {/* Sidebar */}
//       <div className="flex flex-col bg-purple-800 text-white">
//         <button
//           onClick={toggleSidebar}
//           className="p-4 focus:outline-none"
//         >
//           <FiMenu size={30} />
//         </button>

//         {sidebarOpen && (
//           <div className="w-64 p-6">
//             <ul>
//               <li className="mb-6 cursor-pointer hover:underline" onClick={() => switchPage("profile")}>
//                 User Profile
//               </li>
//               <li className="mb-6 cursor-pointer hover:underline" onClick={() => switchPage("dashboard")}>
//                 Dashboard
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Navbar */}
//         <div className="flex justify-center items-center mb-8">
//           <h1 className="text-3xl font-bold text-purple-800">
//             {activePage === "profile" ? "User Profile" : "Dashboard"}
//           </h1>
//         </div>

//         {/* Pages */}
//         {activePage === "profile" && (
//           <div className="border p-6 rounded-md" id="user">
//             <h2 className="text-xl font-semibold text-purple-800 mb-6">
//               Manage your profile details
//             </h2>

//             {!isEditing && (
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="bg-purple-700 text-white px-4 py-2 rounded mb-6"
//               >
//                 Edit Profile
//               </button>
//             )}

//             {isEditing && (
//               <div className="flex gap-4 mb-6">
//                 <button
//                   onClick={handleSaveChanges}
//                   className="bg-green-600 text-white px-4 py-2 rounded"
//                 >
//                   Save Changes
//                 </button>
//                 <button
//                   onClick={handleCancelChanges}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             )}

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {Object.keys(profileData).map((key, idx) => (
//                 <div key={idx}>
//                   <label className="block text-purple-800 font-semibold mb-1">
//                     {key.replace(/_/g, " ").toUpperCase()}
//                   </label>
//                   <input
//                     type="text"
//                     name={key}
//                     value={profileData[key]}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     placeholder={`Enter your ${key.replace(/_/g, " ")}`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activePage === "dashboard" && (
//           <div className="border p-6 rounded-md">
//             <h2 className="text-2xl font-bold text-purple-800">Welcome to the Dashboard</h2>
//             <p className="mt-4 text-gray-700">Dashboard content coming soon...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


// import React, { useEffect, useState } from "react";
// import { supabase } from "./supabaseClient";
// import { FiMenu } from "react-icons/fi";

// const ProfilePage = () => {
//   const [profileData, setProfileData] = useState({
//     full_name: "",
//     nickname: "",
//     gender: "",
//     country: "",
//     language: "",
//     time_zone: "",
//     job_title: "",
//     company: "",
//     experience: "",
//     career_objective: "",
//     skill: "",
//     skill_level: "Beginner",
//     degree: "",
//     university: "",
//     year_of_graduation: "",
//     linkedin_url: "",
//     portfolio_url: "",
//     github_url: "",
//     preferred_roles: "",
//     job_types: "",
//     locations: ""
//   });

//   const [originalData, setOriginalData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [activePage, setActivePage] = useState("profile");

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       setUser(user);

//       if (user) {
//         const { data, error } = await supabase
//           .from("user_profiles")
//           .select("*")
//           .eq("email", user.email)
//           .single();

//         if (data) {
//           setProfileData(data);
//           setOriginalData(data); // Save original fetched data
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleSaveChanges = async () => {
//     if (!user) return;

//     const { error } = await supabase
//       .from("user_profiles")
//       .upsert({ ...profileData, email: user.email });

//     if (!error) {
//       setOriginalData(profileData); // Update original data after save
//       setIsEditing(false);
//       alert("Profile updated successfully!");
//     } else {
//       console.error(error);
//       alert("Failed to update profile.");
//     }
//   };

//   const handleCancelChanges = () => {
//     setProfileData(originalData); // Reset to original data
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setProfileData({ ...profileData, [e.target.name]: e.target.value });
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const switchPage = (page) => {
//     setActivePage(page);
//     setSidebarOpen(false);
//     setIsEditing(false);
//   };

//   return (
//     <div className="flex min-h-screen">
      
//       {/* Sidebar */}
//       <div className="flex flex-col bg-purple-800 text-white">
//         <button
//           onClick={toggleSidebar}
//           className="p-4 focus:outline-none"
//         >
//           <FiMenu size={30} />
//         </button>

//         {sidebarOpen && (
//           <div className="w-64 p-6">
//             <ul>
//               <li className="mb-6 cursor-pointer hover:underline" onClick={() => switchPage("profile")}>
//                 User Profile
//               </li>
//               <li className="mb-6 cursor-pointer hover:underline" onClick={() => switchPage("dashboard")}>
//                 Dashboard
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Navbar */}
//         <div className="flex justify-center items-center mb-8">
//           <h1 className="text-3xl font-bold text-purple-800">
//             {activePage === "profile" ? "User Profile" : "Dashboard"}
//           </h1>
//         </div>

//         {/* Pages */}
//         {activePage === "profile" && (
//           <div className="border p-6 rounded-md" id="user">
//             <h2 className="text-xl font-semibold text-purple-800 mb-6">
//               Manage your profile details
//             </h2>

//             {/* Edit/Save/Cancel buttons */}
//             <div className="flex gap-4 mb-6">
//               {!isEditing ? (
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="bg-purple-700 text-white px-4 py-2 rounded"
//                 >
//                   Edit Profile
//                 </button>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleSaveChanges}
//                     className="bg-green-600 text-white px-4 py-2 rounded"
//                   >
//                     Save Changes
//                   </button>
//                   <button
//                     onClick={handleCancelChanges}
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     Cancel
//                   </button>
//                 </>
//               )}
//             </div>

//             {/* Profile Form */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {Object.keys(profileData).map((key, idx) => (
//                 <div key={idx}>
//                   <label className="block text-purple-800 font-semibold mb-1">
//                     {key.replace(/_/g, " ").toUpperCase()}
//                   </label>
//                   <input
//                     type="text"
//                     name={key}
//                     value={profileData[key] || ""}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     placeholder={`Enter your ${key.replace(/_/g, " ")}`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activePage === "dashboard" && (
//           <div className="border p-6 rounded-md">
//             <h2 className="text-2xl font-bold text-purple-800">Welcome to the Dashboard</h2>
//             <p className="mt-4 text-gray-700">Dashboard content coming soon...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useEffect, useState } from "react";
// import { supabase } from "./supabaseClient";
// import { FiMenu } from "react-icons/fi";

// const ProfilePage = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [editedData, setEditedData] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activePage, setActivePage] = useState("profile");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       setUser(user);
//       if (user) {
//         const { data, error } = await supabase
//           .from("profiles")
//           .select("*")
//           .eq("email", user.email)
//           .single();

//         if (data) {
//           setProfileData(data);
//           setEditedData(data); // also keep editable copy
//         }
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCancelClick = () => {
//     setEditedData(profileData); // revert back to saved data
//     setIsEditing(false);
//   };

//   const handleSaveClick = async () => {
//     if (!user) return;

//     const { error } = await supabase
//       .from("profiles")
//       .upsert({ ...editedData, email: user.email });

//     if (!error) {
//       setProfileData(editedData); // now edited becomes saved
//       setIsEditing(false);
//       alert("Profile updated successfully!");
//     } else {
//       console.error(error);
//       alert("Failed to update profile.");
//     }
//   };

//   const handleChange = (e) => {
//     setEditedData({ ...editedData, [e.target.name]: e.target.value });
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const switchPage = (page) => {
//     setActivePage(page);
//     setSidebarOpen(false);
//     setIsEditing(false);
//   };

//   if (!profileData) {
//     return <div className="p-8">Loading profile...</div>;
//   }

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className="flex flex-col bg-purple-800 text-white">
//         <button
//           onClick={toggleSidebar}
//           className="p-4 focus:outline-none"
//         >
//           <FiMenu size={30} />
//         </button>

//         {sidebarOpen && (
//           <div className="w-64 p-6">
//             <ul>
//               <li
//                 className="mb-6 cursor-pointer hover:underline"
//                 onClick={() => switchPage("profile")}
//               >
//                 User Profile
//               </li>
//               <li
//                 className="mb-6 cursor-pointer hover:underline"
//                 onClick={() => switchPage("dashboard")}
//               >
//                 Dashboard
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Navbar */}
//         <div className="flex justify-center items-center mb-8">
//           <h1 className="text-3xl font-bold text-purple-800">
//             {activePage === "profile" ? "User Profile" : "Dashboard"}
//           </h1>
//         </div>

//         {/* Pages */}
//         {activePage === "profile" && (
//           <div className="border p-6 rounded-md" id="user">
//             <h2 className="text-xl font-semibold text-purple-800 mb-6">
//               Manage your profile details
//             </h2>

//             {/* Edit/Save/Cancel buttons */}
//             <div className="flex gap-4 mb-6">
//               {!isEditing ? (
//                 <button
//                   onClick={handleEditClick}
//                   className="bg-purple-700 text-white px-4 py-2 rounded"
//                 >
//                   Edit Profile
//                 </button>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleSaveClick}
//                     className="bg-green-600 text-white px-4 py-2 rounded"
//                   >
//                     Save Changes
//                   </button>
//                   <button
//                     onClick={handleCancelClick}
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     Cancel
//                   </button>
//                 </>
//               )}
//             </div>

//             {/* Profile Form */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {Object.entries(editedData).map(([key, value]) => (
//                 key !== "email" && ( // Hide email field if needed
//                   <div key={key}>
//                     <label className="block text-purple-800 font-semibold mb-1">
//                       {key.replace(/_/g, " ").toUpperCase()}
//                     </label>
//                     <input
//                       type="text"
//                       name={key}
//                       value={value || ""}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                       className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
//                       placeholder={`Enter ${key.replace(/_/g, " ")}`}
//                     />
//                   </div>
//                 )
//               ))}
//             </div>
//           </div>
//         )}

//         {activePage === "dashboard" && (
//           <div className="border p-6 rounded-md">
//             <h2 className="text-2xl font-bold text-purple-800">Welcome to the Dashboard</h2>
//             <p className="mt-4 text-gray-700">Dashboard content coming soon...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useState, useEffect } from 'react';
// import { supabase } from './supabaseClient';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [profile, setProfile] = useState({
//     full_name: '',
//     nickname: '',
//     gender: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data: { user }, error: userError } = await supabase.auth.getUser();
//       if (userError) {
//         console.error('User fetch error:', userError);
//         setLoading(false);
//         return;
//       }
//       setUser(user);

//       if (user) {
//         const { data, error } = await supabase
//           .from('profiles')
//           .select('*')
//           .eq('email', user.email)
//           .single();

//         if (error) {
//           console.log('Profile not found, creating new.');
//         } else {
//           setProfile(data);
//         }
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//   };

//   const handleSave = async () => {
//     if (!user) return;

//     const updates = {
//       ...profile,
//       email: user.email,  // Ensure email is saved
//     };

//     const { error } = await supabase
//       .from('profiles')
//       .upsert(updates);

//     if (error) {
//       alert('Error saving profile.');
//       console.error(error);
//     } else {
//       alert('Profile saved successfully!');
//       setIsEditing(false);
//     }
//   };

//   if (loading) {
//     return <div className="p-8">Loading profile...</div>;
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6 text-purple-700">Manage Profile</h1>

//       <div className="flex flex-col space-y-4">
//         <div>
//           <label className="font-semibold text-purple-700">Full Name</label>
//           <input
//             type="text"
//             name="full_name"
//             value={profile.full_name}
//             onChange={handleChange}
//             disabled={!isEditing}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="font-semibold text-purple-700">Nickname</label>
//           <input
//             type="text"
//             name="nickname"
//             value={profile.nickname}
//             onChange={handleChange}
//             disabled={!isEditing}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="font-semibold text-purple-700">Gender</label>
//           <input
//             type="text"
//             name="gender"
//             value={profile.gender}
//             onChange={handleChange}
//             disabled={!isEditing}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {!isEditing ? (
//           <button
//             onClick={handleEdit}
//             className="bg-purple-700 text-white px-4 py-2 rounded w-40"
//           >
//             Edit Profile
//           </button>
//         ) : (
//           <div className="flex gap-4">
//             <button
//               onClick={handleSave}
//               className="bg-green-600 text-white px-4 py-2 rounded w-40"
//             >
//               Save Changes
//             </button>
//             <button
//               onClick={handleCancel}
//               className="bg-red-500 text-white px-4 py-2 rounded w-40"
//             >
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { FiMenu } from "react-icons/fi";

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
    locations: "",
    resume_url: "",          
    certificate_url: "" 
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

//   const handleSaveChanges = async () => {
//     if (!user) return;

//     const { error } = await supabase
//       .from("profiles")
//       .upsert({ ...profileData, email: user.email });

//     if (!error) {
//       setOriginalData(profileData); // Update original data after save
//       setIsEditing(false);
//       alert("Profile updated successfully!");
//     } else {
//       console.error(error);
//       alert("Failed to update profile.");
//     }
//   };

const handleSaveChanges = async () => {
    if (!user) return;
  
    const updatedProfile = {
      ...profileData,
      id: user.id,
    };
  
    const { data, error } = await supabase
      .from("profiles")
      .upsert(updatedProfile, { onConflict: ["id"] }); // this tells Supabase to use 'email' as unique key
  
    if (error) {
      console.error("Error saving profile:", error);
      alert("Failed to update profile.");
    } else {
      setOriginalData(profileData); // save original
      setIsEditing(false);
      alert("Profile updated successfully!");
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
    <div className="flex min-h-screen">
      
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
      <div className="flex-1 p-6 ">
       
        {/* Navbar */}
        <nav>
        <div className="flex justify-center items-center mb-8 ">
          <h1 className="text-3xl font-bold text-purple-800">
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
          <div className="border p-6 rounded-md">
            <h2 className="text-2xl font-bold text-purple-800">Welcome to the Dashboard</h2>
            <p className="mt-4 text-gray-700">Dashboard content coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
