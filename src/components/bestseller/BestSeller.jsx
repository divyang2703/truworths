import React from "react";
import Card from "../card/Card";

const BestSeller = () => {
  return (
    <div>
      <div>
        <div className=" flex-col">
          <h2 className="flex justify-center px-4 mt-10 font-span text-2xl font-extralight">
            Bestsellers
          </h2>
          <div className="flex justify-center w-32  ml-[45%] h-1 bg-[#785f37] border "></div>
          <div className="flex justify-center ml-16">
            <p className="font-para text-2xl text-[#fe861c] my-5 px-10">
              Shirts
            </p>
            <p className="font-para text-2xl text-gray-500 my-5 px-10">
              Cosmetics
            </p>
            <p className="font-para text-2xl text-gray-500 my-5 px-10 uppercase">
              Kids Wear
            </p>
          </div>
        </div>
        <div className="flex-row justify-center items-center ml-10">
          <div className="flex mx-56">
            <Card />
          </div>
          <div className="flex mx-56">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
