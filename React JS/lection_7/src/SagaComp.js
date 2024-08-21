import React from "react";
import { useDispatch } from "react-redux";

function SagaButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "SAGA_BUTTON_CLIKCED" });
  };

  return <button onClick={handleClick}>Нажми для работы с Saga</button>;
}

export default SagaButton;
