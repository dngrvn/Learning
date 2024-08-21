import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { FormControl, Select, MenuItem } from "@mui/material";

const TodoFilter = () => {
  // Получаем текущий фильтр из контекста
  const { filter, setFilter } = useContext(FilterContext);

  const handleChange = (e) => {
    // Устанавливаем выбранный фильтр
    setFilter(e.target.value);
  };

  return (
    <>
      <h2>Выбрать задачи</h2>
      <FormControl variant="outlined">
        <Select
          value={filter}
          onChange={handleChange}
          style={{ minWidth: 120 }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="active">Active</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default TodoFilter;
