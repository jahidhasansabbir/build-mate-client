import React from 'react';
import { NavLink } from 'react-router';
import { MdApartment } from 'react-icons/md'; // Import icon

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center gap-1 text-xl font-bold text-black">
      <MdApartment className="text-2xl text-green-500" /> 
      <span>Build<span className="text-green-500">Mate</span></span>
    </NavLink>
  );
};

export default Logo;
