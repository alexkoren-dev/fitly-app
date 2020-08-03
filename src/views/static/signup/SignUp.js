import React, { lazy } from "react"
import { CLink, CRow, CCol, CContainer } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Link } from "react-router-dom"
import "./style.scss"

const SignUp = () => {
  return (
    <div className="signup-page">
      <CContainer className="h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <CRow className="w-100">
            <CCol lg={5}>
              <Link
                className="d-block pb-3 pl-5 mb-5 border-bottom text-decoration-none"
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
            </CCol>
            <CCol lg={2} />
            <CCol lg={5}>
              <Link
                className="d-block pb-3 pl-5 mb-5 border-bottom text-decoration-none"
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
            </CCol>
          </CRow>
        </div>
      </CContainer>
    </div>
  )
}

export default SignUp
