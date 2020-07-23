import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CLink, CRow, CCol, CButton } from "@coreui/react"
import CIcon from "@coreui/icons-react"

import { Link } from "react-router-dom"
import { AuthActions } from "services/global"
import Loader from "components/loader"

import AvatarUploader from "./AvatarUploader"
import SessionTable from "./SessionTable"
import SessionCalendar from "./SessionCalendar"
import Gallery from "./Gallery"
import ProfileModal from "./profileModal"

import "./style.scss"

const Profile = (props) => {
  const dispatch = useDispatch()
  const userId = props.match.params.id

  const [toggleProfile, setToggleProfile] = useState(false)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    setLoading(true)
    AuthActions.getUserProfile(userId).then((res) => {
      setProfile(res.profile)
      setLoading(false)
    })
  }, [])

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
              <CCol lg={3}>
                <div className="text-center">
                  <div style={{ marginTop: -80 }}>
                    <AvatarUploader
                      avatar={profile && profile.profileImage}
                      editable={false}
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
              <CCol lg={9}>
                <div className="d-flex align-items-center">
                  <p className="d-flex align-items-center justify-content-center">
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
                  <p className="d-flex align-items-center justify-content-center">
                    <CIcon name="cu-star" width="30" height="25" className="mr-2" />
                    <span className="pt-1">
                      {profile && profile.overAllRating
                        ? `${profile.overAllRating} Stars`
                        : "No Ratings"}
                    </span>
                  </p>
                  <div className="v-divider" />
                  <p className="d-flex align-items-center justify-content-center">
                    <CIcon
                      name="cu-certificate"
                      width="25"
                      height="25"
                      className="mr-2"
                    />
                    <span className="pt-1">ACSM Certified Personal Trainer</span>
                  </p>
                </div>
              </CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>
      <div className="p-4 mt-3">
        <CRow>
          <CCol lg={12}>
            <SessionTable />
          </CCol>
        </CRow>
        <CRow className="mt-5">
          <CCol lg={12}>
            <Gallery
              gallery={profile && profile.gallery}
              owner={false}
              profileId={profile && profile.id}
              username={profile && profile.firstName}
            />
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Profile

// 5f168aee4b646c04b88ca963
