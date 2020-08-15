import React from "react"
import BillingsTable from "./BillingsTable"
import { CButton, CLink, CCol, CCardBody, CCard, CRow } from "@coreui/react"

const BillingsTab = ({ billings }) => {
  return (
    <div className="billings-page">
      <BillingsTable />
    </div>
  )
}

export default BillingsTab
