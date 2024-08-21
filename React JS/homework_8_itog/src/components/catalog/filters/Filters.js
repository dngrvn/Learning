import React from "react";
import CategoriesFilter from "./CategoriesFilter";
import FilterTrend from "./FilterTrend";
import FilterSize from "./FilterSize";
import FilterPrice from "./FilterPrice";

const Filters = ({ onSizeFilterChange }) => {
  return (
    <div className="products__filters">
      <CategoriesFilter />
      <div className="description__filters">
        <FilterTrend />
        <FilterSize onSizeFilterChange={onSizeFilterChange} />
        <FilterPrice />
      </div>
    </div>
  );
};

export default Filters;
