import React from "react";
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiGrid,
  FiHash,
  FiLayers,
} from "react-icons/fi";

const UserProfile = ({ user, agreement }) => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <div className="bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md p-6 sm:p-10 space-y-6 text-black">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-gray-100"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-black flex items-center gap-2">
              {user?.displayName || "Unknown User"}
            </h2>
            <p className="text-gray-600 flex items-center gap-2 mt-1">
              <FiMail className="text-green-400" />
              {user?.email || "No email provided"}
            </p>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Apartment & Agreement Info */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
              <FiCalendar /> Agreement Accepted On
            </p>
            <p className="font-semibold text-lg text-black">
              {agreement?.acceptedDate || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
              <FiGrid /> Floor No
            </p>
            <p className="font-semibold text-lg text-black">
              {agreement?.floorNo || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
              <FiLayers /> Block Name
            </p>
            <p className="font-semibold text-lg text-black">
              {agreement?.blockName || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
              <FiHash /> Apartment No
            </p>
            <p className="font-semibold text-lg text-black">
              {agreement?.apartmentNo || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
