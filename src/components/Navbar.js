import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-evenly items-center py-5 px-6 ">
      {/* Logo */}
      <div className="flex items-center ml-4"> {/* Added margin-left to give space */}
        <img 
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731674375/LOGO_1_ovo0ls.svg" 
          alt="Logo" 
          className="h-10 w-auto" 
        />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 mr-4"> {/* Added margin-right to give space */}
        <Link
          to="/home"
          className={`text-sm px-3 py-2 rounded-full font-medium transition-colors duration-300 ${
            location.pathname === '/home' 
              ? 'bg-[#FC8A06] text-white' 
              : 'text-black hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Home
        </Link>
        <Link
          to="/returento"
          className={`text-sm px-3 py-2 rounded-full font-medium transition-colors duration-300 ${
            location.pathname === '/returento' 
              ? 'bg-[#FC8A06] text-white' 
              : 'text-black hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Browse Menu
        </Link>
        <Link
          to="/specialoffer"
          className={`text-sm px-3 py-2 rounded-full font-medium transition-colors duration-300 ${
            location.pathname === '/specialoffer' 
              ? 'bg-[#FC8A06] text-white' 
              : 'text-black hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Special Offers
        </Link>
        <Link
          to="/returent"
          className={`text-sm px-3 py-2 rounded-full font-medium transition-colors duration-300 ${
            location.pathname === '/returent' 
              ? 'bg-[#FC8A06] text-white' 
              : 'text-black hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Restaurants
        </Link>
        <Link
          to="/trackorder"
          className={`text-sm px-3 py-2 rounded-full font-medium transition-colors duration-300 ${
            location.pathname === '/trackorder' 
              ? 'bg-[#FC8A06] text-white' 
              : 'text-black hover:bg-[#FC8A06] hover:text-white'
          }`}
        >
          Track Order
        </Link>
        <Link
          to="/login"
          className="text-sm px-3 py-2 rounded-full font-medium transition-colors duration-300 bg-black text-white">
          Login/Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
