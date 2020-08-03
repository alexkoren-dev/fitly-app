import React, { Component } from "react"
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom"
import "./assets/scss/style.scss"
import "antd/dist/antd.css"

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
            <Route path="/auth" name="Static" component={AuthLayout} />
            <Route path="/user" name="main" component={MainLayout} />
            <Route path="/" name="Static" component={StaticLayout} />
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}

export default App
