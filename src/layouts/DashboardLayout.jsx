import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../pages/shared/Navbar/Logo"
import {
  FiMenu,
  FiHome,
  FiBarChart2,
  FiUserPlus,
  FiSearch,
  FiList,
} from "react-icons/fi";
import DashboardMenu from "../pages/shared/DashboardMenu/DashboardMenu";
import Aos from "aos";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/shared/Loading/Loading";

const DashboardLayout = () => {
  const {isLoadingUser}=useAuth();
   useEffect(() => {
      Aos.init({
        duration: 1000, 
        once: false,     
      });
    }, []);
    if(isLoadingUser)return<Loading></Loading>
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ✅ Main Content */}
      <div className="drawer-content  flex flex-col">
        {/* ✅ Top navbar (Mobile) */}
        <div className="w-full shadow-sm sticky top-0 z-20 text-[#000000] lg:hidden bg-base-100">
          <div className="navbar justify-between  p-0 w-11/12 mx-auto">
            <Logo/>
            <div className="flex-none">
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-square btn-ghost text-[#000000]"
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
      <div className="drawer-side border-r border-gray-100 z-20">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="menu p-4 w-64 min-h-full bg-gradient-to-bl from-green-50 via-purple-50 to-green-50   space-y-1">
          <div className="px-3"><Logo></Logo></div>

          {/* Dashboard menu here  */}
          <DashboardMenu />
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
