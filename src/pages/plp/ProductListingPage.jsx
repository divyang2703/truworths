import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import ProductList from "../../components/product list/ProductList";
import Trendings from "../../components/trending/Trendings";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sorting from "../../components/sorting/Sorting";
import Breadcrumbs from "../../components/breadcrums/BreadCrums";

const ProductListingPage = () => {

  return (
    <div>
      <Header/>
      <div className="grid grid-col-2 h-auto p-4">
        <div className="flex justify-between mx-32 items-center mb-4">
          <div className="p-1">
            <Breadcrumbs />
          </div>
          {/* Sorting */}
          <div>
            <Sorting/>
          </div>
        </div>
        <div className="flex justify-betweenw-full   gap-4">
          {/* sidebar */}
          <div className=" w-[20%] ml-10 p-4">
            <SideBar />
          </div>
          {/* product */}
          <div>
            {/* filter details */}
            <div>Filter Details</div>
            {/* product images */}
            <div className="flex flex-col">
              <ProductList />
            </div>
          </div>
        </div>
        <div>
          <Trendings />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductListingPage;
