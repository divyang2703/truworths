import React from "react";

const OfferCard = () => {
  const offerCards = [
    {
      id: 1,
      category: "Men's Shirt",
      imageUrl: require("../../assets/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing.jpg"),
    },
    {
      id: 2,
      category: "Kid's Jacket",
      imageUrl: require("../../assets/little-boy-walking-school-with-backpack.jpg"),
    },
    {
      id: 3,
      category: "Cosmetics",
      imageUrl: require("../../assets/top-view-arrangement-with-beauty-bag-copy-space.jpg"),
    },
    {
      id: 4,
      category: "Women's Tops",
      imageUrl: require("../../assets/woman-posing_1303-3772.jpg"),
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="p-2 flex gap-6 items-center w-2/3 mt-10">
        {offerCards.map((offer) => (
          <div key={offer.id} className="relative h-60 w-full">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={offer.imageUrl}
                alt={offer.id}
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-yellow-700 opacity-0 hover:opacity-50 transition-opacity duration-300 flex justify-center items-center"></div>
              <div className="absolute w-auto flex-col justify-center mt-24 ml-14 items-center border-none bg-white">
              <div className=" text-sm px-2 ml-4">
                <p className="text-xs">
                {offer.category}</p>
              </div>
                <div className="text-2xl px-2">10% OFF</div>
                </div>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
