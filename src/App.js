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
const DefaultLayout = React.lazy(() => import("./layouts/default/TheLayout"))

// Auth Pages
const Login = React.lazy(() => import("./views/auth/login/Login"))
const Register = React.lazy(() => import("./views/auth/register/Register"))
const Page404 = React.lazy(() => import("./views/auth/page404/Page404"))
const Page500 = React.lazy(() => import("./views/auth/page500/Page500"))

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/member-signup"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Static"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}

export default App
