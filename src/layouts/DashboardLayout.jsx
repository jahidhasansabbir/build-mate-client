import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  FiMenu,
  FiHome,
  FiBarChart2,
  FiUserPlus,
  FiSearch,
  FiList,
} from "react-icons/fi";
import DashboardMenu from "../pages/shared/DashboardMenu/DashboardMenu";

const DashboardLayout = () => {
  return (
    <div className="drawer  lg:drawer-open bg-[#0D1117] text-[#F3F4F6]">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ✅ Main Content */}
      <div className="drawer-content flex flex-col">
        {/* ✅ Top navbar (Mobile) */}
        <div className="w-full shadow-md bg-[#161B22] text-[#F3F4F6] lg:hidden z-10">
          <div className="navbar p-0 w-11/12 mx-auto">
            <div className="flex-1 text-xl font-bold">Dashboard</div>
            <div className="flex-none">
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-square btn-ghost text-[#F3F4F6]"
              >
                <FiMenu className="w-6 h-6" />
              </label>
            </div>
          </div>
        </div>

        {/* ✅ Page Content */}
        <div className="min-h-screen md:my-6 px-4 sm:px-6 md:px-8">
          <Outlet />
        </div>
      </div>

      {/* ✅ Sidebar */}
      <div className="drawer-side z-20">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="menu p-4 w-64 min-h-full bg-[#161B22] border-r border-[#30363D] space-y-1">
          <h2 className="text-2xl font-bold mb-4 px-2 text-blue-600">Menu</h2>

        {/* Dashboard menu here  */}
        <DashboardMenu></DashboardMenu>

        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
