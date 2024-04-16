import React from 'react';
import Carousel from '../carousel/Carousel';
const BannerCarousel = () => {
  let slides = [
    {
      id:1,
      image: require('../../assets/dapper-suits-mannequins-showcase-fine-tailoring-elegance-mens-fashion-boutique.jpg')
    },
    {
      id:2,
      image: require('../../assets/Girls choosing modern clothes in store flat vector illustration.jpg')
    },
    {
      id:3,
      image: require('../../assets/2008.i305.021.women clothing store.jpg')
    },

  ];
  return (
    <div className="w-full pt-11">
      <Carousel slides={slides} />
    </div>
  );
};

export default BannerCarousel;
