import React from 'react'

//icons
import { FaCreditCard } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineSecurity, MdCardGiftcard, } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";
import { TbCurrencyDollarOff } from "react-icons/tb";

const Informaton = () => {
  return (
    <div className='flex justify-between bg-[#785f37] text-white w-full px-40 mt-10 py-4 border'>
      <div className=''>
        <div className='flex justify-center items-center'>
        <FaCreditCard size={20}/>
          <p className='px-3'> Free Deilvery</p>
        </div>
        <p className='text-sm'>From $50 and up</p>
        </div>
        <div className=''>
        <div className='flex justify-center items-center'>
        <FaRegQuestionCircle size={20}/>
          <p className='px-3'> Free Deilvery</p>
        </div>
        <p className='text-sm'>From $50 and up</p>
        </div>
        <div className=''>
        <div className='flex justify-center items-center'>
        <MdOutlineSecurity size={20}/>
          <p className='px-3'> Free Deilvery</p>
        </div>
        <p className='text-sm'>From $50 and up</p>
        </div>
        <div className=''>
        <div className='flex justify-center items-center'>
        <GoArrowDownLeft size={20}/>
          <p className='px-3'> Free Deilvery</p>
        </div>
        <p className='text-sm'>From $50 and up</p>
        </div>
        <div className=''>
        <div className='flex justify-center items-center'>
        <TbCurrencyDollarOff size={20}/>
          <p className='px-3'> Free Deilvery</p>
        </div>
        <p className='text-sm'>From $50 and up</p>
        </div>
        <div className=''>
        <div className='flex justify-center items-center'>
        <MdCardGiftcard size={20}/>
          <p className='px-3'> Free Deilvery</p>
        </div>
        <p className='text-sm'>From $50 and up</p>
        </div>
    </div>
  )
}

export default Informaton