import React from "react";
import { FiCalendar, FiGrid, FiHash, FiLayers } from "react-icons/fi";

const UserProfile = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white/20 backdrop-blur-md border border-gray-200 rounded-lg p-8 sm:p-12 space-y-8 text-black">

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Agreement Information
        </h2>

        {/* Apartment & Agreement Info */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Agreement Date */}
          <div className="bg-white/10 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <FiCalendar className="text-indigo-500" /> Agreement Accepted On
            </p>
            <p className="font-semibold text-lg text-gray-900">None</p>
          </div>

          {/* Floor Number */}
          <div className="bg-white/10 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <FiGrid className="text-indigo-500" /> Floor No
            </p>
            <p className="font-semibold text-lg text-gray-900">None</p>
          </div>

          {/* Block Name */}
          <div className="bg-white/10 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <FiLayers className="text-indigo-500" /> Block Name
            </p>
            <p className="font-semibold text-lg text-gray-900">None</p>
          </div>

          {/* Apartment Number */}
          <div className="bg-white/10 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <FiHash className="text-indigo-500" /> Apartment No
            </p>
            <p className="font-semibold text-lg text-gray-900">None</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
