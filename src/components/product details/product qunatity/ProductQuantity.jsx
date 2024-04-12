import React from 'react';

const ProductQuantity = () => {
  return (
    <div className="flex items-center mt-4">
      <span className="mr-2">Quantity:</span>
      <select name="prodquantity" id="PQ" className='border-none border-b-black outline-none px-4'>
        <option value="1" className='p-2'>1</option>
        <option value="2" className='p-2'>2</option>
        <option value="3" className='p-2'>3</option>
      </select>
    </div>
  );
};

export default ProductQuantity;
