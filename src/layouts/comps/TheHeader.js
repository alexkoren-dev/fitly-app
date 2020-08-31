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
  CForm
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import AuthActions from "services/auth"
import { Link, withRouter } from "react-router-dom"

import HomeIcon from 'assets/img/browser.svg'
import ProfileIcon from 'assets/img/person.svg'
import Account from 'assets/img/gear.svg'
import LogoutIcon from 'assets/img/exit.svg'

import CLogo from 'components/CLogo'
import SearchInput from 'components/SearchInput'

const TheHeader = ({ fixed, shadow, bgColor, history }) => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const profile = auth.profile
  const user_type = (auth.userInfo || {}).userType

  const openLoginModal = () => {
    dispatch(AuthActions.openLoginModal())
  }

  const logout = () => {
    dispatch(AuthActions.logOut())
  }

  return (
    <CHeader
      className={`static-header px-3 ${shadow ? "shadow" : ""}`}
      fixed={fixed || false}
      style={{ zIndex: 999, backgroundColor: bgColor || "transparent" }}
    >
      <div className="d-flex justify-content-between w-100">
        <CHeaderBrand className="mx-2" to="/">
          <CLogo/>
        </CHeaderBrand>

        <CHeaderNav className="d-sm-down-none" style={{flex: 1}}>
          <SearchInput history={history}/>
        </CHeaderNav>

        <CHeaderNav className="px-3">
          {auth && auth.is_authed ? (
            <>
              <CHeaderNav className="d-md-down-none mr-auto c-menus h-100">
                <CHeaderNavItem className="px-3 h-100">
                  <CHeaderNavLink to="/home">
                    <div className="d-flex align-items-center mx-auto justify-content-center flex-column">
                      <CIcon name="cu-home" height="30" />
                      Home
                    </div>
                  </CHeaderNavLink>
                </CHeaderNavItem>
                {
                  user_type === 'personal-trainer' && 
                    <CHeaderNavItem className="px-3 h-100">
                      <CHeaderNavLink to="/user/profile">
                        <div className="d-flex align-items-center mx-auto justify-content-center flex-column">
                          <CIcon name="cu-person" height="30" />
                          Profile
                        </div>
                      </CHeaderNavLink>
                    </CHeaderNavItem>
                }
                <CHeaderNavItem className="px-3 h-100">
                  <CHeaderNavLink to="/user/account">
                    <div className="d-flex align-items-center mx-auto justify-content-center flex-column">
                      <CIcon name="cil-cog" height="30" />
                      Account
                    </div>
                  </CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className="px-3 h-100">
                  <CHeaderNavLink onClick={() => logout()}>
                    <div className="d-flex align-items-center mx-auto justify-content-center flex-column">
                      <CIcon name="cu-logout" height="30" />
                      Log out
                    </div>
                  </CHeaderNavLink>
                </CHeaderNavItem>
                
              </CHeaderNav>
              <CDropdown
                inNav
                className="d-md-block d-lg-none c-header-nav-items mx-2"
                direction="down"
              >
                <CDropdownToggle className="c-header-nav-link p-0" caret={true}>
                  <div className="c-avatar mr-2">
                    {profile &&
                    profile.profileImage &&
                    profile.profileImage.url && 
                      <img
                        src={profile.profileImage.url}
                        width="40"
                        height="40"
                        style={{ borderRadius: "50%" }}
                      />
                    }
                  </div>
                  {auth.userInfo && auth.userInfo.username}
                </CDropdownToggle>
                <CDropdownMenu className="p-0" placement="bottom-end">
                  <CDropdownItem to="/home">
                    <CIcon name="cu-home" className="mfe-2" />
                    Home
                  </CDropdownItem>
                  {
                    user_type === 'personal-trainer' && 
                      <CDropdownItem to="/user/profile">
                        <CIcon name="cu-person" className="mfe-2" />
                        Profile
                      </CDropdownItem>
                  }
                  <CDropdownItem to="/user/account">
                    <CIcon name="cil-cog" className="mfe-2" />
                    Account
                  </CDropdownItem>
                  <CDropdownItem onClick={() => logout()}>
                    <CIcon name="cu-logout" className="mfe-2" />
                    Log Out
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </>
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
                <CButton block color="primary" className="ml-3 btn-pill">
                  Sign Up
                </CButton>
              </CLink>
            </>
          )}
        </CHeaderNav>
      </div>
      <CFormGroup className="my-1 d-sm-down-block d-md-none mx-auto w-100">
        <div className="controls search-input" style={{ width: "100%" }}>
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
    </CHeader>
  )
}

export default withRouter(TheHeader)
