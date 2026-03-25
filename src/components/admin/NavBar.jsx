import React from "react";
import { FaUserCircle, FaBell, FaSearch, FaBars } from "react-icons/fa";

const NavBar = ({ setIsOpen }) => {
  return (
    <div className="h-16 w-full bg-white shadow flex items-center justify-between px-4">

      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden"
        >
          <FaBars />
        </button>

        <h1 className="text-xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-lg w-1/3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none h-8 w-full text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <div className="relative cursor-pointer">
          <FaBell size={18} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={24} />
          <span className="hidden sm:block">Admin</span>
        </div>

      </div>
    </div>
  );
};

export default NavBar;