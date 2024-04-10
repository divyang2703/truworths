import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Size = () => {
  return (
    <div>
       <div className="flex justify-between items-center">
          <h2 className="text-lg font-para font-semibold">Size</h2>
          <IoIosSearch size={25} />
        </div>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">XS</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">S</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">M</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">L</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">XL</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">XXL</span>
          </label>
        </div>
    </div>
  )
}

export default Size
