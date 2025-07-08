import React from "react";
import { NavLink } from "react-router";

const Avatar = ({ user, logOut }) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border-2 border-green-600">
          <img
            alt="User Avatar"
            src={user?.photoURL}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 border border-green-50 text-black  rounded-box z-1 mt-3 w-40 p-2 shadow"
      >
        <li className="text-center py-2 text-base font-semibold">{user.displayName}</li>
        <li>
          <NavLink
            to="/dashboard"
            className="btn text-base border-none shadow-none bg-transparent hover:text-green-600"
          >
            Dashboard
          </NavLink>
        </li>
        <button
          className="btn text-base rounded-lg bg-green-600 text-white hover:text-green-600 hover:bg-white hover:border-green-600"
          onClick={() => {
            logOut()
              .then(() => {
                console.log("logout successful");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Avatar;
