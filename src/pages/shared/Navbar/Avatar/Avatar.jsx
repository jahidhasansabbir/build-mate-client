import React from "react";
import { NavLink } from "react-router";

const Avatar = ({user, logOut}) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow">
        
        <li className="text-center py-2 text-base">{user.displayName}</li>
        <li>
            <NavLink className="btn text-base border-none shadow-none bg-transparent hover:text-blue-600">Dashboard</NavLink>
        </li>
        <button className="btn text-base hover:text-blue-600" onClick={()=>{
            logOut()
            .then(()=>{console.log("logout successfull");})
            .catch((err)=>{
                console.log(err);
            })
        }}>Logout</button>
      </ul>
    </div>
  );
};

export default Avatar;
