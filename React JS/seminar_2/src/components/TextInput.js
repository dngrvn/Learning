/* Задание 2 (тайминг 20 минут)
1. Создать компонент TextInput, который содержит текстовое поле ввода и отображает введённый текст под ним в реальном времени. */

import { useEffect, useState } from "react";

function TextInput() {
  const [txt, setTxt] = useState();
  const getTxt = ({ target }) => {
    setTxt(target.value);
  };
  return (
    <div>
      <input type="text" value={txt} onChange={getTxt} maxLength="10" />
      <p>Вы ввели: {txt}</p>
    </div>
  );
}

export default TextInput;
