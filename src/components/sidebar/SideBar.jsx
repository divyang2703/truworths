import React from "react";
import PriceRange from "../sidebar/pricerange/PriceRange";
import Brands from "./brands/Brands";
import Colors from "./colors/Colors";
import Size from "./size/Size";

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
          <Colors />
        </div>
        {/* Brands */}
        <div className="p-2 border border-gray-400">
          <Brands />
        </div>
        {/* Size */}
        <div className="p-2 border border-gray-400">
          <Size />
        </div>
        {/* Price Range */}
        <div className="p-2 border border-gray-400">
          <PriceRange
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
