import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { CContainer, CFade } from "@coreui/react"

import { TheFooter, TheHeader } from "./comps"
import FixedWelcomeUser from 'components/FixedWelcomeUser'


const AppLayout = ({ children }) => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <TheHeader
          fixed={true}
          shadow={true}
          bgColor="white"
        />
        <FixedWelcomeUser/>
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

AppLayout.propTypes = {
  children: PropTypes.any,
}

export default AppLayout
