import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

const StarRating = ({ rating }) => {
  const maxRating = 5;


  const generateStars = () => {
    const stars = [ ];
    for (let i = 0; i < maxRating; i++) {
      const StarIcon = i < rating ? BsStarFill : BsStar;
      stars.push(
        <StarIcon key={i} className="text-yellow-500 text-2xl" color='yellow' size={15}/>
      );
    }
    return stars;
  };

  return (
    <div>
    <div className="flex items-center">
      {generateStars()}
    </div>
      <p className='items-center p-1 ml-4'>3.7/500</p>
    </div>
  );
};

export default StarRating;
