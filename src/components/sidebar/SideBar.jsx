import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import PriceRange from '../sidebar/pricerange/PriceRange'  

const SideBar = () => {
  return (
    <div className="">
    <div className="flex justify-between">
      <p className="font-para font-bold text-2xl">Filter</p>
      <p className="font-para font-bold text-2xl">Clear</p>
    </div>
    <div className="">
      {/* colors */}
      <div className="p-2 border border-gray-400">
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
      {/* Brands */}
      <div className="p-2 border border-gray-400">
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
      {/* Size */}
      <div className="p-2 border border-gray-400">
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
      {/* Price Range */}
      <div className="p-2 border border-gray-400">
        <PriceRange />
      </div>
    </div>
  </div>
  )
}

export default SideBar
