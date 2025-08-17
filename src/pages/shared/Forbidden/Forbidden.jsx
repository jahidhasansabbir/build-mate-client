import React from 'react';
import { Link } from 'react-router';
import { MdBlock } from 'react-icons/md';

const Forbidden = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4 text-gray-800">
      
      {/* Icon */}
      <div className="w-24 h-24 flex items-center justify-center bg-indigo-100 rounded-full mb-6 animate-pulse shadow-lg">
        <MdBlock className="text-indigo-600 text-7xl" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
        403 Forbidden
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-lg">
        You don’t have permission to access this page. Please contact the administrator if you believe this is an error.
      </p>

      {/* Action Button */}
      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl text-base font-semibold shadow-lg hover:from-indigo-700 hover:to-blue-600 transition transform hover:-translate-y-1 hover:scale-105"
      >
        Go Back Home
      </Link>

      {/* Footer */}
      <div className="mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} BuildMate. All rights reserved.
      </div>
    </div>
  );
};

export default Forbidden;
