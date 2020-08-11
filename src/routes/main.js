import React from "react"

const OwnerProfile = React.lazy(() => import("views/member/profile/OwnerProfile"))
const UserProfile = React.lazy(() => import("views/member/profile/UserProfile"))
const AccountPage = React.lazy(() => import("views/account"))

const routes = [
  { path: "/user/profile", name: "Owner Profile", component: OwnerProfile },
  { path: "/user/account/:tab", name: "Account Page", component: AccountPage },
  {
    redirect: true,
    path: `/user/account`,
    pathTo: `/user/account/settings`,
  },
  { path: "/user/:id", name: "User Profile", component: UserProfile },
]

export default routes
