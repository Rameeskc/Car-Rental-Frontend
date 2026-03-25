import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "../components/layout/AdminLayout";

// Pages
import Dashboard from "../pages/admin/Dashboard";
import Home from "../pages/admin/Home";
import AdminCars from "../pages/admin/AdminCars";
import AddCar from "../pages/admin/AddCar";
import EditCar from "../pages/admin/Editcar";

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>

        {/* ✅ Default Page */}
        <Route index element={<Dashboard />} />

        {/* Other Pages */}
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* 🚗 Cars Routes */}
        <Route path="cars" element={<AdminCars />} />
        <Route path="cars/add" element={<AddCar />} />
        <Route path="cars/edit/:id" element={<EditCar />} />

      </Route>
    </Routes>
  );
};

export default Admin;