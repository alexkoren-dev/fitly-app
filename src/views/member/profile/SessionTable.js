import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import moment from "moment"
import UserAvatar from "assets/img/user-avatar.png"
import { CButton, CCardHeader, CCard, CCardBody } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Table, Popover } from "antd"
import { WorkoutActions } from "services/global"
import CConfirmAlert from "components/confirmAlert"

const WORKOUT_STATUS = {
  active: "Upcoming",
}

const SessionTable = ({ profile }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const workouts = useSelector((state) => state.workouts.workoutSessions)

  useEffect(() => {
    if (profile) {
      setLoading(true)
      dispatch(WorkoutActions.getWorkOutSessions(profile.userId)).finally(() => {
        setLoading(false)
      })
    }
  }, [profile])

  const cancelSession = (id) => {
    CConfirmAlert(
      dispatch,
      WorkoutActions.cancelWorkoutSession(id),
      "Are you sure want to delete this workout session?"
    )
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
      title: "EARNINGS",
      dataIndex: "perUserCharge",
      render: (perUserCharge) => `$${perUserCharge} / user`,
    },
    {
      title: "WORKOUT TYPE",
      dataIndex: "typeDetails",
    },
    {
      title: "ACTIONS",
      key: "action",
      dataIndex: "_id",
      render: (id) => (
        <Popover
          placement="left"
          content={() => (
            <div className="action-buttons">
              <CButton color="primary" className="btn-pill mb-1">
                JOIN SESSION
              </CButton>
              <br />
              <Link to={`/user/workout/${id}`}>
                <CButton color="primary" className="btn-pill button-bg-dark mb-1">
                  EDIT SESSION
                </CButton>
              </Link>
              <br />
              <CButton
                color="danger"
                className="btn-pill"
                onClick={() => cancelSession(id)}
              >
                CANCEL SESSION
              </CButton>
            </div>
          )}
          trigger="click"
        >
          <i
            className="fa fa-ellipsis-h"
            style={{ fontSize: 30, color: "#707070" }}
          />
        </Popover>
      ),
    },
  ]

  return (
    <CCard className="shadow">
      <CCardBody>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <CIcon name="cuCalendar" width="38" />
          <h3 className="text-secondary text-center ml-2 mb-0">
            <strong>LIVE WORKOUT SESSIONS</strong>
          </h3>
        </div>
        <Table
          columns={columns}
          key={(record) => record._id}
          dataSource={workouts}
          loading={loading}
          className="session-table"
          scroll={{ x: 800 }}
        />
      </CCardBody>
    </CCard>
  )
}

export default SessionTable
