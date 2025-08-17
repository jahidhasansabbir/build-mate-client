// src/components/Home/HowItWorks.jsx
import React from "react";
import { FaHome, FaCreditCard, FaBullhorn } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-8 text-gray-900 shadow-lg">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-500 mb-8 text-center">
        How It Works
      </h2>

      {/* Steps */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Step 1 */}
        <div className="bg-indigo-50/50 backdrop-blur-sm border border-indigo-200 rounded-lg p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg">
          <FaHome className="text-4xl text-indigo-600 mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
            Find Apartment
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Browse available apartments and choose the one that fits your needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-indigo-50/50 backdrop-blur-sm border border-indigo-200 rounded-lg p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg">
          <FaCreditCard className="text-4xl text-indigo-600 mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
            Make Payment
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Pay your rent or membership securely through our payment system.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-indigo-50/50 backdrop-blur-sm border border-indigo-200 rounded-lg p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg">
          <FaBullhorn className="text-4xl text-indigo-600 mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
            View Announcements
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Stay updated with the latest building notices and announcements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
