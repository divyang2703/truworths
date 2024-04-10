import React from "react";
import ProductImages from "./product images/ProductImages";

const ProdcutsDetails = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3 h-auto p-2  border border-green-950">
        <div>
        <ProductImages />
        </div>
        <div className=" border border-red-900 p-2">
        <div>
          <div>
            <h2 className="">Name of the Product</h2>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ProdcutsDetails;
