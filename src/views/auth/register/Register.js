import React, { useState, useEffect } from "react"
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

import CLoader from "components/CLoader"
import AuthActions from "services/auth"
import { filterErrorMsg } from "utils/filter_factory"

import object from "yup/lib/object"
import string from "yup/lib/string"

import "./style.scss"

import CLogo from 'components/CLogo'

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

const Register = (props) => {
  const dispatch = useDispatch()

  //States
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Callbacks
  const openModal = () => {
    dispatch(AuthActions.openLoginModal())
  }

  const handleSubmit = (values) => {
    setLoading(true)
    dispatch(
      AuthActions.register(
        {
          user: {
            username: values.username,
            email: values.email,
            password: values.password,
          },
        },
        props.location.state.type
      )
    )
      .then((res) => {
        setLoading(false)
        window.location.href = "/"
      })
      .catch((err) => {
        setLoading(false)
        toast.error(filterErrorMsg(err.data.errors), {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter the valid email")
      .required("Email is required"),
    username: Yup.string()
      .min(3, "Username must be at least 3 characters long")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    confirm_password: Yup.string()
      .required("Confirm your password")
      .when("password", {
        is: (val) => val && val.length > 0,
        then: Yup.string().oneOf([password], "Both password need to be the same"),
      }),
  })

  return (
    <div className="register-page flex-row align-items-center">
      <CRow className="justify-content-center w-100 m-0" style={{ height: "100vh" }}>
        <CCol md="12" className="p-0">
          <CCardGroup className="h-100">
            <CCard className="text-white bg-primary py-5 d-md-down-none">
              <CCardBody className="text-center d-flex align-items-center p-0">
                <img src={SignupImg} width="115%" style={{ marginLeft: "-10%" }} />
              </CCardBody>
            </CCard>
            <CCard className="p-4" style={{ flex: 2 }}>
              <CCardBody className="pr-5">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  {({ handleSubmit, handleChange, values, errors, touched }) => (
                    <CForm onSubmit={handleSubmit}>
                      <CLink href="/">
                        <CLogo width={125}/>
                      </CLink>
                      <h2 className="text-darl text-bold mt-4 text-capitalize">
                        {props.location.state.type} Sign Up
                      </h2>
                      <p className="text-caption">
                        Fitly isn’t an app. It’s a yoga class, it’s one-on-one
                        personal training, it’s your motivation to reach your fitness
                        goals. There’s no subscription, no gym and no need to feel
                        self-conscious working out in front of others—just
                        interactive training you can do at home.
                      </p>
                      <CFormGroup>
                        <CLabel className="text-bold text-dark">User Name</CLabel>
                        <CInput
                          type="text"
                          id="username"
                          name="username"
                          onChange={handleChange}
                          value={values.username}
                          className={
                            touched.username
                              ? errors.username
                                ? "is-invalid"
                                : "is-valid"
                              : ""
                          }
                        />
                        {errors.username && touched.username && (
                          <div className="invalid-feedback">{errors.username}</div>
                        )}
                      </CFormGroup>
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
                          onChange={(e) => {
                            handleChange(e)
                            setPassword(e.target.value)
                          }}
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
                      <CFormGroup>
                        <CLabel className="text-bold text-dark">
                          Re-type Password
                        </CLabel>
                        <CInput
                          type="password"
                          id="confirm_password"
                          name="confirm_password"
                          onChange={handleChange}
                          value={values.confirm_password}
                          className={
                            touched.confirm_password
                              ? errors.confirm_password
                                ? "is-invalid"
                                : "is-valid"
                              : ""
                          }
                        />
                        {errors.confirm_password && touched.confirm_password && (
                          <div className="invalid-feedback">
                            {errors.confirm_password}
                          </div>
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
                            {loading ? <CLoader /> : "SIGN UP"}
                          </CButton>
                        </CCol>
                      </CRow>
                      <label className="text-bold mt-3 mb-3">
                        Already have an account?{" "}
                      </label>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="secondary"
                            className="btn-pill text-bold d-flex align-items-center justify-content-center"
                            onClick={() => {
                              openModal()
                            }}
                          >
                            <CIcon name="cuUserFill" width="30" height="30" />{" "}
                            <span className="ml-1">SIGN IN</span>
                          </CButton>
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

export default Register
