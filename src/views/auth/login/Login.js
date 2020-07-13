import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  CButton,
  CCard,
  CCardBody,
  CLink,
  CCardGroup,
  CCol,
  CFormGroup,
  CLabel,
  CForm,
  CInput,
  CRow,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Formik } from "formik"

import Loader from "components/loader"
import { AuthActions } from "services/global"
import { filterErrorMsg } from "utils/filter_factory"

import object from "yup/lib/object"
import string from "yup/lib/string"

import "./style.scss"

import SignupImg from "assets/img/signup.svg"

const Yup = {
  object,
  string,
  ref: () => {},
}

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirm_password: "",
}

const Login = (props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter the valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  })

  const handleSubmit = (values) => {
    setLoading(true)
    dispatch(
      AuthActions.login({
        user: {
          email: values.email,
          password: values.password,
        },
      })
    )
      .then((res) => {
        setLoading(false)
        props.history.push("/")
      })
      .catch((err) => {
        setLoading(false)
        toast.error(filterErrorMsg(err.data.errors), {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
  }

  return (
    <div className="login-page flex-row align-items-center">
      <CRow className="justify-content-center w-100 m-0" style={{ height: "100vh" }}>
        <CCol md="12" className="p-0">
          <CCardGroup className="h-100">
            <CCard className="text-white bg-primary py-5 d-md-down-none">
              <CCardBody className="text-center d-flex align-items-center p-0">
                <img src={SignupImg} width="115%" style={{ marginLeft: "-10%" }} />
              </CCardBody>
            </CCard>
            <CCard className="p-4 background-grey" style={{ flex: 2 }}>
              <CCardBody className="pr-5">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  {({ handleSubmit, handleChange, values, errors, touched }) => (
                    <CForm onSubmit={handleSubmit}>
                      <CLink href="/">
                        <CIcon name="logo" width="151" height="82" />
                      </CLink>
                      <h2 className="text-darl text-bold mt-4">
                        LOREM IPSUM LOREM IPSUM
                      </h2>
                      <p className="text-caption">
                        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                        LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                        LOREM IPSUM LOREM IPSUM LOREM IPSUM
                      </p>
                      <CFormGroup>
                        <CLabel className="text-bold text-dark">Email</CLabel>
                        <CInput
                          type="text"
                          id="email"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          className={
                            touched.email
                              ? errors.email
                                ? "is-invalid"
                                : "is-valid"
                              : ""
                          }
                        />
                        {errors.email && touched.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel className="text-bold text-dark">Password</CLabel>
                        <CInput
                          type="password"
                          id="password"
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                          className={
                            touched.password
                              ? errors.password
                                ? "is-invalid"
                                : "is-valid"
                              : ""
                          }
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback">{errors.password}</div>
                        )}
                      </CFormGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            type="submit"
                            className="px-4 btn-pill text-bold mt-4"
                            disabled={loading}
                          >
                            {loading ? <Loader /> : "SIGN IN"}
                          </CButton>
                        </CCol>
                      </CRow>
                      <label className="text-bold mt-3 mb-3">No account yet? </label>
                      <CRow>
                        <CCol xs="6">
                          <CLink href="/signup">
                            <CButton
                              color="secondary"
                              className="btn-pill text-bold d-flex align-items-center justify-content-center"
                            >
                              <CIcon name="cuUserFill" width="30" height="30" />{" "}
                              <span className="ml-1">SIGN UP</span>
                            </CButton>
                          </CLink>
                        </CCol>
                      </CRow>
                      <p className="text-dark mt-4">
                        This site is protected by reCaptcha and the{" "}
                        <CLink className="text-decoration-underline">
                          Google Privacy Policy
                        </CLink>{" "}
                        and{" "}
                        <CLink className="text-decoration-underline">
                          Terms of Service Apply
                        </CLink>
                      </p>
                    </CForm>
                  )}
                </Formik>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </div>
  )
}

export default Login
