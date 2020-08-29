import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"
import moment from 'moment'
import {
  CButton,
  CCol,
  CRow,
  CModal,
  CModalBody,
  CModalHeader,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"

import Loader from "components/Loader"

import AuthActions from "services/auth"

// import "./style.scss"
import Logo from 'components/Logo'

import CalenarIcon from 'assets/img/calendar.svg'
import TelevisionIcon from 'assets/img/television.svg'
import PeopleIcon from 'assets/img/user.svg'


const JoinModal = ({ openModal, closeModal, session }) => {
  const dispatch = useDispatch()
  const [joining, setJoining] = useState(false)
  const [password, setPassword] = useState("")
  const [token, setToken] = useState(null)

  const joinRoom = () => {
    setJoining(true)
    setToken('11111111')
    setJoining(false)
  }

  return (
    <CModal
      show={openModal}
      onClose={closeModal}
      size="lg"
      color="primary"
      className="profile_modal"
    >
      <CModalHeader closeButton></CModalHeader>
      <CModalBody className="pt-0 pb-4 pl-3 pr-3 pb-5 bg-primary">
        <Link className="ml-3" to="/">
          <Logo white/>
        </Link>
        {
          !session?<p className="text-center text-white mt-5">No Session Data</p>:
          <CRow className="mt-4 mb-5">
            <CCol lg={10} className="mx-auto">
              <div className="d-flex align-items-center border-bottom-white pb-2 px-3 mb-5">
                <div className="text-center" style={{width: 50}}><img src={CalenarIcon} width="30"/></div>
                <div className="ml-4">
                  <p className="text-white mb-0"><b>
                    {moment(new Date(session.scheduledTime)).format('ddd, MMM YY')}</b></p>
                  <p className="text-white mb-0">
                    {moment(new Date(session.scheduledTime)).format("hh:mm A")} -{" "}
                    {moment(new Date(session.scheduledTime))
                      .add(session.duration, "minutes")
                      .format("hh:mm A")}{" "}
                    {session.timezone}{" "}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center border-bottom-white pb-2 px-3 mb-5">
                <div className="text-center" style={{width: 50}}>
                  <img src={TelevisionIcon} width="50"/>
                </div>
                <div className="ml-4 d-flex align-items-center justify-content-between flex-wrap" style={{flex: 1}}>
                  <div className="mr-4">
                    <p className="text-white mb-0">
                      <b>
                      Virtual Class Pass (Only Join on the schedule Date)
                      </b>
                    </p>
                    <p className="text-white mb-1">
                      Meet.zoom.com/urm-shebfbkfklf-jdhydbdnmfm
                    </p>
                  </div>
                  <CButton color="success" className="btn-pill join-btn px-3" onClick={() => joinRoom()}>
                    {joining ? (
                        <Loader />
                      ):'Join'
                    }
                  </CButton>
                </div>
              </div>
              <div className="d-flex align-items-center border-bottom-white pb-2 px-3">
                <div className="text-center" style={{width: 50}}>
                  <img src={PeopleIcon} width="35"/>
                </div>
                <div className="ml-4">
                  <p className="text-white mb-0">
                    <b>
                    Total Participant 
                    </b>
                  </p>
                  <p className="text-white mb-0">{session.paymentInfo.length}</p>
                </div>
              </div>
            </CCol>
          </CRow>
        }
      </CModalBody>
    </CModal>
  )
}

export default JoinModal
