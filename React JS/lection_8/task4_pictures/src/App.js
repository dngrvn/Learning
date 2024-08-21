import React, { useState, useEffect } from "react"; // Импорт React и хуков
import axios from "axios"; // Импорт библиотеки axios для выполнения HTTP-запросов
import ImageList from "./components/ImageList"; // Импорт компонента списка изображений

const App = () => {
  const [images, setImages] = useState([]); // Создание состояния для хранения списка изображений
  const [query, setQuery] = useState(""); // Создание состояния для хранения строки поиска

  // Обработчик изменения строки поиска
  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Функция для поиска изображения по строке поиска или вывода рандомных, если строка пуста
  const searchImages = async () => {
    const url = query
      ? `https://api.unsplash.com/search/photos?query=${query}`
      : "https://api.unsplash.com/photos/random?count=10";

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "Client-ID YOUR_ACCESS_KEY", // Замените YOUR_ACCESS_KEY на ваш ключ доступа (API key)
        },
      });

      const imagesData = query ? response.data.results : response.data;
      setImages(imagesData); // Обновление состояния изображений
    } catch (error) {
      console.error("Ошибка при выполнении запроса", error);
    }
  };

  useEffect(() => {
    searchImages(); // Загрузка рандомных изображений при монтировании компонента
  }, []); // Зависимости пусты, так что эффект будет вызван один раз при монтировании

  return (
    // <div className="App">
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h1 style={{ fontSize: "2em" }}>Unsplash Image Search</h1>
      <input
        type="text"
        placeholder="Search images..."
        value={query}
        onChange={onInputChange}
      />
      <button onClick={searchImages}>Search</button>
      <ImageList images={images} />
      {/* передача списка изображение в компонени
      ImageList*/}
    </div>
  );
};

export default App; //экспорт компонента для использования в других частях приложения
