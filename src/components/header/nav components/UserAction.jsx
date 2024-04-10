import React from "react";

//icons
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";

const UserAction = () => {
  return (
    <div className="flex justify-center items-center h-20">
      <div className="w-full">
        <ul className="flex justify-center items-center m-2">
          <div className="items-center">
            <FaRegUserCircle className="ml-8" size={20} />
            <li className="m-2">
              <select>
                <option value="profile">Profile</option>
              </select>
            </li>
          </div>
          <div className="items-center">
            <FiShoppingCart className="ml-3" size={20} color=""/>
            <li className="m-2">Cart</li>
          </div>
          <div className="items-center">
            <FaRegHeart className="ml-6" size={20}/>
            <li className="m-2">Wishlist</li>
          </div>
          <div className="items-center">
            <IoLogoUsd className="ml-5" size={20} />
            <li className="m-2">
              <select>
                <option value="USD">USD</option>
              </select>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserAction;
