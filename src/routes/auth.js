import React from "react"

const Login = React.lazy(() => import("views/auth/login/Login"))
const Register = React.lazy(() => import("views/auth/register/Register"))

const routes = [
  { path: "/auth/signin", exact: true, name: "Home", component: Login },
  {
    path: "/auth/member-signup",
    exact: true,
    name: "Member SignUp",
    component: Register,
  },
  {
    path: "/auth/user-signup",
    exact: true,
    name: "User SignUp",
    component: Register,
  },
]

export default routes
