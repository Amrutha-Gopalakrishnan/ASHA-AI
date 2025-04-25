// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaUser, FaTachometerAlt, FaRobot } from 'react-icons/fa';
// import UserProfile from './UserProfile';

// const Dashboard = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full bg-[#8000ff] text-white z-40 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0 w-48' : '-translate-x-full w-0'} md:translate-x-0 md:w-48`}>
//         <div className="p-4 space-y-6 pt-16">
//           <button className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full w-full justify-center">
//             <FaUser /> Profile
//           </button>
//           <button className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full w-full justify-center">
//             <FaTachometerAlt /> Dashboard
//           </button>
//           <button className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full w-full justify-center">
//             <FaRobot /> Chatbot
//           </button>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="flex-1 flex flex-col ml-0 md:ml-48">
//         {/* Navbar */}
//         <nav className="bg-[#8000ff] text-white p-4 flex items-center justify-between shadow-md z-30 sticky top-0">
//           <div className="flex items-center gap-4">
//             <button
//               className="text-white text-xl md:hidden"
//               onClick={() => setSidebarOpen(!isSidebarOpen)}
//             >
//               {isSidebarOpen ? <FaTimes /> : <FaBars />}
//             </button>
//             <h1 className="text-lg font-semibold">Asha AI Dashboard</h1>
//           </div>
//         </nav>

//         {/* Welcome Header */}
//         <div className="bg-[#8000ff] text-white px-6 py-4 shadow-sm">
//           <h2 className="text-xl font-bold">Welcome to your personal career cockpit</h2>
//           <p className="text-sm">User’s Name | Career Enthusiast</p>
//         </div>

//         {/* User Profile Content */}
//         <main className="p-4 overflow-y-auto">
//           <UserProfile />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react'

export const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard

