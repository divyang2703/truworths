import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const Brands = () => {
  return (
    <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-para font-semibold">Brands</h2>
          <IoIosSearch size={25} />
        </div>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">Addidas</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">Nike</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">Puma</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">Gap</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">Reebok</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">New Balance</span>
          </label>
          <div className="flex items-center">
          <IoIosAdd className="" color="#f0810f" size={25}/><span className="text-[#f0810f]">30 more</span>
          </div>
        </div>
    </div>
  )
}

export default Brands
