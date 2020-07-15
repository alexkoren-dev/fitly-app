import React, { lazy } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CButton, CCardHeader, CCard, CCardBody } from "@coreui/react"
import CIcon from "@coreui/icons-react"


const SessionCaneldar = () => {
  return (
    <CCard className="shadow">
      <CCardBody>
        <Calendar
          showDoubleView={false}
          value={[new Date('2020-07-21'), new Date('2020-07-11')]}
        />
      </CCardBody>
    </CCard>
  )
}

export default SessionCaneldar
