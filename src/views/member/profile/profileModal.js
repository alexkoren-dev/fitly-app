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

import Loader from "components/loader"
import MRadio from "components/materialRadio"
import MInput from "components/materialInput"
import MSelect from "components/materialSelect"

import { AuthActions } from "services/global"
import { filterErrorMsg, encryptWithAES } from "utils/filter_factory"
import { CERTIFICATES } from "constants/common"

import object from "yup/lib/object"
import string from "yup/lib/string"
import array from "yup/lib/array"

import "./style.scss"
import logoWhite from "assets/img/logo-white.svg"

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
  trainingAccreditation: Yup.string(),
  specialities: Yup.string(),
})

const getSelectedOptions = (options, values) => {
  const valueArray = values.split(",")
  const data = options.filter((opt) => valueArray.includes(opt.value))

  return data
}

const ProfileModal = ({ openModal, closeModal, profile }) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [gender, setGender] = useState("woman")
  const [certificates, setCertificates] = useState([])
  const [trainings, setTrainings] = useState([])

  const handleSubmit = (values) => {
    const data = {
      ...values,
    }

    setLoading(true)
    dispatch(
      profile
        ? AuthActions.editUserProfile(data)
        : AuthActions.createUserProfile(data)
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

  const initialValues = {
    firstName: profile ? profile.firstName : "",
    lastName: profile ? profile.lastName : "",
    phoneNumber: profile ? profile.phoneNumber : "",
    city: profile ? profile.city : "",
    state: profile ? profile.state : "",
    gender: profile ? profile.gender : "",
    trainingAccreditation: profile ? profile.trainingAccreditation[0] : "",
    specialities: profile ? profile.specialities[0] : "",
  }

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
                    name="firstName"
                    value={values.firstName}
                    label="First Name"
                    fullWidth
                    onChange={handleChange}
                  />
                </CCol>
                <CCol lg={2} />
                <CCol lg={5}>
                  <MInput
                    id="standard-basic"
                    name="lastName"
                    label="Last Name"
                    value={values.lastName}
                    fullWidth
                    onChange={handleChange}
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol lg={5}>
                  <MInput
                    id="standard-basic"
                    name="phoneNumber"
                    label="Phone Number"
                    value={values.phoneNumber}
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
                    value={values.city}
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
                    value={values.state}
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
                          onChange={(e) => {
                            handleChange("gender")(e.target.value)
                          }}
                          checked={values.gender === "woman"}
                        />
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <MRadio
                          value="man"
                          label="Man"
                          checked={values.gender === "man"}
                          onChange={(e) => {
                            handleChange("gender")(e.target.value)
                          }}
                        />
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <MRadio
                          value="non-binary"
                          label="Non-binary"
                          checked={values.gender === "non-binary"}
                          onChange={(e) => {
                            handleChange("gender")(e.target.value)
                          }}
                        />
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <MRadio
                          value="transgender"
                          label="Transgender"
                          checked={values.gender === "transgender"}
                          onChange={(e) => {
                            handleChange("gender")(e.target.value)
                          }}
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
                    value={getSelectedOptions(CERTIFICATES, values.specialities)}
                    onChange={(options) => {
                      handleChange("specialities")(
                        options ? options.map((opt) => opt.value).join(",") : ""
                      )
                    }}
                    className="m-select mb-2"
                    placeholder="Preferred Trainings"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol lg={12}>
                  <MSelect
                    options={CERTIFICATES}
                    isMulti
                    className="m-select mb-2"
                    value={getSelectedOptions(
                      CERTIFICATES,
                      values.trainingAccreditation
                    )}
                    onChange={(options) => {
                      handleChange("trainingAccreditation")(
                        options ? options.map((opt) => opt.value).join(",") : ""
                      )
                    }}
                    placeholder="Select Certification"
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

export default ProfileModal
