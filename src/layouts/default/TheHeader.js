import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  CHeader,
  CToggler,
  CButton,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CFormGroup,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupText,
  CLabel,
  CInput,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"

const TheHeader = () => {
  return (
    <CHeader className="static-header px-3" fixed={false} style={{ zIndex: 9999 }}>
      <CHeaderBrand className="mr-auto" to="/">
        <CIcon name="logo" height="60" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CFormGroup className="mb-0">
          <div className="controls search-input">
            <CInputGroup>
              <CInput
                id="appendedInput"
                size="16"
                type="text"
                placeholder="Search for a Trainer or live classes"
              />
              <CInputGroupAppend>
                <CInputGroupText>
                  <span className="divider">
                    <CIcon name="cuSearch" width="18" />
                  </span>
                </CInputGroupText>
              </CInputGroupAppend>
            </CInputGroup>
          </div>
        </CFormGroup>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <CButton block className="bg-dark-grey btn-pill">
          <CIcon name="cuUserFill" width="30" height="30" /> Sign In
        </CButton>
        <CButton block color="primary" className="ml-3 mt-0 btn-pill">
          Sign Up
        </CButton>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
