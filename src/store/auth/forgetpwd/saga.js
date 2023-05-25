import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import API from "../../../helper/api";
import { FORGET_PASSWORD, CHANGE_PASSWORD } from "./actionTypes";
import { userForgetPasswordSuccess, userForgetPasswordError } from "./actions";

function* forgetUser({ payload: { user, history } }) {
  try {
    const response = yield call(API.post, `/send-email`, user);
    yield put(userForgetPasswordSuccess(response));
  } catch (error) {
    yield put(userForgetPasswordError(error));
  }
}

function* changeUser({ payload: { user, history } }) {
  try {
    const response = yield call(API.post, `/change-pass`, user);
    if (response.data) {
      yield put(userForgetPasswordSuccess(response));
      history.push("/login");
    } else yield put(userForgetPasswordError("Change password failed!"));
  } catch (error) {
    yield put(userForgetPasswordError(error));
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(FORGET_PASSWORD, forgetUser);
  yield takeEvery(CHANGE_PASSWORD, changeUser);
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget)]);
}

export default forgetPasswordSaga;
