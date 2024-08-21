/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from "../reducers/UsersSlice.js";

export default function SagaComp() {
  const { entities, loading, error } = useSelector(
    (state) => state.users.value
  );
  console.log(entities, loading, error);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchRequest());
  }

  return (
    <>
      <div className="App">
        <h1>Пользователи</h1>
        {loading === "pending" && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        <ul>
          {entities.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleClick}>saga button</button>
    </>
  );
}
