import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { CContainer, CFade } from "@coreui/react"

import { TheFooter, TheHeader } from "./comps"


const StaticLayout = ({ children }) => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <main className="c-main pt-0">
            <CContainer fluid className="p-0">
              <CFade>
                {children}
              </CFade>
            </CContainer>
          </main>
        </div>
        <TheFooter />
      </div>
    </div>
  )
}

StaticLayout.propTypes = {
  children: PropTypes.any,
}

export default StaticLayout
