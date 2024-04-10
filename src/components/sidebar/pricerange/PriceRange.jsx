import React from "react";

const PriceRange = () => {

  return (
    <div>
      <div class="container">
        <div class="min-value numberVal">
          <input type="number" min="$0" max="$1500" value="2500" disabled/>
        </div>
        &nbsp;
        <div class="rnage-slider">
          <div class="progress">
            <input type="range" class="range-min" min="0" max="1500" value="2500" />
            <input type="range" class="range-max" min="0" max="1500" value="7500" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default PriceRange;


