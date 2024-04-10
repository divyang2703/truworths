import React from 'react'
import { IoIosSearch } from "react-icons/io";


const Colors = () => {
  return (
    <div>
       <div className="flex justify-between items-center">
          <h2 className="text-lg font-para font-semibold">Color</h2>
          <IoIosSearch size={25} />
        </div>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">White</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="border border-[#f0810f] focus:border-[#f0810f]  h-4 w-4 accent-[#f0810f] ace text-white"
            />
            <span className="ml-2 ">Red</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">Black</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">Green</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border border-[#f0810f] focus:border-[#f0810f] accent-[#f0810f] text-white"
            />
            <span className="ml-2 ">Blue</span>
          </label>
        </div>
    </div>
  )
}

export default Colors
