import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import {
  CButton,
  CLink,
  CInputCheckbox,
  CCol,
  CFormGroup,
  CLabel,
  CForm,
  CInput,
  CRow,
  CModal,
  CModalBody,
  CModalHeader,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Input } from "antd"
import { Formik } from "formik"

import AuthActions from "services/auth"
import { filterErrorMsg, encryptWithAES } from "utils/filter_factory"

import object from "yup/lib/object"
import string from "yup/lib/string"

import CLogo from 'components/CLogo'
import CLoader from "components/CLoader"

import "./style.scss"


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

  const toggleModal = useSelector((state) => state.auth.toggleLoginModal)

  const [loading, setLoading] = useState(false)
  const [remember, setRememberMe] = useState(false)

  const closeModal = () => {
    dispatch(AuthActions.closeLoginModal())
  }

  const rememberUser = (values) => {
    window.localStorage.setItem("email", values.email)
    window.localStorage.setItem("password", encryptWithAES(values.password))
    window.localStorage.setItem("remember", true)
  }

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
      if (remember) rememberUser(values)

      dispatch(AuthActions.getCurrentUser())
      setLoading(false)
      closeModal()
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
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  })

  return (
    <CModal
      show={toggleModal}
      onClose={closeModal}
      size="lg"
      color="primary"
      className="login-modal"
    >
      <CModalHeader closeButton></CModalHeader>
      <CModalBody className="pt-0 pb-5 px-4 bg-primary">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <CForm onSubmit={handleSubmit} className="login-form mx-auto">
              <CLink
                href="/"
                className="mx-auto d-block"
                style={{ width: "fit-content" }}
              >
                <Logo white width={150}/>
              </CLink>
              <CFormGroup>
                <CLabel className="text-bold text-white">Email</CLabel>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Type your email address here"
                  value={values.email}
                  style={{ height: 45 }}
                  className={
                    touched.email ? (errors.email ? "is-invalid" : "is-valid") : ""
                  }
                />
                {errors.email && touched.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel className="text-bold text-white">Password</CLabel>
                <Input.Password
                  placeholder="Type your password here"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  style={{ height: 45 }}
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
                    color="secondary"
                    type="submit"
                    className="px-4 btn-pill text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
                    disabled={loading}
                    style={{ width: 130 }}
                  >
                    {loading ? (
                      <CLoader />
                    ) : (
                      <>
                        <CIcon
                          name="cuUserFill"
                          width="30"
                          height="30"
                          className="mr-1"
                        />{" "}
                        {"SIGN IN"}
                      </>
                    )}
                  </CButton>
                </CCol>
              </CRow>
              <div className="d-flex flex-wrap justify-content-between align-items-center mt-4">
                <CFormGroup variant="checkbox" className="checkbox mb-3">
                  <CInputCheckbox
                    id="rememberMe"
                    name="rememberMe"
                    value="option1"
                    onChange={(e) => {
                      setRememberMe(e.target.checked)
                    }}
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label text-white ml-1"
                    htmlFor="rememberMe"
                  >
                    Remember me
                  </CLabel>
                </CFormGroup>
                <Link to={"/"} className="text-white text-decoration-none mb-3">
                  Forget password?{" "}
                </Link>
              </div>
              <p className="text-white text-center my-3">Don't have an account?</p>
              <CRow className="mt-4">
                <CCol lg={5}>
                  <Link
                    className="pb-3 border-bottom text-decoration-none border-white text-white"
                    onClick={() => closeModal()}
                    to={{
                      pathname: "/auth/user-signup",
                      state: { type: "user" },
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text-white mb-0">sign up to Lorem Ipsum</p>
                      <span>
                        <CIcon
                          name="cil-arrow-right"
                          className="text-white"
                          width="20"
                        />
                      </span>
                    </div>
                  </Link>
                </CCol>
                <CCol lg={2} />
                <CCol lg={5}>
                  <Link
                    className="pb-3 border-bottom border-white text-decoration-none"
                    onClick={() => closeModal()}
                    to={{
                      pathname: "/auth/member-signup",
                      state: { type: "member" },
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text-white mb-0">sign up to Lorem Ipsum</p>
                      <span>
                        <CIcon
                          name="cil-arrow-right"
                          className="text-white"
                          width="20"
                        />
                      </span>
                    </div>
                  </Link>
                </CCol>
              </CRow>
            </CForm>
          )}
        </Formik>
      </CModalBody>
    </CModal>
  )
}

export default Login
