import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-200">
        
        {/* Icon */}
        <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-red-100 mb-6 animate-pulse">
          <FaExclamationTriangle className="text-6xl text-red-500" />
        </div>

        {/* Headings */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8 text-sm md:text-base">
          The page you are looking for might have been removed, renamed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:from-indigo-700 hover:to-blue-600 transition transform hover:-translate-y-1 hover:scale-105"
        >
          Go Back Home
        </Link>

        {/* Footer */}
        <div className="mt-10 text-gray-400 text-sm">
          © {new Date().getFullYear()} BuildMate. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Error404;
