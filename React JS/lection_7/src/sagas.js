import { call, put, takeEvery } from "redux-saga/effects";

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED_SAGA", fetchUser);
}

function* fetchUser() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = yield response.json();
    yield put({ type: "USER_FETCH_SUCCEEDED_SAGA", payload: user });
  } catch (error) {
    yield put({ type: "USER_FETCH_FAILED_SAGA", payload: error.message });
  }
}

// takeEvery function

export default mySaga;
