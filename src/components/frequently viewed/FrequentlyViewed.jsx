import React from "react";
import Card from "../card/Card";

const FrequentlyViewed = () => {
  return (
    <div>
      <div className=" flex-col">
        <h2 className="flex justify-center px-4 mt-10 font-span text-2xl font-extralight">
          Frequently Viewed
        </h2>
        <div className="flex justify-center w-60 ml-[41%] h-1 bg-[#785f37] border "></div>
      </div>
      <div className="mx-56">
        <Card />
      </div>
    </div>
  );
};

export default FrequentlyViewed;
