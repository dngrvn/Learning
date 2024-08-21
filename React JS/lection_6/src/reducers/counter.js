// reducers работают с данными, меняют значения

// инициализируем значение
const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: Math.max(0, state.count - 1),
      };
    case "RESET":
      return initialState;
    case "ADD":
      return {
        count: state.count + 5,
      };
    case "SUBTRACT":
      return {
        count: Math.max(0, state.count - 3),
      };
    default:
      return state;
  }
};

export default counter;
