import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from "react"
import moment from "moment"
import { CButton, CCardHeader, CCard, CCardBody } from "@coreui/react"
import { AuthActions } from "services/global"
import CIcon from "@coreui/icons-react"
import { Table } from "antd"

const WORKOUT_STATUS = {
  active: "Upcoming",
}

const columns = [
  {
    title: "STATUS",
    dataIndex: "status",
    render: (status) => (
      <div className={`status-badge ${WORKOUT_STATUS[status]}`}>
        {WORKOUT_STATUS[status]}
      </div>
    ),
  },
  {
    title: "DATE & TIME",
    dataIndex: "scheduledTime",
    render: (scheduledTime) => (
      <p className="mb-0">
        {moment(new Date(scheduledTime)).format("ddd MMM YYYY")}{" "}
        {moment(new Date(scheduledTime)).format("h:m A")}
      </p>
    ),
    sorter: (a, b) => a.scheduledTime - b.scheduledTime,
  },
  {
    title: "DURATION",
    dataIndex: "duration",
    align: "center",
  },
  {
    title: "USER REGISTERED",
    dataIndex: "paymentInfo",
    render: (paymentInfo) => `${paymentInfo && paymentInfo.length} Participants`,
  },
  {
    title: "FEES PAID",
    dataIndex: "perUserCharge",
    render: (perUserCharge) => `$${perUserCharge} / user`,
  },
  {
    title: "WORKOUT TYPE",
    dataIndex: "typeDetails",
  },
  {
    title: "LIVE ROOM INFO",
    dataIndex: "_id",
    align: "center",
    render: () => (
      <CButton
        color="primary"
        className="btn-pill"
        style={{ width: 40, height: 40 }}
      >
        <h3 className="text-white mb-0">+</h3>
      </CButton>
    ),
  },
  {
    title: "ACTIONS",
    key: "action",
    width: "120px",
    render: () => (
      <CButton color="danger" className="btn-pill">
        OPT OUT
      </CButton>
    ),
  },
]

const SessionTable = () => {
  const [workouts, setWorkouts] = useState(null)
  const [loading, setLoading] = useState(false)
  const profile = useSelector((state) => state.auth.profile)

  useEffect(() => {
    if (!workouts) {
      setLoading(true)
      AuthActions.getUserWorkouts()
        .then((res) => {
          setWorkouts(res.workouts)
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
        })
    }
  }, [profile])

  return (
    <Table
      columns={columns}
      loading={loading}
      dataSource={workouts || []}
      className="session-table"
      scroll={{ x: 800 }}
    />
  )
}

export default SessionTable