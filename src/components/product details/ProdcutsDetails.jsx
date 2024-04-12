import React from "react";
import ProductImages from "./product images/ProductImages";
import ProductSizes from "./product sizes/ProductSizes";
import ProductColors from "./product colors/ProductsColors";
import StarRating from "./star rating/StarRating"
import ProductQuantity from "./product qunatity/ProductQuantity";

//icons
import { FaCheck } from "react-icons/fa6";
import { PiVanThin } from "react-icons/pi";
import { IoIosAdd } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleFill } from "react-icons/ri";



const ProdcutsDetails = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-1 p-2 ">
        <div>
          <ProductImages />
        </div>
        <div className=" p-2">
          <div className="p-2">
            <div className="flex justify-between">
            <h2 className="text-xl font-semibold font-para">
              Name of the Product
            </h2>
            <StarRating rating={4} />
            </div>
            <div className="flex mt-1">
              <strike className="text-sm">$999</strike>
              <p className="text-md px-2">$399</p>
            </div>
              <p className="text-sm mt-1 font-para">Description of the Product which is the description of the product Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, possimus aperiam suscipit saepe unde ea. Itaque voluptatibus veritatis magnam minima.</p>
              <ProductSizes/>
              <ProductColors/>
              <ProductQuantity />
              <div className="mt-4">
                <div className="flex items-center">
                  <FaCheck/>
                  <p className="pl-3 font-para text-sm">Free Shipping Available</p>
                </div>
              </div>
              <div className="mt-1">
                <div className="flex items-center">
                  <PiVanThin/>
                  <p className="pl-3 font-para text-sm">Expected Delivery By: Monday, April 28</p>
                </div>
              </div>
              <div className="mt-3 ">
                <div className="flex">
                <button className="p-2 px-6 border rounded-md mr-3 border-[#f1902d] hover:bg-[#f1902d] hover:text-white">Buy Now</button>
                <button className="p-2 px-6 border rounded-md mr-6 border-[#f1902d] hover:bg-[#f1902d] hover:text-white">Add to cart</button>
                <div className="flex items-center">
                <span className="text-[#f1902d]"><IoIosAdd/> </span>
                <span className="text-[#f1902d]">Add to wishlist</span>
                </div>
                </div>
                <div className="mt-3 flex items-center">
                    <span className="mr-4">Share: </span>
                    <span className="flex items-center">
                    <RiFacebookCircleFill size={30} className="mr-3"/>
                    <IoLogoInstagram size={30}/>
                    </span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdcutsDetails;
