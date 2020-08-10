import React from 'react'
import { CButton, CLink, CCol, CCardBody, CCard, CRow } from "@coreui/react"
import { useDispatch, useSelector } from "react-redux"
import CIcon from "@coreui/icons-react"

import AvatarUploader from "views/member/profile/AvatarUploader"
import SessionTable from './SessionTable'

const AccountPage = () => {
	const profile = useSelector((state) => state.auth.profile)

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
                  <CIcon name="cu-location-pin" width="15" className="mr-1" />
                  {profile
                    ? `${profile.city}, ${profile.state}`
                    : "Add Your Location"}
                </p>
              </div>
						</CCardBody>
					</CCard>
				</CCol>
				<CCol lg={9}>
					<CCard>
						<CCardBody>
							<SessionTable/>
            </CCardBody>
          </CCard>
				</CCol>
			</CRow>
		</div>
	)
}


export default AccountPage