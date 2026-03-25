import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCar,
  FaClipboardList,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`fixed md:relative top-0 left-0 h-full w-[300px] bg-gray-900 text-white z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <ul className="p-4 space-y-4 mt-10">

          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <FaHome />
              Dashboard
            </Link>
          </li>

          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/admin/cars" className="flex items-center gap-3">
              <FaCar />
              Cars
            </Link>
          </li>

          <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <FaClipboardList />
            Bookings
          </li>

        </ul>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed md:hidden top-40 z-50 
        bg-black text-white py-5 px-2 rounded-r-full
        ${isOpen ? "left-[300px]" : "left-0"}`}
      >
        {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SideBar;