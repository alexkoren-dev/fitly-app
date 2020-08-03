import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CLink, CRow, CCol, CButton } from "@coreui/react"
import CIcon from "@coreui/icons-react"

import { Link } from "react-router-dom"
import { AuthActions } from "services/global"
import Loader from "components/loader"
import { CERTIFICATES } from "constants/common"

import AvatarUploader from "./AvatarUploader"
import SessionTable from "./SessionTable"
import SessionCalendar from "./SessionCalendar"
import Gallery from "./Gallery"
import ProfileModal from "./profileModal"

import "./style.scss"

const Profile = ({ props }) => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.auth.profile)

  const [toggleProfile, setToggleProfile] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!profile) {
      setLoading(true)
      dispatch(AuthActions.getOwnerProfile()).finally(() => {
        setLoading(false)
      })
    }
  }, [profile])

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 500 }}
      >
        <Loader color="#5063EE" width="50" height="50" type="TailSpin" />
      </div>
    )

  return (
    <div className="profile-page p-4">
      <CRow>
        <CCol xs="12">
          <div className="profile-bar bg-primary text-white p-4">
            <CRow>
              <CCol lg={2}>
                <div className="text-center">
                  <div style={{ marginTop: -80 }}>
                    <AvatarUploader
                      avatar={profile && profile.profileImage}
                      editable={true}
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-white">
                      <strong>
                        {profile
                          ? `${profile.firstName} ${profile.lastName}`
                          : "Add Your Name"}
                      </strong>
                    </h4>
                    <p className="d-flex align-items-center justify-content-center">
                      <CIcon name="cu-location-pin" width="15" className="mr-1" />
                      {profile
                        ? `${profile.city}, ${profile.state}`
                        : "Add Your Location"}
                    </p>
                  </div>
                </div>
              </CCol>
              <CCol lg={8}>
                <div className="d-flex align-items-center">
                  <p className="d-flex align-items-center justify-content-center my-1">
                    <CIcon
                      name="cu-sports"
                      width="30"
                      height="30"
                      className="mr-2"
                    />{" "}
                    {profile && profile.totalSessionCompleted
                      ? profile.totalSessionCompleted
                      : 0}{" "}
                    Sessions Hosted
                  </p>
                  <div className="v-divider" />
                  <p className="d-flex align-items-center justify-content-center my-1">
                    <CIcon name="cu-star" width="30" height="25" className="mr-2" />
                    <span className="pt-1">
                      {profile && profile.overAllRating
                        ? `${profile.overAllRating} Stars`
                        : "No Ratings"}
                    </span>
                  </p>
                  <div className="v-divider" />
                  <div className="my-1">
                    {profile &&
                    profile.trainingAccreditation[0] !== "" &&
                    profile.trainingAccreditation[0].split(",").length > 0 ? (
                      profile.trainingAccreditation[0].split(",").map((cer, key) => (
                        <p
                          key={key}
                          className="d-flex align-items-center justify-content-start my-1"
                        >
                          <CIcon
                            name="cu-certificate"
                            width="25"
                            height="25"
                            className="mr-2"
                          />
                          <span className="pt-1">
                            {CERTIFICATES.filter((c) => c.value === cer).length >
                              0 &&
                              CERTIFICATES.filter((c) => c.value === cer)[0].label}
                          </span>
                        </p>
                      ))
                    ) : (
                      <p className="d-flex align-items-center justify-content-center mb-0">
                        <CIcon
                          name="cu-certificate"
                          width="25"
                          height="25"
                          className="mr-2"
                        />
                        <span className="pt-1">No Certification</span>
                      </p>
                    )}
                  </div>
                </div>
              </CCol>
              <CCol lg={2} className="d-flex justify-content-end align-items-end">
                <ProfileModal
                  openModal={toggleProfile}
                  closeModal={() => setToggleProfile(false)}
                  profile={profile}
                />
                <CButton
                  color="primary"
                  variant="outline"
                  className="btn-pill px-3 mt-3 text-white border-white"
                  style={{ height: 40 }}
                  onClick={() => setToggleProfile(true)}
                >
                  <CIcon name="cu-pencil" width="25" height="25" className="mr-1" />{" "}
                  {profile ? "Edit" : "Create"} Profile
                </CButton>
              </CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>
      <div className="p-4 mt-3">
        <CRow>
          <CCol lg={9}>
            <SessionTable />
          </CCol>
          <CCol lg={3}>
            <div
              className="bg-primary text-white text-center p-4 mb-5"
              style={{ borderRadius: 20 }}
            >
              <div className="plus-icon">
                <i className="fa fa-plus" />
              </div>
              <h5 className="pt-3 text-white">
                <strong>
                  {profile ? "ADD WORKOUT SESSION" : "CREATE A WORKOUT SESSION"}
                </strong>
              </h5>
            </div>
            <SessionCalendar />
          </CCol>
        </CRow>
        <CRow className="mt-5">
          <CCol lg={12}>
            <Gallery gallery={profile && profile.gallery} owner={true} />
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Profile
