import React, { lazy } from "react"
import { CLink } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import "./style.scss"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="signup-page bg-gradient pb-5 px-5">
      <div className="d-flex justify-content-between align-items-center h-100 px-5">
        <CLink
          className="mx-5 pb-3 pl-5 border-bottom text-decoration-none"
          style={{ flex: 1 }}
          href="/member-signup"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-dark">
              <strong>sign up to Lorem Ipsum </strong>
            </h2>
            <span>
              <CIcon name="cil-arrow-right" className="text-dark" width="40" />
            </span>
          </div>
        </CLink>
        <span className="mx-5"></span>
        <CLink
          className="mx-5 pb-3 pl-5 border-bottom text-decoration-none"
          style={{ flex: 1 }}
          href="/member-signup"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-dark">
              <strong>sign up to Lorem Ipsum </strong>
            </h2>
            <span>
              <CIcon name="cil-arrow-right" className="text-dark" width="40" />
            </span>
          </div>
        </CLink>
      </div>
    </div>
  )
}

export default SignUp
