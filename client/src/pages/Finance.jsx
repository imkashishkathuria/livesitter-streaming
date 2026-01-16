import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import NewButton from '../components/NewButton'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

const Finance = () => {
  return (
    <div>
      <Navbar />
      <PageHeader text="FINANCE" />


      <div className='py-8'>
        <div className="flex justify-center items-center gap-8 text-gray-900 text-xl font-normal">

          <NavItem label="Invoices" link="/finance" active />
          <NavItem label="Recurrying payment" link="/recurringpayment" />
        </div>
      </div>
      <div className="px-6 py-10">
        <div className="grid grid-cols-6 items-center text-center px-6 py-4 text-lg text-gray-400 font-medium">
          <div>Invoice date</div>
          <div>Period</div>
          <div>Subtotal</div>
          <div>VAT</div>
          <div>Total</div>
          <div>Status</div>
        </div>
        <div className="border-t border-gray-300" />

        <div className="px-6 py-6 text-lg text-gray-400 font-medium">
          No data to display
        </div>
      </div>
      <div className='py-10'><NewButton text="NEW Pre-Payment" /></div>

      <div className='pt-43'>
        <Footer />
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


export default Finance
