import React from "react";
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiGrid,
  FiHash,
  FiLayers,
} from "react-icons/fi";

const UserProfile = ({ user }) => {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <div className="bg-[#161B22]/60 border border-[#30363D] rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-lg space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-blue-600 shadow-md"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] flex items-center gap-2">
             {user?.displayName || "Unknown User"}
            </h2>
            <p className="text-[#9CA3AF] flex items-center gap-2">
              <FiMail className="text-blue-400" /> {user?.email || "No email provided"}
            </p>
          </div>
        </div>

        <hr className="border-[#30363D]" />

        {/* Apartment & Agreement Info */}
        <div className="grid gap-4 sm:grid-cols-2 text-[#F3F4F6]">
          <div>
            <p className="text-sm text-[#9CA3AF] mb-1 flex items-center gap-2">
              <FiCalendar /> Agreement Accepted On
            </p>
            <p className="font-medium text-lg">None</p>
          </div>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-1 flex items-center gap-2">
              <FiGrid /> Floor No
            </p>
            <p className="font-medium text-lg">None</p>
          </div>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-1 flex items-center gap-2">
              <FiLayers /> Block Name
            </p>
            <p className="font-medium text-lg">None</p>
          </div>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-1 flex items-center gap-2">
              <FiHash /> Apartment No
            </p>
            <p className="font-medium text-lg">None</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
