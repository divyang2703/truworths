import React from "react";
import { Link } from "react-router-dom";
import ScarecrowImage from "../../assets/Scarecrow.png";

const PageNotFound = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-1/2 relative">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center ml-10"
          style={{ backgroundImage: `url(${ScarecrowImage})` }}
        ></div>
      </div>
      <div className="w-1/2 flex justify-center items-center p-10">
        <main className="text-center">
          <p className=" text-4xl font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-red-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link to="/" className="text-sm font-semibold text-gray-900 underline">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageNotFound;
