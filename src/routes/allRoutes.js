import React from "react";
import { Redirect } from "react-router-dom";

import AdminLogin from "../pages/Authentication/AdminLogin";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import ChangePwd from "../pages/Authentication/ChangePassword";
import EmailVerified from "../pages/Authentication/EmailVerified";
import Verify from "../pages/Authentication/Verify";
import Home from "../pages/Home";
import Dashboard from "../pages/Admin/Dashboard";
import Users from "../pages/Admin/Users";
import Orders from "../pages/Orders";

const userRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
];

const authRoutes = [
  {
    path: "/admin",
    exact: true,
    component: () => <Redirect to="/admin/login" />,
  },
  { path: "/admin/login", component: AdminLogin },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/logout", component: Logout },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/change-pass/:token", component: ChangePwd },
  { path: "/verify-email/:token", component: EmailVerified },
  { path: "/verify", component: Verify },
];

const mainRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
  { path: "/home", component: Home },
  { path: "/orders", component: Orders },
];

const adminRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/users", component: Users },
];

export { userRoutes, authRoutes, mainRoutes, adminRoutes };
