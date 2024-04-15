import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumbs() {

  return (
    <div>
       
    <nav aria-label="breadcrumb" className="w-max">
  <ol className="flex flex-wrap items-center w-full px-4 py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
    <li
      className="flex items-center font-para text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
      <Link to="/" className="opacity-60">Home</Link><span
        className="mx-2 font-para text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">/</span>
    </li>
    <li
      className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
      <Link to="/" className="opacity-60">Primary</Link><span
        className="mx-2 font-para text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">/</span>
    </li>
    <li
      className="flex items-center font-para text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
      <Link to="/" className='opacity-60'>Secondary</Link>
      <span
        className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">/</span>
      </li>
      <li
      className="flex items-center font-para text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
      <Link to="/">Tertiary</Link></li>
  </ol>
</nav>  
</div>
  );
}

export default Breadcrumbs;