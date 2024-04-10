import React from 'react'

//iocns
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ColorDisplay = () => {
  return (
    <div className='w-full bg-[#785f37] justify-center p-1'>
      <div className='flex items-center '>
      <div className='px-3 h-[20px] flex items-center ml-1 mr-14'>
            <FaPhoneAlt size={15} className='mr-2'color='white'/> <p className='text-white'>Phone Number</p>
        </div>
        <div className='px-3 h-[20px] flex items-center ml-1'>
            <MdOutlineEmail size={20} className='mr-2'color='white'/> <p className='text-white'>Email</p>
        </div>
        <div className='px-3 h-[20px] flex items-center ml-[150px]'>
            <p className='text-white'>Get 10% off on Everything. Use code ABCD at checkout</p>
        </div>
      </div>
    </div>
  )
}

export default ColorDisplay
