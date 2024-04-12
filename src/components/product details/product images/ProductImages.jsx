import React from 'react';
import shirts from "../../../assets/s-l1600.jpg";
import { IoIosSearch } from "react-icons/io";

const ProductImages = () => {
  return (
    <div className=" w-full">
      <div className="flex justify-end">
        <IoIosSearch size={30} className="mt-3 mr-2" />
      </div>
      <div className="flex justify-center pr-2">
        <div className="flex flex-col justify-center px-2 mr-4">
          {[1, 2, 3, 4].map((index) => (
            <img
              key={index}
              src={shirts}
              alt="shirts"
              className="h-24 w-24 p-2  m-2 object-contain"
            />
          ))}
        </div>
        <div className="flex justify-center w-full my-10">
          <img
            src={shirts}
            alt="shirts"
            className=" h-96 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
