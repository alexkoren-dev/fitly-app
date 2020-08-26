import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from "react"
import moment from "moment"
import { CButton, CCardHeader, CCard, CCardBody } from "@coreui/react"
import { AuthActions } from "services/global"
import CIcon from "@coreui/icons-react"
import { Table } from "antd"

import JoinModal from "./JoinModal"

const WORKOUT_STATUS = {
  active: "Upcoming",
}


const SessionTable = () => {
  const [workouts, setWorkouts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [openModal, toggleJoinModal] = useState(false)
  const [selectedSession, selectSession] = useState(null)
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


  const openJoinModal = (row) => {
    selectSession(row)
    toggleJoinModal(true)
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
          className="btn-pill mx-auto d-flex align-items-center justify-content-center"
          style={{ width: 40, height: 40 }}
        >
          <h3 className="text-white mb-0">+</h3>
        </CButton>
      ),
    },
    {
      title: "ACTIONS",
      key: "action",
      width: "130px",
      align: "center",
      render: (cell, row) => (
        <CButton color="danger" className="btn-pill" onClick={() => openJoinModal(row)}>
          OPT OUT
        </CButton>
      ),
    },
  ]

  return (
    <>
      <JoinModal openModal={openModal} closeModal={() => toggleJoinModal(false)} session={selectedSession}/>
      <Table
        columns={columns}
        key={'_id'}
        loading={loading}
        dataSource={workouts || []}
        className="session-table"
        scroll={{ x: 800 }}
      />
    </>
  )
}

export default SessionTable
