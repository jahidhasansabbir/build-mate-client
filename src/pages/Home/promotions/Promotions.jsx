// src/components/Home/Promotions.jsx
import React from "react";
import { FaGift, FaTags, FaPercentage } from "react-icons/fa";

const promotionsData = [
  {
    title: "Announcements & Alerts",
    description:
      "Get notifications about maintenance, repairs, and urgent alerts to stay informed and safe.",
    icon: FaPercentage,
  },
  {
    title: "Community Events",
    description:
      "Join building activities and workshops to meet neighbors and build a stronger community.",
    icon: FaGift,
  },
  {
    title: "Facility Updates",
    description:
      "Learn about facility improvements and upgrades, with guidance on safe usage and access.",
    icon: FaTags,
  },
];

const Promotions = () => {
  return (
    <section className="text-gray-900">
      <div className="bg-white bg-opacity-70 backdrop-blur-sm border border-gray-200 rounded-lg p-8 shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-500 text-center mb-4">
          Resident Perks
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-center mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          Discover the special features, updates, and benefits designed to make your living experience safer, easier, and more enjoyable.
        </p>

        {/* Promotion Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {promotionsData.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <div
                key={index}
                className="bg-indigo-50 bg-opacity-50 backdrop-blur-sm border border-indigo-200 rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="text-indigo-600 text-4xl mb-3" />
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{promo.description}</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/terms-and-conditions"
                  className="mt-4 text-center bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-800 transition w-full"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
