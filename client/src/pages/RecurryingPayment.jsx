import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import NewButton from '../components/NewButton';
import Footer from '../components/Footer';

const RecurryingPayment = () => {
    return (
        <div>
            <div>
                <Navbar />
                <PageHeader text="FINANCE" />


                <div className='py-8'>
                    <div className="flex justify-center items-center gap-8 text-gray-900 text-xl font-normal">

                        <NavItem label="Invoices" link="/finance" />
                        <NavItem label="Recurrying payment" link="/recurringpayment" active />
                    </div>
                </div>
              
                <div className="px-40 bg-white pt-8 text-gray-800">

                    {/* Title */}
                    <h2 className="text-2xl font-semibold mb-2">
                        Why to use recurring payment?
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8">
                        We provide recurring payment option. In this case we will charge your
                        PayPal account automatically when a certain amount is due so you do not
                        need to deal with the payment every single month.
                    </p>

                    {/* Second Title */}
                    <h2 className="text-2xl font-semibold mb-2">
                        How does it work?
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We provide pay-as-you-go service. This means that you will be invoiced at
                        the beginning of each month based on the services we provided during the
                        previous month. If recurring payment is active then we send you an email
                        once a new invoice is issued to let you check the details of the invoice.
                        If you find anything, you have time to let us know. Three days later we
                        will try to charge your PayPal account. We will send you a confirmation
                        email once the payment is success. If it fails we send you an email
                        notifying you that a manual action is needed.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        Recurring payment does not effect open invoices you already have.
                        Recurring payment handles the invoices issued after the billing
                        agreement is activated and does not handle the prepayment or upgrade
                        invoices. These invoices has to be paid manually.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        You can cancel the recurring payment any time here or on your PayPal's
                        account page.
                    </p>

                    {/* Status */}
                    <p className="text-gray-700 mb-4">
                        <span className="font-medium">Status:</span> Not active
                    </p>

                    {/* Button */}
                    <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-full transition">
                        ✓ Activate
                    </button>
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

export default RecurryingPayment
