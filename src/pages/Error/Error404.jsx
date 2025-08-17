
import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl shadow-xl p-8 md:p-16">
        <FaExclamationTriangle className="mx-auto text-6xl text-red-500 animate-bounce mb-6" />
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
        >
          Go Back Home
        </Link>
        <div className="mt-10 text-gray-400 text-sm">
          © {new Date().getFullYear()} BuildMate. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Error404;
