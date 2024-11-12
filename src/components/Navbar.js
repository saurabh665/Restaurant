import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex gap-6">
        <Link
          to="/home"
          className={`text-black text-sm px-3 py-2 rounded-full transition-colors duration-300 ${
            location.pathname === '/home' ? 'bg-[#FC8A06] text-white' : 'hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Home
        </Link>
        <Link
          to="/returento"
          className={`text-black text-sm px-3 py-2 rounded-full transition-colors duration-300 ${
            location.pathname === '/returento' ? 'bg-[#FC8A06] text-white' : 'hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Browse Menu
        </Link>
        <Link
          to="/specialoffer"
          className={`text-black text-sm px-3 py-2 rounded-full transition-colors duration-300 ${
            location.pathname === '/specialoffer' ? 'bg-[#FC8A06] text-white' : 'hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Special Offers
        </Link>
        <Link
          to="/returent"
          className={`text-black text-sm px-3 py-2 rounded-full transition-colors duration-300 ${
            location.pathname === '/returent' ? 'bg-[#FC8A06] text-white' : 'hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Restaurants
        </Link>
        <Link
          to="/trackorder"
          className={`text-black text-sm px-3 py-2 rounded-full transition-colors duration-300 ${
            location.pathname === '/trackorder' ? 'bg-[#FC8A06] text-black' : ' hover:text-black'
          }`}
        >
          Track Order
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
