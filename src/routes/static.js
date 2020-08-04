import React from "react"

const Landing = React.lazy(() => import("views/static/landing/Landing"))
const SignUp = React.lazy(() => import("views/static/signup/SignUp"))
const Page404 = React.lazy(() => import("views/static/page404/Page404"))
const Page500 = React.lazy(() => import("views/static/page500/Page500"))

const routes = [
  { path: "/home", exact: true, name: "Home", component: Landing },
  { path: "/home/signup", exact: true, name: "Signup", component: SignUp },
  { path: "/404", exact: true, name: "404", component: Page404 },
  { path: "/500", exact: true, name: "500", component: Page500 },
]

export default routes
