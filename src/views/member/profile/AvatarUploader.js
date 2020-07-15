import React, { lazy } from "react"
import UserAvatar from "assets/img/user-avatar.png"
import { CButton } from "@coreui/react"
import CIcon from "@coreui/icons-react"


const AvatarUploader = () => {
  return (
    <div className="cu-avatar-upload">
      <img src={UserAvatar} width="150"/>
      <CButton
        color="primary"
        className="btn-pill p-0"
      >
        <CIcon name="cu-pencil"/>
      </CButton>
    </div>
  )
}

export default AvatarUploader
