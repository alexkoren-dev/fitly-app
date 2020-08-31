import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { Input, Alert } from "antd"
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

import { TIMEZONES } from "constants/common"

import Loader from "components/CLoader"
import MSelect from "components/MaterialSelect"

import AuthActions from "services/auth"
import { filterErrorMsg, encryptWithAES } from "utils/filter_factory"
import { CERTIFICATES } from "constants/common"

import object from "yup/lib/object"
import string from "yup/lib/string"
import array from "yup/lib/array"

// import "../member/profile/style.scss"
import logoWhite from "assets/img/logo-white.svg"

import AccountModal from "./AccountModal"
import PasswordModal from "./PasswordModal"

const Yup = {
  object,
  string,
  array,
  ref: () => {},
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  phoneNumber: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  gender: Yup.string(),
})

const getSelectedOptions = (options, values) => {
  const valueArray = values.split(",")
  const data = options.filter((opt) => valueArray && valueArray.includes(opt.value))

  return data
}

const AccountForm = ({ openModal, closeModal, profile, user }) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [gender, setGender] = useState("woman")
  const [certificates, setCertificates] = useState([])
  const [trainings, setTrainings] = useState([])
  const [toggleProfile, setToggleProfile] = useState(false)
  const [togglePassword, setTogglePassword] = useState(false)

  const initialValues = {
    firstName: profile ? profile.firstName : "",
    lastName: profile ? profile.lastName : "",
    phoneNumber: profile ? profile.phoneNumber : "",
    city: profile ? profile.city : "",
    state: profile ? profile.state : "",
    email: user ? user.email : "",
    location: profile && profile.location ? profile.location : "",
    aboutme: profile ? profile.aboutme : "",
  }

  return (
    <>
      <AccountModal
        openModal={toggleProfile}
        closeModal={() => setToggleProfile(false)}
        profile={profile}
      />

      <PasswordModal
        openModal={togglePassword}
        closeModal={() => setTogglePassword(false)}
      />

      <Formik
        key={profile}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <CForm onSubmit={handleSubmit} className="mx-auto p-3 account-form">
            {!profile && (
              <Alert
                message='Profile is not complete. To update profile click "Edit Account"'
                type="warning"
                showIcon
                closable
              />
            )}

            <CFormGroup className="mt-3" row>
              <CCol lg={6} className="mb-3">
                <CLabel className="text-bold text-primary">First Name</CLabel>
                <p className="border-bottom py-2">{initialValues.firstName}</p>
              </CCol>
              <CCol lg={6}>
                <CLabel className="text-bold text-primary">Last Name</CLabel>
                <p className="border-bottom py-2">{initialValues.lastName}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol lg={6} className="mb-3">
                <CLabel className="text-bold text-primary">Phone Number</CLabel>
                <p className="border-bottom py-2">{initialValues.phoneNumber}</p>
              </CCol>
              <CCol lg={6}>
                <CLabel className="text-bold text-primary">Email Address</CLabel>
                <p className="border-bottom py-2">{initialValues.email}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol lg={6} className="mb-3">
                <CLabel className="text-bold text-primary">Password</CLabel>
                <div className="d-flex align-items-center justify-content-start w-100">
                  <p className="border-bottom py-2" style={{flex:1}}>.............</p>
                  <CButton
                    color="primary"
                    className="btn-pill p-0 ml-3"
                    style={{ minWidth: 40, height: 40 }}
                    onClick={() => setTogglePassword(true)}
                  >
                    <CIcon name="cu-pencil" />
                  </CButton>
                </div>
              </CCol>
              <CCol lg={6}>
                <CLabel className="text-bold text-primary">Time Zone</CLabel>
                <p className="border-bottom py-2">
                  {
                    profile &&
                    profile.location &&
                    TIMEZONES.filter((time) => time.value === profile.location)[0]
                      .label
                  }
                </p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol lg={4} className="mb-3">
                <CLabel className="text-bold text-primary">City/ County</CLabel>
                <p className="border-bottom py-2">{initialValues.city}</p>
              </CCol>
              <CCol lg={4} className="mb-3">
                <CLabel className="text-bold text-primary">State</CLabel>
                <p className="border-bottom py-2">{initialValues.state}</p>
              </CCol>
              <CCol lg={4}>
                <CLabel className="text-bold text-primary">Country</CLabel>
                <p className="border-bottom py-2">USA</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol lg={12}>
                <CLabel className="text-bold text-primary">About Me</CLabel>
                <p className="border-bottom py-2">{initialValues.aboutme}</p>
              </CCol>
            </CFormGroup>

            <div className="d-flex justify-content-end mt-5 mb-3">
              <CButton
                color="primary"
                type="button"
                className="px-4 btn-pill button-bg-dark text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
                style={{ width: 130, height: 40 }}
                onClick={() => setToggleProfile(true)}
              >
                Edit Profile
              </CButton>
            </div>
          </CForm>
        )}
      </Formik>
    </>
  )
}

export default AccountForm
