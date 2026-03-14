import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[380px]">

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Forgot Password
        </h2>

        <p className="text-gray-400 text-sm mb-4 text-center">
          Enter your email to reset your password
        </p>

        <form className="space-y-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold">
            Send Reset Link
          </button>

        </form>

        <p className="text-gray-400 text-center mt-5 text-sm">
          <Link to="/login" className="text-green-400 hover:underline">
            Back to Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default ForgotPassword;