import { all, fork } from "redux-saga/effects";

//public
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import EmailVerifySaga from "./auth/emailVerify/saga";
import ProfileSaga from "./auth/profile/saga";
import LayoutSaga from "./layout/saga";
import userSaga from "./admin/users/saga";

export default function* rootSaga() {
  yield all([
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(EmailVerifySaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(userSaga),
  ]);
}
