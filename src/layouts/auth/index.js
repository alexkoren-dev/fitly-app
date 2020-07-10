import React, { Suspense } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { CFade } from "@coreui/react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// routes config
import routes from "routes/auth"

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <ToastContainer />
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )}
                />
              )
            )
          })}
        </Switch>
      </Suspense>
    </div>
  )
}

export default TheLayout
