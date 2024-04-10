import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center ml-[700px]">
      <div className="flex flex-col">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter your email address"
            className="border-2 rounded-md border-gray-300 p-2 w-96 focus:outline-none"
          />
          <button className="bg-black text-white rounded-md py-2 px-2 ml-4">
            Subscribe
          </button>
        </div>
        <div className="mt-2 text-center">
          <p className="text-lg font-para font-semibold">
            Copyright &copy; Truworths 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
