import React, { useState, useEffect } from "react"
import { CButton, CLink, CCol, CCardBody, CCard, CRow } from "@coreui/react"
import { Tabs, Alert } from "antd"
import { useDispatch, useSelector } from "react-redux"
import Loader from "components/loader"
import CIcon from "@coreui/icons-react"
import { AuthActions } from "services/global"

import AvatarUploader from "views/member/profile/AvatarUploader"
import SessionTable from "./SessionTable"
import AccountForm from "./AccountForm"

import gymIcon from "assets/img/gym.svg"

const { TabPane } = Tabs

const AccountPage = (props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const profile = useSelector((state) => state.auth.profile)
  const user = useSelector((state) => state.auth.userInfo)
  const tab = props.match.params.tab

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
    <div className="account-page p-4">
      <CRow>
        <CCol lg={3}>
          <CCard>
            <CCardBody>
              <AvatarUploader
                avatar={profile && profile.profileImage}
                editable={true}
              />
              <div className="mt-2">
                <h5 className="text-center text-dark">
                  <strong>
                    {profile
                      ? `${profile.firstName} ${profile.lastName}`
                      : "Add Your Name"}
                  </strong>
                </h5>
                <p className="d-flex align-items-center justify-content-center">
                  <i className="fa fa-map-marker mr-2" />
                  {profile
                    ? `${profile.city}, ${profile.state}`
                    : "Add Your Location"}
                </p>
                <hr className="mt-5 mx-5" />
                <p className="text-center d-flex align-items-center justify-content-center">
                  <img src={gymIcon} />
                  <span className="text-primary text-bold ml-2 mr-1">
                    {(profile && profile.totalSessionCompleted) || 0}{" "}
                  </span>
                  Workouts Completed
                </p>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={9}>
          <CCard>
            <CCardBody>
              <Tabs
                defaultActiveKey={tab}
                onChange={(val) => {
                  props.history.push(`/user/account/${val}`)
                }}
              >
                <TabPane tab="Account Settings" key="settings">
                  <AccountForm profile={profile} user={user} />
                </TabPane>
                <TabPane tab="My Workouts" key="workouts">
                  <SessionTable />
                </TabPane>
                <TabPane tab="My Favorites" key="favorites">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Billings" key="billings">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default AccountPage
