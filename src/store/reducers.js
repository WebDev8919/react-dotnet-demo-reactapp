import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import EmailVerify from "./auth/emailVerify/reducer";
import Profile from "./auth/profile/reducer";

import Users from "./admin/users/reducer";

const rootReducer = combineReducers({
  Layout,
  Login,
  Account,
  EmailVerify,
  ForgetPassword,
  Profile,
  Users,
});

export default rootReducer;
