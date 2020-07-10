import React, { lazy } from "react"
import { CLink } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import "./style.scss"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="signup-page bg-gradient pb-5 px-5">
      <div className="d-flex justify-content-between align-items-center h-100 px-5">
        <Link
          className="mx-5 pb-3 pl-5 border-bottom text-decoration-none"
          style={{ flex: 1 }}
          to={{
            pathname: "/auth/user-signup",
            state: { type: "user" },
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-dark">
              <strong>sign up to Lorem Ipsum </strong>
            </h2>
            <span>
              <CIcon name="cil-arrow-right" className="text-dark" width="40" />
            </span>
          </div>
        </Link>
        <span className="mx-5"></span>
        <Link
          className="mx-5 pb-3 pl-5 border-bottom text-decoration-none"
          style={{ flex: 1 }}
          to={{
            pathname: "/auth/member-signup",
            state: { type: "member" },
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-dark">
              <strong>sign up to Lorem Ipsum </strong>
            </h2>
            <span>
              <CIcon name="cil-arrow-right" className="text-dark" width="40" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
