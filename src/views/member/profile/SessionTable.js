import React, { lazy } from "react"
import UserAvatar from "assets/img/user-avatar.png"
import { CButton, CCardHeader, CCard, CCardBody } from "@coreui/react"
import CIcon from "@coreui/icons-react"


const SessionTable = () => {
  return (
    <CCard className="shadow">
      <CCardBody>
        <h3 className="text-secondary text-center"><strong>LIVE WORKOUT SESSIONS</strong></h3>
      </CCardBody>
    </CCard>
  )
}

export default SessionTable
