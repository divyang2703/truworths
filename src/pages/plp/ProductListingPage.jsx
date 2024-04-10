import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import ProductList from "../../components/productlist/ProductList";

const ProductListingPage = () => {
  return (
    <div className="grid grid-col-2 h-auto p-4">
      <div className="flex justify-between mx-32">
        <div>Breadcrumbs</div>
        <div>Sorting</div>
      </div>
      <div className="flex justify-betweenw-full   gap-4">
        {/* sidebar */}
        <div className=" w-[20%] ml-10 p-4">
          <SideBar/>
        </div>
        {/* product */}
        <div >
          {/* filter details */}
          <div>Filter Details</div>
          {/* product images */}
          <div className="flex flex-col">
           <ProductList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
