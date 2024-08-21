import React from "react";
import { children } from "react";

/* Задание 1 (тайминг 20 минут)
● Создайте компонент Box, который оборачивает содержимое, переданное в children, в div с определенными стилями (например, с рамкой и отступами).
● Используйте Box для оборачивания различных элементов (текста, картинок, других компонентов), чтобы 
продемонстрировать его переиспользуемость. */

function Box({ children }) {
  return (
    <div style={{ border: "1px solid black", width: 200, height: 100 }}>
      {children}
    </div>
  );
}

export default Box;
