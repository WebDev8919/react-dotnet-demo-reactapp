import { call, put, takeEvery } from "redux-saga/effects";
import jwt from "jwt-decode";

// Login Redux States
import API from "../../../helper/api";
import { LOGIN_ADMIN, LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginSuccess } from "./actions";

function* loginAdmin({ payload: { user, history } }) {
  try {
    const response = yield call(API.post, `/auth/login`, user);
    localStorage.setItem("authUser", response.data.access_token);
    const userData = jwt(response.data.access_token);
    yield put(loginSuccess(userData));
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(API.post, `/auth/login`, user);
    const res_user = response.data["user"];
    if (res_user?.access_token) {
      localStorage.setItem("authUser", res_user.access_token);
      const userData = jwt(res_user.access_token);
      yield put(loginSuccess(userData));
      history.push("/home");
    }
  } catch (error) {
    yield put(apiError(error.response.data));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.clear();
    history.push("/login");
  } catch (error) {
    yield put(apiError());
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_ADMIN, loginAdmin);
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
