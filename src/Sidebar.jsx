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


