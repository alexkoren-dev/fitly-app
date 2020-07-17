import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  CHeader,
  CToggler,
  CButton,
  CHeaderBrand,
  CHeaderNav,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CDropdown,
  CImg,
  CLink,
  CFormGroup,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupText,
  CLabel,
  CInput,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { AuthActions } from "services/global"
import { Link } from "react-router-dom"

const TheHeader = ({ auth, logout, fixed, shadow, bgColor }) => {
  const dispatch = useDispatch()

  const openLoginModal = () => {
    dispatch(AuthActions.openLoginModal())
  }

  return (
    <CHeader
      className={`static-header px-3 ${shadow ? "shadow" : ""}`}
      fixed={fixed || false}
      style={{ zIndex: 999, backgroundColor: bgColor || "transparent" }}
    >
      <CHeaderBrand className="mr-auto" to="/">
        <CIcon name="logo" width="125" height="68" alt="Logo" />
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
                    <CIcon name="cuSearch" width="18" height="22" />
                  </span>
                </CInputGroupText>
              </CInputGroupAppend>
            </CInputGroup>
          </div>
        </CFormGroup>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {auth.is_authed ? (
          <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
            <CDropdownToggle className="c-header-nav-link p-0" caret={true}>
              <div className="c-avatar mr-2">
                <CIcon name="cuUserWhite" width="20" />
              </div>
              {auth.userInfo && auth.userInfo.username}
            </CDropdownToggle>
            <CDropdownMenu className="p-0" placement="bottom-end">
              <CDropdownItem href="/user/profile">
                <CIcon name="cil-user" className="mfe-2" />
                Profile
              </CDropdownItem>
              <CDropdownItem onClick={() => logout()}>
                <CIcon name="cil-lock-locked" className="mfe-2" />
                Log Out
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        ) : (
          <>
            <CButton
              block
              color="secondary"
              className="btn-pill d-flex align-items-center justify-content-center"
              onClick={() => {
                openLoginModal()
              }}
            >
              <CIcon name="cuUserFill" width="30" height="30" className="mr-1" />{" "}
              Sign In
            </CButton>
            <CLink href="/signup">
              <CButton block color="primary" className="ml-3 mt-0 btn-pill">
                Sign Up
              </CButton>
            </CLink>
          </>
        )}
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
