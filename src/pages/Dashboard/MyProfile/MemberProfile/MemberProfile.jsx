import React from "react";
import { FiCalendar, FiGrid, FiHash, FiLayers } from "react-icons/fi";

const UserProfile = ({ agreement }) => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white/20 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl p-8 sm:p-12 space-y-8 text-black">

        {/* Apartment & Agreement Info */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white/10 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <FiCalendar /> Agreement Accepted On
            </p>
            <p className="font-semibold text-lg text-gray-900">
              {agreement?.acceptedDate
                ? new Date(agreement.acceptedDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : "N/A"}
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <FiGrid /> Floor No
            </p>
            <p className="font-semibold text-lg text-gray-900">{agreement?.floorNo || "N/A"}</p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <FiLayers /> Block Name
            </p>
            <p className="font-semibold text-lg text-gray-900">{agreement?.blockName || "N/A"}</p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <FiHash /> Apartment No
            </p>
            <p className="font-semibold text-lg text-gray-900">{agreement?.apartmentNo || "N/A"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
