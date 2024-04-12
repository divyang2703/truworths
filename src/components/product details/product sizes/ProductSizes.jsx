import React from 'react';

const ProductSizes = () => {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="flex justify-start mt-4">
      <div className="flex items-center">
        <span className="mr-8">Sizes:</span>
        {sizes.map((size, index) => (
          <div key={index} className="border rounded-lg h-8 w-8 flex justify-center items-center mr-4 ">
            <span className=''>{size}</span>
          </div>
        ))}
        <div className=" flex flex-col items-center">
            <span className=" text-[#ff9d3b] font-para text-md font-extralight">
              Size Guide
            </span>
            <div className="flex w-20 border-[#f1902d] border "></div>
          </div>
      </div>
    </div>
  );
};

export default ProductSizes;



// {/* <div className="flex justify-start mt-4">
//       <div className="flex items-center">
//         <span className="mr-8">Sizes:</span>
//         {sizes.map((size, index) => (
//           <div key={index} className="border rounded-lg h-8 w-8 flex justify-center items-center mr-4 ">
//             <span className=''>{size}</span>
//           </div>
//         ))}
//       </div>
//     </div> */}