import React, { lazy } from "react"
import UserAvatar from "assets/img/user-avatar.png"
import { CButton, CCardHeader, CCard, CCardBody } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Table, Popover } from 'antd'

const columns = [
  {
    title: 'STATUS',
    dataIndex: 'status',
    render: status => <div className={`status-badge ${status}`}>{status}</div>
  },
  {
    title: 'DATE & TIME',
    dataIndex: 'date',
    render: date => date.toDateString(),
    sorter: (a, b) => a.date - b.date,
  },
  {
    title: 'DURATION',
    dataIndex: 'duration',
  },
  {
    title: 'USER REGISTERED',
    dataIndex: 'user',
    render: user => `${user} Participants`
  },
  {
    title: 'EARNINGS',
    dataIndex: 'earning',
    render: earning => `$${earning}`
  },
  {
    title: 'WORKOUT TYPE',
    dataIndex: 'workout',
  },
  {
    title: 'ACTIONS',
    key: 'action',
    render: () => 
      <Popover placement="left" content={() => 
      	<div className="action-buttons">
      		<CButton color="primary" className="btn-pill mb-1">JOIN SESSION</CButton><br/>
      		<CButton color="primary" className="btn-pill button-bg-dark mb-1">EDIT SESSION</CButton><br/>
      		<CButton color="danger" className="btn-pill">CANCEL SESSION</CButton>
      	</div>
      } trigger="click">
        <i className="fa fa-ellipsis-h" style={{fontSize: 30, color: '#707070'}}/>
      </Popover>,
  }
]

const data = [
  {
  	key: 1,
  	status: 'Upcoming',
  	date: new Date(),
  	duration: 450,
  	user: 89,
  	earning: 300,
  	workout: "Strength Traning",
  },
  {
  	key: 2,
  	status: 'Completed',
  	date: new Date(),
  	duration: 450,
  	user: 89,
  	earning: 300,
  	workout: "Strength Traning",
  },
  {
  	key: 3,
  	status: 'Upcoming',
  	date: new Date(),
  	duration: 450,
  	user: 89,
  	earning: 300,
  	workout: "Strength Traning",
  }
]

const SessionTable = () => {
  return (
    <CCard className="shadow">
      <CCardBody>
      	<div className="d-flex align-items-center justify-content-center mb-3">
			<CIcon name="cuCalendar" width="38"/>
			<h3 className="text-secondary text-center ml-2 mb-0"><strong>LIVE WORKOUT SESSIONS</strong></h3>
		</div>
       	<Table columns={columns} dataSource={data} className="session-table"/>
      </CCardBody>
    </CCard>
  )
}

export default SessionTable
