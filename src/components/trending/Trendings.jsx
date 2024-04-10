import React from 'react'
import Card from "../card/Card";


const Trendings = () => {
  return (
    <div>
      <div className=" flex-col">
        <h2 className="flex justify-center px-4 mt-10 font-span text-2xl font-extralight">
          Trending Now
        </h2>
        <div className="flex justify-center w-44 ml-[44%] h-1 bg-[#785f37] border "></div>
      </div>
      <div className="mx-56">
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Trendings
