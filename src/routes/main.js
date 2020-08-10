import React from "react"

const OwnerProfile = React.lazy(() => import("views/member/profile/OwnerProfile"))
const UserProfile = React.lazy(() => import("views/member/profile/UserProfile"))
const AccountPage = React.lazy(() => import("views/account"))


const routes = [
  { path: "/user/profile", name: "Owner Profile", component: OwnerProfile },
  { path: "/user/account", name: "Account Page", component: AccountPage },
  { path: "/user/:id", name: "User Profile", component: UserProfile },
  
]

export default routes
