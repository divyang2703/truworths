import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import './PriceRange.css';

const PriceRange = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

const getPercent = useCallback(
  (value) => Math.round(((value - min) / (max - min)) * 100),
  [min, max]
);

useEffect(() => {
  const minPercent = getPercent(minVal);
  const maxPercent = getPercent(maxValRef.current);

  if (range.current) {
    range.current.style.left = `${minPercent}%`;
    range.current.style.width = `${maxPercent - minPercent}%`;
  }
}, [minVal, getPercent]);


useEffect(() => {
  const minPercent = getPercent(minValRef.current);
  const maxPercent = getPercent(maxVal);

  if (range.current) {
    range.current.style.width = `${maxPercent - minPercent}%`;
  }
}, [maxVal, getPercent]);

useEffect(() => {
  onChange({ min: minVal, max: maxVal });
}, [minVal, maxVal, onChange]);
 
  return (
    <div>
      <div>
        <h2 className="font-para font-bold">Price Range </h2>
      </div>
      <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        } }
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }} />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        } }
        className="thumb thumb--right" />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        
      </div>
    </div><div className="flex justify-between">
        <div className="">$0</div>
        <div className="">$1500</div>
      </div>
      <div className="flex items-center">
        <label htmlFor="From" className="text-sm font-para p-2">From:</label>
        <input type="text" className="w-16 h-5 border border-[#f0810f] outline-none p-2 m-auto" />
        <label htmlFor="From" className="text-sm font-para p-2">To:</label>
        <input type="text" className="w-16 h-5 border border-[#f0810f] outline-none p-2 m-auto" />
      </div>
      </div>
  );
};

  PriceRange.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};


export default PriceRange;
