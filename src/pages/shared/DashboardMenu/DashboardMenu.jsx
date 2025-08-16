import React from "react";
import { NavLink } from "react-router";
import {
  FiHome,
  FiDollarSign,
  FiUserPlus,
  FiSearch,
  FiList,
  FiUsers,
} from "react-icons/fi";
import {
  MdPayment,
  MdHistory,
  MdCampaign,
  MdAnnouncement,
  MdOutlineRequestPage,
  MdLocalOffer,
  MdAdminPanelSettings,
} from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const DashboardMenu = () => {
  const {user}=useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role, } = useQuery({
      enabled: !!user.accessToken,
      queryKey: ['role', user?.email],
      queryFn: async () => {
        const res = await axiosSecure(`/role/${user?.email}`);
        return res.data;
      },
    });
  return (
    <ul className="space-y-1">
      <li>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2 ${
              isActive
                ? "bg-indigo-300"
                : "text-indigo-950 hover:bg-indigo-200 transition"
            }`
          }
        >
          <FiHome className="text-lg" />{" "}
          {role === "admin" ? "Admin Profile" : "My Profile"}
        </NavLink>
      </li>

      {role === "member" && (
        <>
          <li>
            <NavLink
              to="/dashboard/make-payment"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 ${
                  isActive
                    ? "bg-indigo-300"
                    : "text-indigo-950 hover:bg-indigo-200 transition"
                }`
              }
            >
              <MdPayment className="text-lg" /> Make Payment
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/payment-history"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 ${
                  isActive
                    ? "bg-indigo-300"
                    : "text-indigo-950 hover:bg-indigo-200 transition"
                }`
              }
            >
              <MdHistory className="text-lg" /> Payment History
            </NavLink>
          </li>
        </>
      )}


      {role === "admin" && (
        <>
          <li>
            <NavLink
              to="/dashboard/make-announcement"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 ${
                  isActive
                    ? "bg-indigo-300"
                    : "text-indigo-950 hover:bg-indigo-200 transition"
                }`
              }
            >
              <MdCampaign className="text-lg" /> Make Announcement
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/agreement-requests"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 ${
                  isActive
                    ? "bg-indigo-300"
                    : "text-indigo-950 hover:bg-indigo-200 transition"
                }`
              }
            >
              <MdOutlineRequestPage className="text-lg" /> Agreement Requests
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/manage-coupons"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 ${
                  isActive
                    ? "bg-indigo-300"
                    : "text-indigo-950 hover:bg-indigo-200 transition"
                }`
              }
            >
              <MdLocalOffer className="text-lg" /> Manage Coupons
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/manage-members"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 ${
                  isActive
                    ? "bg-indigo-300"
                    : "text-indigo-950 hover:bg-indigo-200 transition"
                }`
              }
            >
              <FiUsers className="text-lg" /> Manage Members
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default DashboardMenu;
