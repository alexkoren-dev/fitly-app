/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from "react"
import { Switch, Redirect, Route } from "react-router-dom"


// Layouts

import StaticLayout from "layouts/StaticLayout"
import AppLayout from "layouts/AppLayout"
import AuthLayout from "layouts/AuthLayout"


// Basic Components

import LoadingScreen from "components/LoadingScreen"
import AuthGuard from "components/AuthGuard"
import GuestGuard from "components/GuestGuard"


const routesConfig = [

  // Auth Routes

  {
    path: "/auth/member-signup",
    exact: true,
    layout: AuthLayout,
    guard: GuestGuard,
    component: lazy(() => import("views/auth/register/Register"))
  },
  {
    path: "/auth/user-signup",
    exact: true,
    layout: AuthLayout,
    guard: GuestGuard,
    component: lazy(() => import("views/auth/register/Register"))
  },

  // Main Routes

  {
    path: "/user",
    guard: AuthGuard,
    layout: AppLayout,
    routes: [
      {
        exact: true,
        path: "/user/profile",
        component: lazy(() => import("views/profile/OwnerProfile"))
      },
      {
        exact: true,
        path: "/user/account/:tab",
        component: lazy(() => import("views/account"))
      },
      {
        exact: true,
        path: "/user/account",
        component: () => <Redirect to="/user/account/settings" />,
      },
      {
        exact: true,
        path: "/user/workout/create",
        component: lazy(() => import("views/workout"))
      },
      {
        exact: true,
        path: "/user/workout/:id",
        component: lazy(() => import("views/workout"))
      },
      {
        exact: true,
        path: "/user/:id",
        component: lazy(() => import("views/profile/UserProfile"))
      }
    ]
  },
  {
    exact: true,
    path: "/search/:keyword",
    layout: AppLayout,
    component: lazy(() => import("views/search"))
  },

  {
    path: "/room/:URLRoomName",
    exact: true,
    guard: AuthGuard,
    component: lazy(() => import("views/video"))
  },

  // Static Routes

  {
    exact: true,
    path: "/",
    component: () => <Redirect to="/home" />,
  },
  {
    exact: true,
    path: "/home",
    layout: StaticLayout,
    component: lazy(() => import("views/static/landing/Landing"))
  },
  {
    exact: true,
    path: "/signup",
    layout: StaticLayout,
    guard: GuestGuard,
    component: lazy(() => import("views/static/signup/SignUp"))
  }
]

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment
          const Layout = route.layout || Fragment
          const Component = route.component

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          )
        })}
      </Switch>
    </Suspense>
  ) : null

function Routes() {
  return renderRoutes(routesConfig)
}

export default Routes
