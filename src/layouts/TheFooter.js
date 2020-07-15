import React from "react"
import { CFooter, CLink } from "@coreui/react"
import CIcon from "@coreui/icons-react"

const TheFooter = () => {
  return (
    <CFooter fixed={false} className="static-footer py-5 px-5">
      <div className="d-flex flex-wrap pl-3">
        <div className="menu">
          <p className="menu-title">Link Header</p>
          <ul>
            <li>
              <CLink>Link 1</CLink>
            </li>
            <li>
              <CLink>Link 2</CLink>
            </li>
            <li>
              <CLink>Link 3</CLink>
            </li>
          </ul>
        </div>
        <div className="menu">
          <p className="menu-title">Link Header</p>
          <ul>
            <li>
              <CLink>Link 1</CLink>
            </li>
            <li>
              <CLink>Link 2</CLink>
            </li>
            <li>
              <CLink>Link 3</CLink>
            </li>
          </ul>
        </div>
        <div className="menu">
          <p className="menu-title">Link Header</p>
          <ul>
            <li>
              <CLink>Link 1</CLink>
            </li>
            <li>
              <CLink>Link 2</CLink>
            </li>
            <li>
              <CLink>Link 3</CLink>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1 }}></div>
        <div className="menu text-center">
          <CLink href="/">
            <CIcon name="logo" height="89" alt="Logo" />
          </CLink>
          <p className="">Company Tagline Comes Here </p>
          <ul className="mt-4 d-flex justify-content-center c-header-nav">
            <li>
              <CLink>
                <CIcon name="cuFacebook" width="55" height="55" />
              </CLink>
            </li>
            <li>
              <CLink>
                <CIcon name="cuYoutube" width="55" height="55" />
              </CLink>
            </li>
            <li>
              <CLink>
                <CIcon name="cuLoom" width="55" height="55" />
              </CLink>
            </li>
            <li>
              <CLink>
                <CIcon name="cuTwitter" width="55" height="55" />
              </CLink>
            </li>
            <li>
              <CLink>
                <CIcon name="cuLinkdln" width="55" height="55" />
              </CLink>
            </li>
          </ul>
        </div>
      </div>

      <p className="mb-0">© 2020 Fitnezz Co. LLC . All rights reserved.</p>
    </CFooter>
  )
}

export default React.memo(TheFooter)
