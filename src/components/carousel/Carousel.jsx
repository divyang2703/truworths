import React from "react";
import { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative overflow-hidden h-[80vh] mx-20">
      <div
        className="flex transition ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <img key={i} src={slide.image} alt={`slide-${i}` } className="object-cover w-full" />
        ))}
      </div>

      {slides.length > 1 && (
        <div className="absolute top-1/2 -mt-4 flex justify-between w-full px-4">
          <button
            onClick={previousSlide}
            className="text-white text-3xl focus:outline-none"
          >
            <BsFillArrowLeftCircleFill color="black"/>
          </button>
          <button
            onClick={nextSlide}
            className="text-white text-3xl focus:outline-none"
          >
            <BsFillArrowRightCircleFill color="black"/>
          </button>
        </div>
      )}

      <div className="absolute bottom-4 flex justify-center w-full">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
