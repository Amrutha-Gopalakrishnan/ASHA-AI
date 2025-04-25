// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} bg-[#8B5FCF] text-white min-h-screen p-4`}>
//       <button onClick={() => setIsOpen(!isOpen)} className="mb-6">
//         ☰
//       </button>
//       <h1 className="text-xl font-bold mb-4">{isOpen ? 'Asha AI Dashboard' : 'AI'}</h1>
//       <div className="space-y-4">
//         <Link to="/" className="bg-white text-black px-4 py-2 rounded-full block text-center">👤 {isOpen && 'Profile'}</Link>
//         <Link to="/dashboard" className="bg-white text-black px-4 py-2 rounded-full block text-center">📊 {isOpen && 'Dashboard'}</Link>
//         <Link to="/chatbot" className="bg-white text-black px-4 py-2 rounded-full block text-center">💬 {isOpen && 'Chatbot'}</Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // hamburger icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-purple-700 min-h-screen p-4 text-white flex flex-col">
      {/* Hamburger Menu */}
      <div className="flex items-center justify-between">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </button>
        <h1 className="text-xl font-bold text-center flex-1 mr-6">User Profile</h1>
      </div>

      {/* Sidebar Links */}
      {isOpen && (
        <div className="mt-10 flex flex-col space-y-4">
          <Link to="/profile" className="hover:bg-purple-500 p-2 rounded">User Profile</Link>
          <Link to="/dashboard" className="hover:bg-purple-500 p-2 rounded">Dashboard</Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;


