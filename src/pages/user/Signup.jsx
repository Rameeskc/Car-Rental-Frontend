import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[380px]">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold transition">
            Sign Up
          </button>

        </form>

        <p className="text-gray-400 text-center mt-5 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Signup;