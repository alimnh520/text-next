import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { SiSpringsecurity } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";

const Facilities = () => {
    return (
        <div className='h-72 w-full px-24 py-10 grid grid-cols-4 divide-x divide-gray-300 sm:px-5 sm:h-auto sm:grid-cols-1 sm:grid-rows-4 sm:divide-none sm:space-y-5 sm:py-5'>
            <div className="flex flex-col items-center justify-center gap-y-5">
                <TbTruckDelivery className='text-6xl text-gray-700'/>
                <p className='text-xl font-semibold text-gray-700 hover:text-black transition-all'>Fast & Free Delivery</p>
                <p className='text-sm text-gray-800'>Free delivery on all orders</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5">
                <SiSpringsecurity className='text-6xl text-gray-700'/>
                <p className='text-xl font-semibold text-gray-700 hover:text-black transition-all'>Secure Payment</p>
                <p className='text-sm text-gray-800'>Free delivery on all orders</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5">
                <FaMoneyBillTrendUp className='text-6xl text-gray-700'/>
                <p className='text-xl font-semibold text-gray-700 hover:text-black transition-all'>Money Back Guarantee</p>
                <p className='text-sm text-gray-800'>Free delivery on all orders</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-5">
                <Ri24HoursLine className='text-6xl text-gray-700'/>
                <p className='text-xl font-semibold text-gray-700 hover:text-black transition-all'>Online Support</p>
                <p className='text-sm text-gray-800'>Free delivery on all orders</p>
            </div>
        </div>
    )
}

export default Facilities