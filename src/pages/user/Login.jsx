import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[380px]">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <form className="space-y-4">

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            <Link to="/forgot" className="hover:text-green-400">
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold transition">
            Login
          </button>

        </form>

        <p className="text-gray-400 text-center mt-5 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;