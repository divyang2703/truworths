import React from "react";

const Sorting = () => {
  return (
    <div className="px-2 mx-2">
      <select name="sort" id="sort" className="outline-none px-2">
        <option value="select">Select your options</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
};

export default Sorting;
