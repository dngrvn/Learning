import React from "react";

const CheckboxFilter = ({ parameterName, parameterValues, onFilterChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onFilterChange(value);
  };

  return (
    <div className="description__filters__item-show">
      <form action="#">
        {parameterValues.map((value, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name={`${parameterName}${index + 1}`}
              id={`${parameterName}${index + 1}`}
              value={value}
              onChange={handleChange}
            />
            {value.toUpperCase()}
          </label>
        ))}
      </form>
    </div>
  );
};

export default CheckboxFilter;
