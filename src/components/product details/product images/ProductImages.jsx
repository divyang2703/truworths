import React from 'react'
import shirts from "../../../assets/s-l1600.jpg";
import { IoIosSearch } from "react-icons/io";

const ProductImages = () => {
  return (
    <div>
      <div className="border border-black w-[90vh]">
          
          <div className="flex justify-end">
            <IoIosSearch size={30} className="mt-3 mr-2"/>
          </div>
          <div className="flex justify-center">
          <div className="flex-col justify-center px-2 mr-4 items-center">
            <img
              src={shirts}
              alt="shirts"
              className="h-24 w-24 p-2 border m-2 object-contain"
            />
            <img
              src={shirts}
              alt="shirts"
              className="h-24 w-24 p-2 border m-2 object-contain"
            />
            <img
              src={shirts}
              alt="shirts"
              className="h-24 w-24 p-2 border m-2 object-contain"
            />
            <img
              src={shirts}
              alt="shirts"
              className="h-24 w-24 p-2 border m-2 object-contain"
            />
          </div>
          <div className="flex justify-center mx-20 my-10">
            <img
              src={shirts}
              alt="shirts"
              className="border h-96 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductImages
