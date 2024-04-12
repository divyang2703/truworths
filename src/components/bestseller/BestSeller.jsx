import React from "react";
import Card from "../card/Card";

const BestSeller = () => {
  return (
    <div className="flex justify-center items-center mt-10">
    <div className=" col-span-1 items-center ">
      <div className="w-full flex-col justify-center  px-3">
        <div className=" flex flex-col items-center">
          <h2 className="px-4 font-span text-2xl font-extralight">
            Best Sellers
          </h2>
          <div className="flex w-36 h-1 bg-[#785f37] border "></div>
        </div>
        <div className="flex justify-center mt-2">
            <p className="font-para text-2xl text-[#fe861c] my-5 px-10">
              Shirts
            </p>
            <p className="font-para text-2xl text-gray-500 my-5 px-10">
              Cosmetics
            </p>
            <p className="font-para text-xl text-gray-500 my-5 px-5 ">
              KIDS WEAR
            </p>
          </div>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
    </div>
  </div>
  );
};

export default BestSeller;
