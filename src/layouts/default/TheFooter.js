import React from "react"
import { CFooter, CLink } from "@coreui/react"
import CIcon from "@coreui/icons-react"

const TheFooter = () => {
  return (
    <CFooter
      fixed={false}
      className="static-footer pt-5 pr-5 pb-3"
      style={{ paddingLeft: "5%" }}
    >
      <div className="d-flex flex-wrap">
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
          <CIcon name="logo" height="89" alt="Logo" />
          <p className="">Company Tagline Comes Here </p>
          <ul className="mt-4 d-flex justify-content-center c-header-nav">
            <li className="mx-4">
              <CLink>Link 1</CLink>
            </li>
            <li className="mx-4">
              <CLink>Link 2</CLink>
            </li>
            <li className="mx-4">
              <CLink>Link 3</CLink>
            </li>
          </ul>
        </div>
      </div>

      <p>© 2020 Fitnezz Co. LLC . All rights reserved.</p>
    </CFooter>
  )
}

export default React.memo(TheFooter)
