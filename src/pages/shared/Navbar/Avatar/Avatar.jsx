import React from "react";
import { NavLink } from "react-router";

const Avatar = ({ user, logOut }) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border-2 border-indigo-600">
          <img alt="User Avatar" src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 border border-indigo-50 text-black rounded-box z-1 mt-3 w-40 p-2 shadow"
      >
        
        <li className="text-center py-2 font-semibold text-sm sm:text-base md:text-lg flex justify-center items-center gap-2">
          {user.displayName}
        </li>
        <button
          className="btn text-base rounded-lg bg-indigo-600 text-white hover:text-indigo-600 hover:bg-white hover:border-indigo-600"
          onClick={() => {
            logOut()
              .then(() => {
                 localStorage.clear();
              })
              .catch(() => {
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
