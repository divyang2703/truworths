import React from 'react';

const OfferCard = () => {
    const offerCards = [
        {
          id: 1,
          imageUrl: require("../../assets/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing.jpg"),
        },
        {
          id: 2,
          imageUrl: require("../../assets/little-boy-walking-school-with-backpack.jpg"),
        },
        {
          id: 3,
          imageUrl: require("../../assets/top-view-arrangement-with-beauty-bag-copy-space.jpg"),
        },
        {
          id: 4,
          imageUrl: require("../../assets/woman-posing_1303-3772.jpg"),
        },
      ];

    return (
        <div className='flex justify-center w-full'>
            <div className="p-2 flex gap-6 items-center w-2/3 mt-10">
                {offerCards.map((offer) => (
                    <div key={offer.id} className="relative h-60 w-full">
                        <div className="relative w-full h-full overflow-hidden">
                            <img
                                src={offer.imageUrl}
                                alt={offer.id}
                                className="absolute w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-yellow-400 opacity-0 hover:opacity-50 transition-opacity duration-300 flex justify-center items-center">
                            </div>
                                <p className="absolute flex justify-center top-28 left-14 items-center bg-white">Hello world</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfferCard;
