import React from "react"
import BillingsTable from "./BillingsTable"
import { CButton, CLink, CCol, CCardBody, CCard, CRow } from "@coreui/react"

import cardIcon from "assets/img/surface1.svg"

const BillingsTab = ({ billings }) => {
  return (
    <div className="billings-page">
      <CRow>
        <CCol lg={8}>
          <BillingsTable />
        </CCol>
        <CCol lg={4}>
          <div className="bg-primary payment-total-card border-radius d-flex py-5 px-4 justify-content-center align-items-center">
            <div className="bg-white border-radius mx-2 p-3 my-2">
              <img src={cardIcon} width="80" />
            </div>
            <div className="m-2">
              <label className="text-white">TOTAL SPEND</label>
              <h1 className="text-white text-bold">$180</h1>
            </div>
          </div>
        </CCol>
      </CRow>
    </div>
  )
}

export default BillingsTab
