import React, { Component } from "react"
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom"
import "./assets/scss/style.scss"

const history = createBrowserHistory()

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Layouts
const StaticLayout = React.lazy(() => import("./layouts/default/TheLayout"))
const MainLayout = React.lazy(() => import("./layouts/default/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/auth"))


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              path="/auth"
              name="Static"
              render={(props) => <AuthLayout {...props} />}
            />
            <Route
              path="/user"
              name="main"
              render={(props) => <MainLayout {...props} />}
            />
            <Route
              path="/"
              name="Static"
              render={(props) => <StaticLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}

export default App
