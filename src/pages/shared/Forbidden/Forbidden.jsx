import React from 'react';
import { Link } from 'react-router';
import { MdBlock } from 'react-icons/md';

const Forbidden = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 text-gray-800">
      <MdBlock className="text-indigo-500 text-7xl mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">403 Forbidden</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-xl">
        You don’t have permission to access this page. Please contact the administrator if you believe this is an error.
      </p>
      <Link
        to="/"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm md:text-base transition duration-200 shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Forbidden;
