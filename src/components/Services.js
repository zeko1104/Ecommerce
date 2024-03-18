import React from 'react';
import { FaTruck } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md"


const Services = () => {
  return (
    <div className='container flex gap-4  pt-32'>
        <div className='box h-44 w-72 bg-blue-600 rounded-3xl text-center ml-24 hover:shadow-2xl'>
            <div className='w-36 ml-16 mt-12'>
                <FaTruck className='text-5xl text-white ml-12' />
                <p className='text-white'>Fast Delivery</p>
            </div>
        </div>
        <div className='box h-44 w-72 bg-blue-600 rounded-3xl text-center ml-24 hover:shadow-2xl'>
           <div className='w-36 ml-16 mt-12'>
                <FaMoneyBill className='text-5xl text-white ml-12' />
                <p className='text-white'>Money Back</p>
           </div>
        </div>
        <div className='box h-44 w-72 bg-blue-600 rounded-3xl text-center ml-24 hover:shadow-2xl'>
           <div className='w-36 ml-16 mt-12'>
                <MdOutlineSupportAgent  className='text-5xl text-white ml-12'/>
                <p className='text-white'>7/24 Support</p>
           </div>
        </div>
    </div>
  )
}

export default Services