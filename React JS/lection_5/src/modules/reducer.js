export const reducer = (state = 0, action) => {
  // что хранится, изначально состояние равно нулю, а затем указываем действие
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
