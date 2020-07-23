import React from "react"
import { CFooter, CLink } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import logoWhite from "assets/img/logo-white.svg"

const TheFooter = () => {
  return (
    <CFooter fixed={false} className="static-footer py-5 px-5">
      <div className="d-flex flex-wrap justify-content-between">
        <div className="d-flex justify-content-start" style={{flex: 1}}>
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
        </div>
       
        <div className="text-center mx-auto">
          <CLink href="/">
            <img src={logoWhite} width="150" height="89" />
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
