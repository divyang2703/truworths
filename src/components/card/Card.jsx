import React from "react";

const Card = () => {
  const shirts = [
    {
      id: 1,
      title: "Name of the Product",
      description: "Description of the Product which is the description of the product",
      strick_price: "$999",
      current_price: "$399",
      imageUrl: "https://images.pexels.com/photos/15878150/pexels-photo-15878150/free-photo-of-portrait-of-man-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Name of the Product",
      description: "Description of the Product which is the description of the product",
      strick_price: "$999",
      current_price: "$399",
      imageUrl: "https://images.pexels.com/photos/7704090/pexels-photo-7704090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Name of the Product",
      description: "Description of the Product which is the description of the product",
      strick_price: "$999",
      current_price: "$399",
      imageUrl: "https://images.pexels.com/photos/1845492/pexels-photo-1845492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-16 justify-center items-center w-[850px] mt-10 mx-10">
      {shirts.map((shirt) => (
        <div><div key={shirt.id} className=" border h-60 border-black relative">
          <img src={shirt.imageUrl} alt={shirt.id} className=" p-2 w-full h-full object-contain " />
        </div><div className="">
            <h1 className="font-span text-md font-bold pt-2">{shirt.title}</h1>
            <p className="text-sm text-gray-700 mt-1">{shirt.description}</p>
            <div className="flex mt-1">
              <strike className="text-sm text-gray-500">{shirt.strick_price}</strike>
              <p className="text-sm text-gray-500 pl-2 mb-9">{shirt.current_price}</p>
            </div>
          </div></div>
      ))}
    </div>
  );
};

export default Card;
