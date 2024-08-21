import React, { useContext } from "react";
import { ProductDataContext } from "../../../contexts/ProductDataContext";
import HeaderParamsFilter from "./HeaderParamsFilter";
import CheckboxFilter from "./CheckboxFilter";

const FilterSize = ({ onSizeFilterChange }) => {
  const { products } = useContext(ProductDataContext);

  // Получаем уникальные размеры из данных о продуктах
  const uniqueSizes = [...new Set(products.map((product) => product.size))];

  return (
    <details className="description__filters__item">
      <HeaderParamsFilter title={"Size"} />
      <CheckboxFilter
        parameterName="size"
        parameterValues={uniqueSizes}
        onFilterChange={onSizeFilterChange}
      />
    </details>
  );
};

export default FilterSize;
