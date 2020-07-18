import React from "react"

const OwnerProfile = React.lazy(() => import("views/member/profile/OwnerProfile"))
const UserProfile = React.lazy(() => import("views/member/profile/UserProfile"))

const routes = [
  { path: "/user/profile", name: "Owner Profile", component: OwnerProfile },
  { path: "/user/:id", name: "User Profile", component: UserProfile },
]

export default routes
