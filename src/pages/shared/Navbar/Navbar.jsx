import React from "react";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Avatar from "./Avatar/Avatar";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const { user, logOut } = useAuth();
 
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-black font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apartment" className="text-black font-semibold">
          Apartment
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-sm sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <div className="navbar px-0 text-green-900 max-w-[1600px] mx-auto w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0 pr-2 lg:hidden text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-indigo-50 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink
            to="/"
            className=" text-xl text-black font-bold"
          >
            Build<span className=" text-green-500">Mate</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Avatar user={user} logOut={logOut}></Avatar>
          ) : (
            <NavLink
              to="/login"
              className="btn font-bold bg-green-600 text-white hover:bg-green-700"
            >
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
