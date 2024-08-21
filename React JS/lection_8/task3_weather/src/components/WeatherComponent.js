import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherComponent.css";

const WeatherComponent = () => {
  const defaultCity = "Москва"; // Город по умолчанию
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(defaultCity); // Инициализируем город по умолчанию
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Функция для получения данных о погоде
  const getWeather = () => {
    if (!city) return;

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=551689e62080bf6398e7e8c05e48ddcc`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          setWeatherData(response.data);
          setError(null);
        } else {
          setError("Произошла ошибка при получении данных");
        }
      })
      .catch((error) => {
        setError("Город не найден", error);
        setWeatherData(null);
      });
  };

  // Используем useEffect, чтобы получить данные о погоде при монтировании компонента
  useEffect(() => {
    getWeather();
  }, []); // Пустой массив зависимостей означает, что эффект будет вызван только при монтировании компонента

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Введите город"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={getWeather}>Поиск</button>

      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Температура: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Влажность: {weatherData.main.humidity}%</p>
          <p>
            Ощущаемая температура:{" "}
            {Math.round(weatherData.main.feels_like - 273.15)}°C
          </p>
          <p>Давление: {weatherData.main.pressure} мБар</p>
          <p>Видимость: {weatherData.visibility} м</p>
          <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
          <p>Описание: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
