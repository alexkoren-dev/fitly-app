import React from "react"

const Landing = React.lazy(() => import("views/static/landing/Landing"))

const routes = [{ path: "/", exact: true, name: "Home", component: Landing }]

export default routes
