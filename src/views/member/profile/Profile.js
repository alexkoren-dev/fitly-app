import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CLink, CRow, CCol, CButton } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import "./style.scss"
import { Link } from "react-router-dom"
import { AuthActions } from "services/global"

import AvatarUploader from "./AvatarUploader"
import SessionTable from "./SessionTable"
import SessionCalendar from "./SessionCalendar"
import Gallery from "./Gallery"


const Profile = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.auth.profile)

  useEffect(() => {
    dispatch(AuthActions.getUserProfile())
  }, [])

  return (
    <div className="profile-page p-4">
      <CRow>
        <CCol xs="12">
          <div className="profile-bar bg-primary text-white p-4">
            <CRow>
              <CCol lg={2}>
                <div className="text-center">
                  <div style={{marginTop: -80}}>
                    <AvatarUploader avatar={profile.profileImage}/>
                  </div>
                  <div className="mt-2">
                    <h4><strong>Joshua Wilson</strong></h4>
                    <p className="d-flex align-items-center justify-content-center">
                      <CIcon name="cu-location-pin" width="15" className="mr-1"/> Manchester, UK </p>
                  </div>
                </div>
              </CCol>
              <CCol lg={8}>
                <div className="d-flex align-items-center">
                  <p className="d-flex align-items-center justify-content-center">
                    <CIcon name="cu-sports" width="30" height="30" className="mr-2"/> 23 Sessions Hosted</p>
                  <div className="v-divider"/>
                  <p className="d-flex align-items-center justify-content-center">
                  <CIcon name="cu-star" width="30" height="25" className="mr-2"/><span className="pt-1">4.5 Stars</span></p>
                  <div className="v-divider"/>
                  <p className="d-flex align-items-center justify-content-center">
                  <CIcon name="cu-certificate" width="25" height="25" className="mr-2"/>
                    <span className="pt-1">ACSM Certified Personal Trainer</span></p>
                </div>
              </CCol>
              <CCol lg={2} className="d-flex justify-content-end align-items-end">
                <CButton
                  color="primary"
                  variant="outline"
                  className="btn-pill px-3 mt-3 text-white border-white"
                  style={{height: 40}}
                >
                  <CIcon name="cu-pencil" width="25" height="25" className="mr-1"/>  Edit Profile
                </CButton>
              </CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>
      <div className="p-5">
        <CRow>
          <CCol lg={9}>
            <SessionTable/>
          </CCol>
          <CCol lg={3}>
            <div className="bg-primary text-white text-center p-4 mb-5" style={{borderRadius: 20}}>
              <div className="plus-icon"><i className="fa fa-plus"/></div>
              <h5 className="pt-3"><strong>ADD WORKOUT SESSION</strong></h5>
            </div>
            <SessionCalendar/>
          </CCol>
        </CRow>
        <CRow className="mt-5">
          <CCol lg={12}>
            <Gallery/>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Profile
