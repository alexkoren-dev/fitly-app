import React from "react"
import { CFooter, CLink, CRow, CCol } from "@coreui/react"
import CIcon from "@coreui/icons-react"

import logoWhite from "assets/img/logo-white.svg"
import facebookIcon from "assets/img/facebook.png"
import instagramIcon from "assets/img/insta2.png"
import twitterIcon from "assets/img/TWITTER.png"
import linkedinIcon from "assets/img/linkedin.png"
import youtubeIcon from "assets/img/youtube.png"

const TheFooter = () => {
  return (
    <CFooter fixed={false} className="static-footer py-5 px-5">
      <CRow>
        <CCol lg={4} md={6} sm={6}>
          <CRow className="pl-4">
            <CCol xs={6}>
              <div className="menu">
                <p className="menu-title">COMPANY</p>
                <ul>
                  <li>
                    <CLink>About us</CLink>
                  </li>
                  <li>
                    <CLink>FAQ</CLink>
                  </li>
                  <li>
                    <CLink>Privacy Policy</CLink>
                  </li>
                </ul>
              </div>
            </CCol>
            <CCol xs={6}>
              <div className="menu">
                <p className="menu-title">PRODUCTS</p>
                <ul>
                  <li>
                    <CLink>Fitness Trainers </CLink>
                  </li>
                  <li>
                    <CLink>Workout Enthusiasts </CLink>
                  </li>
                  <li>
                    <CLink>How it works</CLink>
                  </li>
                </ul>
              </div>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg={6} md={3} sm={1}></CCol>
        <CCol lg={2} md={3} sm={5}>
          <div className="text-center mx-auto">
            <CLink href="/">
              <img src={logoWhite} width="150" height="89" />
            </CLink>
            <p className="">Company Tagline Comes Here </p>
            <ul className="mt-4 d-flex justify-content-center c-header-nav">
              <li>
                <CLink>
                  <img src={facebookIcon} width="33" height="31" />
                </CLink>
              </li>
              <li>
                <CLink>
                  <img src={instagramIcon} width="33" height="31" />
                </CLink>
              </li>
              <li>
                <CLink>
                  <img src={linkedinIcon} width="33" height="31" />
                </CLink>
              </li>
              <li>
                <CLink>
                  <img src={twitterIcon} width="33" height="31" />
                </CLink>
              </li>
              <li>
                <CLink>
                  <img src={youtubeIcon} width="33" height="31" />
                </CLink>
              </li>
            </ul>
          </div>
        </CCol>
      </CRow>
      <p className="mb-0">© 2020 Fitnezz Co. LLC . All rights reserved.</p>
    </CFooter>
  )
}

export default React.memo(TheFooter)
