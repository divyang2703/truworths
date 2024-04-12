import React from "react";

const ProductColors = () => {
  return (
    <div className="flex justify-start mt-4 ">
      <div className="flex items-center">
        <span className="mr-6 font-para"> Colors:</span>
        <div className="ml-3 items-center">
          <div
            className="rounded-lg h-9 w-9 flex justify-center items-center mr-2 border border-gray-500"
            style={{ backgroundColor: "red" }}
          ></div>
          <span className="font-para">Red</span>
        </div>

        <div>
          <div
            className="rounded-lg h-9 w-9 flex justify-center items-center mr-2 border border-gray-500"
            style={{ backgroundColor: "blue" }}
          ></div>
          <span className="font-para">Blue</span>
        </div>


        <div>
          <div
            className="rounded-lg h-9 w-9 flex justify-center items-center mr-2 border border-gray-500"
            style={{ backgroundColor: "green" }}
          ></div>
          <span className="font-para">Green</span>
        </div>

      </div>
    </div>
  );
};

export default ProductColors;
