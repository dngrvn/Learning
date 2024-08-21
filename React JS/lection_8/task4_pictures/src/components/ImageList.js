import React from "react";
import "./ImageList.css";

const ImageList = ({ images }) => {
  // Получение списка изображений через props
  // Отрисовка списка изображений
  return (
    <div className="image-list">
      <h2>Image List</h2>
      {images.map(
        (
          image // Обход массива изображений и их отрисовка
        ) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.description} />
            <div className="image-description">{image.description}</div>
          </div>
        )
      )}
    </div>
  );
};

export default ImageList;
