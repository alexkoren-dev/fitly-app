import React from "react"

const Landing = React.lazy(() => import("views/static/landing/Landing"))
const SignUp = React.lazy(() => import("views/static/signup/SignUp"))

const routes = [
  { path: "/", exact: true, name: "Home", component: Landing },
  { path: "/signup", exact: true, name: "Home", component: SignUp },
]

export default routes
