import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import moment from "moment"
import UserAvatar from "assets/img/user-avatar.png"
import { CButton, CCardHeader, CCard, CCardBody } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Table, Popover } from "antd"
import WorkoutActions from "services/workouts"
import CConfirmAlert from "components/ConfirmAlert"

import MoreIcon from 'assets/img/more-dots.svg'
import NoWorkout from 'assets/img/NOWORKOUT.svg'

const WORKOUT_STATUS = {
  active: "Upcoming",
}

const SessionTable = ({ workouts, mode }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  // const workouts = useSelector((state) => state.workouts.workoutSessions)

  // useEffect(() => {
  //   if (profile) {
  //     setLoading(true)
  //     dispatch(WorkoutActions.getWorkOutSessions(profile.userId)).finally(() => {
  //       setLoading(false)
  //     })
  //   }
  // }, [])

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
          {moment(new Date(scheduledTime)).format("MMM DD, YYYY")}{" "}
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
      title: mode==='user'?"FEES/USER":"EARNINGS",
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
      align: "center",
      dataIndex: "_id",
      render: (id) => 
        {return (mode==='user'?
          <>
            <CButton color="primary" className="btn-pill">SIGN UP</CButton>
            <CButton color="primary" className="btn-pill">VIEW MORE</CButton>
          </>
          :<Popover
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
              <img src={MoreIcon}/>
            </Popover>)
      }
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
        {
          workouts.length > 0 ?
            <Table
              columns={columns}
              key="_id"
              dataSource={workouts}
              loading={loading}
              className="session-table"
              scroll={{ x: 700 }}
            />
          :
          <div className="d-flex align-items-center justify-content-center flex-column">
            <img src={NoWorkout} width="70%" className="mb-3"/>
            <p>
              You have not scheduled any live Training sessions. <br/>
              Create a session and help people LOrem Ispusm 
            </p>
            <CButton color="primary" className="btn-pill mb-4">CREATE SESSION</CButton>
          </div>
        }
      </CCardBody>
    </CCard>
  )
}

export default SessionTable
