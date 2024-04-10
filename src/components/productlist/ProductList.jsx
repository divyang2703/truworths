import React from "react";
import Card from "../../components/card/Card";

const ProductList = () => {
  return (
    <div>
      <div className="flex flex-col">
        {/* row 1 */}
        <div className="flex flex-col-3">
          <Card />
        </div>
        {/* row 2 */}
        <div className="flex flex-col-3">
          <Card />
        </div>
        {/* row 3 */}
        <div className="flex flex-col-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
