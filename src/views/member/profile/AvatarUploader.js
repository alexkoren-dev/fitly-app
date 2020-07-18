import React, { lazy } from "react"
import UserAvatar from "assets/img/user-avatar.png"
import { CButton } from "@coreui/react"
import CIcon from "@coreui/icons-react"

const AvatarUploader = ({ avatar, editable }) => {
  return (
    <div className="cu-avatar-upload">
      {avatar && avatar.url ? (
        <img
          src={avatar.url}
          style={{ maxWidth: 150, width: "100%", height: 150 }}
        />
      ) : (
        <div className="avatar-placeholder d-flex align-items-center justify-content-center">
          <CIcon name="cuUserWhite" width="60" />
        </div>
      )}
      {editable && (
        <CButton color="primary" className="btn-pill p-0">
          <CIcon name="cu-pencil" />
        </CButton>
      )}
    </div>
  )
}

export default AvatarUploader
