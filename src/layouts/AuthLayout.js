import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { CContainer, CFade } from "@coreui/react"


const AuthLayout = ({ children }) => {
  return (
    <div className="c-app c-default-layout">
      <CFade>
        {children}
      </CFade>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.any,
}

export default AuthLayout
