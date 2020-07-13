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
const AuthLayout = React.lazy(() => import("./layouts/auth"))

// Auth Pages
const Login = React.lazy(() => import("./views/auth/login/Login"))
const Register = React.lazy(() => import("./views/auth/register/Register"))

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
