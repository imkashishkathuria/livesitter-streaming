import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import NewButton from '../components/NewButton';
import Footer from '../components/Footer';

const AccountStatus = () => {
  return (
    <div>
      <div>
        <Navbar />
        <PageHeader text="ACCOUNT" />


        <div className='py-8'>
          <div className="flex justify-center items-center gap-8 text-gray-900 text-xl font-normal">

            <NavItem label="Status" link="/accountstatus" active />
            <NavItem label="Billing Information" link="/" />
            <NavItem label="Users" link="/" />
            <NavItem label="Notifications" link="/" />
            <NavItem label="Active Coupon" link="/" />
            <NavItem label="Delete Account" link="/" />
          </div>
        </div>

        <div className='flex flex-col gap-5 px-10 py-10 text-xl'>
          <p>Account Type: Trial</p>
          <p>Period: 2026-01-15 - 2026-01-20</p>
        </div>



        <div className='pt-43'>
          <Footer />
        </div>
      </div>
    </div>
  )
};


const NavItem = ({ icon, label, link }) => {
  return (

    <NavLink
      to={link}
      className={({ isActive }) => `flex items-center gap-2 cursor-pointer pb-1 ${isActive
        ? "text-red-800 hover:underline cursor-pointer"
        : "hover:text-red-800 hover:underline cursor-pointer"
        }`}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default AccountStatus
