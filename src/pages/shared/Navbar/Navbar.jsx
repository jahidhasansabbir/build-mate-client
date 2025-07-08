import React from "react";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Avatar from "./Avatar/Avatar";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-black font-semibold">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apartment" className="text-black font-semibold">Apartment</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  text-green-900 shadow-sm 0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
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
        <NavLink to="/" className="btn btn-ghost text-xl text-black font-bold">
          Build<span className="-ml-1.5 text-green-500">Mate</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Avatar user={user} logOut={logOut}></Avatar>
        ) : (
          <NavLink to="/login" className="btn font-bold bg-green-600 text-white hover:bg-green-700">
            Log in
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
