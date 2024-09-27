import { call, put, takeLatest } from "redux-saga/effects";

async function fetchUsersApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi);
    yield put({ type: "users/fetchSuccess", payload: users });
  } catch (e) {
    yield put({ type: "users/fetchFailure", payload: e.message });
  }
}

export default function* usersSaga() {
  yield takeLatest("users/fetchRequest", fetchUsersSaga);
}
