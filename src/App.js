import React, { Component } from "react"
import { createBrowserHistory } from "history"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import "./assets/scss/style.scss"
import "antd/dist/antd.css"

// All Routes
import Routes from "./Routes"

// Pre Components
import Auth from "./components/Auth"
import ScrollReset from "./components/ScrollReset"
import FixedWelcomeUser from './components/FixedWelcomeUser'

// Login Modal
import LoginModal from "./views/auth/login/Login"

// Stripe Modal
import StripeModal from "./components/StripeModal"

const history = createBrowserHistory()


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Auth>
          <LoginModal history={history}/>
          <StripeModal history={history}/>
          <ScrollReset />
          <ToastContainer />  
          <FixedWelcomeUser/>

          <Routes />
        </Auth>
      </Router>
    )
  }
}

export default App
