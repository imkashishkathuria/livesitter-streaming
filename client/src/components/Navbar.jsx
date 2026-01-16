import React from "react";
import { FaTachometerAlt, FaVideo, FaWallet, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="w-full bg-[#2b2b2b] border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-red-700 font-bold text-xl">
            ((( livesitter<span className="text-white">livecam</span>
          </span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8 text-gray-300 text-sm">
            
          <NavItem icon={<FaTachometerAlt />} label="DASHBOARD" link="/"  active  />
          <NavItem icon={<FaVideo />} label="CAMERAS" link="/cameras" />
          <NavItem icon={<FaWallet />} label="FINANCE" link="/finance"  />
          <NavItem icon={<FaUser />} label="ACCOUNT" link="/accountstatus" />
        </div>

        {/* User */}
        <div className="flex items-center gap-3 text-white">
          <span className="text-sm">Kashish Kathuria</span>
          <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center text-black font-semibold">
            👩
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, link }) => {
  return (

    <NavLink        
        to={link}
      className={ ({ isActive }) => `flex items-center gap-2 cursor-pointer pb-1 ${
        isActive
          ? "text-white border-b-2 border-red-700"
          : "hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default Navbar;
