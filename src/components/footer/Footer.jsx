import React from "react";
import Subscribe from "./subscribe/Subscribe";


const Footer = () => {
  return (
    <div className="grid grid-cols-4 gap-2 col-span-1 ml-10 h-aut0  mr-10  mt-5 mb-2">
      
      <div className=" p-8 w-[90%]  items-center ml-10">
        <div>
          <h1 className="text-xl font-span font-light p-4">TRUWORTHS</h1>
        </div>
        <div>
          <h3 className="font-body font-semibold ml-5 mt-4 text-lg">
            E-commerce
          </h3>
          <p className="font-para ml-5 pt-2">087 285 9401</p>
        </div>
        <div>
          <h3 className="font-body font-semibold mt-2 ml-5 text-lg">
            Customer Service
          </h3>
          <p className="font-para ml-5 pt-2">021 460 2300</p>
        </div>
      </div>

      {/* div 2 */}
      <div className="flex gap-8 col-span-3 ml-32">
        {/* about us */}
        <div>
          <div>
            <h3 className="font-para font-bold pt-2 p-2">About Us</h3>
          </div>
          <ul className="w-full">
            <li className="p-2 text-sm">Company</li>
            <li className="p-2 text-sm">News</li>
            <li className="p-2 text-sm">Investoors</li>
            <li className="p-2 text-sm">Careers</li>
            <li className="p-1 text-sm">Government Relation</li>
            <li className="p-2 text-sm">policies</li>
          </ul>
        </div>
        {/* Shop by category */}
        <div>
          <div>
            <h3 className="font-para font-bold pt-2">Shop by category</h3>
          </div>
          <ul className="">
            <li className="p-2 text-sm">Today's Deal</li>
            <li className="p-2 text-sm">Best Seller</li>
            <li className="p-2 text-sm">New Arrivals</li>
            <li className="p-2 text-sm">Top Rated</li>
            <li className="p-2 text-sm">Popular</li>
            <li className="p-2 text-sm">Featured</li>
          </ul>
        </div>
        {/* support and service */}
        <div>
          <div>
            <h3 className="font-para font-bold pt-2 p-2">
              support and service
            </h3>
          </div>
          <ul className="">
            <li className="p-2 text-sm">Customer Srevice</li>
            <li className="p-2 text-sm">Protection Plan</li>
            <li className="p-2 text-sm">Schedule a service</li>
            <li className="p-2 text-sm">Trade-in Program</li>
            <li className="p-2 text-sm">Product Recalls</li>
            <li className="p-2 text-sm">FAQ</li>
          </ul>
        </div>
        {/* partnership */}
        <div>
          <div>
            <h3 className="font-para font-bold pt-2 p-2">partnership</h3>
          </div>
          <ul className="">
            <li className="p-2 text-sm">Affiliate Program</li>
            <li className="p-2 text-sm">Developers</li>
            <li className="p-2 text-sm">Mediamarket Ignite</li>
            <li className="p-2 text-sm">Media Market for Education</li>
            <li className="p-2 text-sm">Media Market Direct</li>
            <li className="p-2 text-sm">Advertise with Us</li>
          </ul>
        </div>
        {/* customer care */}
        <div>
          <div>
            <h3 className="font-para font-bold pt-2 p-2">Customer Care</h3>
          </div>
          <ul className="">
            <li className="p-2 text-sm">My Accounts</li>
            <li className="p-2 text-sm">Track Orders</li>
            <li className="p-2 text-sm">Shop</li>
            <li className="p-2 text-sm">Wishlist</li>
            <li className="p-2 text-sm">Compare</li>
            <li className="p-2 text-sm">Return/Exchange</li>
          </ul>
        </div>
      </div>
      <div className="">
        <Subscribe />
      </div>
    </div>
  );
};

export default Footer;
