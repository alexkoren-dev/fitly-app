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
import Chip from "@material-ui/core/Chip"
import MenuItem from "@material-ui/core/MenuItem"
import CIcon from "@coreui/icons-react"
import { Formik } from "formik"

import Loader from "components/loader"
import MRadio from "components/materialRadio"
import MInput from "components/materialInput"
import MSelect from "components/materialSelect"

import { AuthActions } from "services/global"
import { filterErrorMsg, encryptWithAES } from "utils/filter_factory"
import { CERTIFICATES } from "constants/common"

import object from "yup/lib/object"
import string from "yup/lib/string"

import "./style.scss"
import logoWhite from "assets/img/logo-white.svg"

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

const ProfileModal = ({ openModal, closeModal, profile }) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [remember, setRememberMe] = useState(false)
  const [personName, setPersonName] = useState([])
  const [gender, setGender] = useState("woman")

  const rememberUser = (values) => {
    window.localStorage.setItem("email", values.email)
    window.localStorage.setItem("password", encryptWithAES(values.password))
    window.localStorage.setItem("remember", true)
  }

  const handleSubmit = (values) => {
    setLoading(true)
    dispatch(
      profile
        ? AuthActions.editUserProfile(values)
        : AuthActions.createUserProfile(values)
    )
      .then((res) => {
        setLoading(false)
        toast.success(
          `Your profile is ${profile ? "updated" : "created"} successfully`
        )
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
    first_name: Yup.string(),
    last_name: Yup.string(),
    phone_number: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    preferred_trainings: Yup.string(),
    certifications: Yup.string(),
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
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <CForm onSubmit={handleSubmit} className="profile-form mx-auto">
              <CLink href="/">
                <img src={logoWhite} width="131" height="63" />
              </CLink>
              <CFormGroup className="mt-3" row>
                <CCol lg={5}>
                  <MInput
                    id="standard-basic"
                    name="first_name"
                    label="First Name"
                    fullWidth
                    onChange={handleChange}
                  />
                </CCol>
                <CCol lg={2} />
                <CCol lg={5}>
                  <MInput
                    id="standard-basic"
                    name="last_name"
                    label="Last Name"
                    fullWidth
                    onChange={handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol lg={5}>
                  <MInput
                    id="standard-basic"
                    name="phone_number"
                    label="Phone Number"
                    fullWidth
                    onChange={handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol lg={5}>
                  <MInput
                    id="standard-basic"
                    name="city"
                    label="City"
                    fullWidth
                    onChange={handleChange}
                  />
                </CCol>
                <CCol lg={2} />
                <CCol lg={5}>
                  <MInput
                    id="standard-basic"
                    name="state"
                    label="State"
                    fullWidth
                    onChange={handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-4 pt-1">
                <CCol lg={12}>
                  <div className="d-flex align-items-center flex-wrap">
                    <CLabel className="mr-4 ml-2">Choose Gender</CLabel>
                    <div>
                      <CFormGroup variant="custom-radio" inline>
                        <MRadio
                          value="woman"
                          label="Woman"
                          checked={gender === "woman"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <MRadio
                          value="man"
                          label="Man"
                          checked={gender === "man"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <MRadio
                          value="non-binary"
                          label="Non-binary"
                          checked={gender === "non-binary"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <MRadio
                          value="transgender"
                          label="Transgender"
                          checked={gender === "transgender"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </CFormGroup>
                    </div>
                  </div>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol lg={12}>
                  <MSelect
                    options={CERTIFICATES}
                    isMulti
                    className="m-select mb-2"
                    placeholder="Preferred Trainings "
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol lg={12}>
                  <MSelect
                    options={CERTIFICATES}
                    isMulti
                    className="m-select mb-2"
                    placeholder="Select Certification "
                  />
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
                  type="submit"
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

export default ProfileModal
