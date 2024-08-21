import React from "react";
import HeaderParamsFilter from "./HeaderParamsFilter";

const FilterPrice = () => {
  return (
    <details className="description__filters__item">
      <HeaderParamsFilter title={"PRICE"} />
      <div className="description__filters__item-show">
        <form action="#">
          <label>
            10
            <input
              type="range"
              name="range_price"
              id="range_price"
              min="10"
              max="1000"
            />
            1000
          </label>
        </form>
      </div>
    </details>
  );
};

export default FilterPrice;
