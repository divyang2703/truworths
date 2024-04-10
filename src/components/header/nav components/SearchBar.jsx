import React from "react";

//icons
import { IoIosSearch } from "react-icons/io";
import { FaCamera } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div className="w-full mx-28  h-11 mt-3">
      <div className="flex items-center border border-black rounded-md h-auto w-[100%] ">
        <div className="p-2 flex border border-r-black rounded-md rounded-r-none bg-[#e9dbbd]">
          <select name="" id="" className="bg-[#e9dbbd] focus:outline-none">
            <option value="">Category</option>
          </select>
        </div>
        <IoIosSearch size={35} className="p-1"/>
        <input
          type="text"
          placeholder="Search the product here"
          className=" w-[100%] focus:outline-none ml-2"
        />
        <FaCamera className="mr-4 ml-2" size={28}/>
      </div>
    </div>
  );
};

export default SearchBar;
