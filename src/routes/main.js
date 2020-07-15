import React from "react"

const Profile = React.lazy(() => import("views/member/profile/Profile"))

const routes = [
  { path: "/user/profile", name: "Profile", component: Profile }
]

export default routes
