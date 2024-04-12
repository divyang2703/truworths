import React from 'react'
import Card from '../card/Card'

const RelatedProducts = () => {
  return (
<div className="flex justify-center items-center mt-10">
      <div className=" col-span-1 items-center ">
        <div className="w-full flex-col justify-center  px-3">
          <div className=" flex flex-col items-center">
            <h2 className="px-4 font-span text-2xl font-extralight">
              Related Products
            </h2>
            <div className="flex w-60 h-1 bg-[#785f37] border "></div>
          </div>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
