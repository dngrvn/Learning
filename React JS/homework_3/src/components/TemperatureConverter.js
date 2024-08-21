/* Задание 1: Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.
Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).
Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях. */

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TemperatureConverter = () => {
  const [celsiy, setCelsiy] = useState("");
  const [farengate, setFarengate] = useState("");

  const celsiyChange = (event) => {
    const celsiyValue = event.target.value;
    setCelsiy(celsiyValue);
    if (celsiyValue === "") {
      setFarengate("");
    } else {
      const farengateValue = (parseFloat(celsiyValue) * 9) / 5 + 32;
      setFarengate(farengateValue.toFixed(2));
    }
  };

  const farengateChange = (event) => {
    const farengateValue = event.target.value;
    setFarengate(farengateValue);
    if (farengateValue === "") {
      setCelsiy("");
    } else {
      const celsiyValue = ((parseFloat(farengateValue) - 32) * 5) / 9;
      setCelsiy(celsiyValue.toFixed(2));
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Температурный конвертер</h2>
        <TextField
          label="Цельсий"
          variant="outlined"
          type="number"
          value={celsiy}
          onChange={celsiyChange}
        />
      </div>
      <div>
        <TextField
          label="Фаренгейт"
          variant="outlined"
          type="number"
          value={farengate}
          onChange={farengateChange}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setCelsiy("");
            setFarengate("");
          }}
        >
          Очистить
        </Button>
      </div>
    </div>
  );
};

export default TemperatureConverter;
