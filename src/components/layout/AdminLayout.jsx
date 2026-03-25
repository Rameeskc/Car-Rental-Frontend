import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../admin/SideBar";
import NavBar from "../admin/NavBar";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <NavBar setIsOpen={setIsOpen} />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;