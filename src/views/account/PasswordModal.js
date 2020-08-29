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
  CInputRadio,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Formik } from "formik"

import AuthActions from "services/auth"
import { filterErrorMsg, encryptWithAES } from "utils/filter_factory"
import { CERTIFICATES } from "constants/common"

import object from "yup/lib/object"
import string from "yup/lib/string"
import array from "yup/lib/array"

import Loader from "components/Loader"
import MPassword from "components/MaterialPassword"
import Logo from 'components/Logo'

const Yup = {
  object,
  string,
  array,
  ref: () => {},
}

const PasswordModal = ({ openModal, closeModal, profile }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("")

  const handleSubmit = (values) => {
    setLoading(true)
    dispatch(AuthActions.changePassword({ password: values.new_password }))
      .then((res) => {
        setLoading(false)
        toast.success("Password is changed successfully!")
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
    current_password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    new_password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    new_password_confirm: Yup.string()
      .required("Confirm your password")
      .when("new_password", {
        is: (val) => val && val.length > 0,
        then: Yup.string().oneOf([password], "Both password need to be the same"),
      }),
  })

  return (
    <CModal
      show={openModal}
      onClose={closeModal}
      size="lg"
      color="primary"
      className="profile_modal"
    >
      <CModalHeader closeButton></CModalHeader>
      <CModalBody className="pt-0 pb-4 pl-5 pr-5 bg-primary">
        <Formik
          initialValues={{
            current_password: "",
            new_password: "",
            new_password_confirm: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <CForm onSubmit={handleSubmit} className="profile-form mx-auto">
              <CLink href="/">
                <Logo white width={130}/>
              </CLink>
              <CFormGroup className="mt-3" row>
                <CCol
                  lg={12}
                  className={
                    touched.current_password
                      ? errors.current_password
                        ? "is-invalid-col"
                        : "is-valid"
                      : ""
                  }
                >
                  <MPassword
                    id="current_password"
                    name="current_password"
                    label="Current Password"
                    onChange={handleChange}
                    value={values.current_password}
                  />
                  {errors.current_password && touched.current_password && (
                    <div className="invalid-feedback">{errors.current_password}</div>
                  )}
                </CCol>
              </CFormGroup>
              <CFormGroup className="mt-3" row>
                <CCol
                  lg={12}
                  className={
                    touched.new_password
                      ? errors.new_password
                        ? "is-invalid-col"
                        : "is-valid"
                      : ""
                  }
                >
                  <MPassword
                    id="new_password"
                    name="new_password"
                    label="New Password"
                    onChange={(e) => {
                      handleChange(e)
                      setPassword(e.target.value)
                    }}
                    value={values.new_password}
                  />
                  {errors.new_password && touched.new_password && (
                    <div className="invalid-feedback">{errors.new_password}</div>
                  )}
                </CCol>
              </CFormGroup>
              <CFormGroup className="mt-3" row>
                <CCol
                  lg={12}
                  className={
                    touched.new_password_confirm
                      ? errors.new_password_confirm
                        ? "is-invalid-col"
                        : "is-valid"
                      : ""
                  }
                >
                  <MPassword
                    id="new_password_confirm"
                    name="new_password_confirm"
                    label="Re-type New Password"
                    onChange={handleChange}
                    value={values.new_password_confirm}
                  />
                  {errors.new_password_confirm && touched.new_password_confirm && (
                    <div className="invalid-feedback">
                      {errors.new_password_confirm}
                    </div>
                  )}
                </CCol>
              </CFormGroup>

              <div className="d-flex justify-content-end mt-5 mb-3">
                <CButton
                  color="primary"
                  type="submit"
                  className="px-4 btn-pill button-bg-dark text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
                  disabled={loading}
                  style={{ width: 130, height: 40 }}
                >
                  {loading ? <Loader /> : "SUBMIT"}
                </CButton>

                <CButton
                  color="secondary"
                  type="button"
                  className="ml-2 px-4 btn-pill text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
                  disabled={loading}
                  onClick={() => closeModal()}
                  style={{ width: 130, height: 40 }}
                >
                  × CANCEL
                </CButton>
              </div>
            </CForm>
          )}
        </Formik>
      </CModalBody>
    </CModal>
  )
}

export default PasswordModal
