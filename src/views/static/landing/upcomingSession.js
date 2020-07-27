import React, { useEffect, useState } from "react"
import { AuthActions } from "services/global"
import moment from "moment"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { CButton, CLink, CCol, CCardBody, CCard, CRow } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import UserAvatar from "assets/img/user-avatar.png"
import Loader from "components/loader"

const responsive = {
  0: { items: 1 },
  1024: { items: 4 },
}

const CardItem = ({
  registeredUsers,
  duration,
  scheduledTime,
  totalUserLimit,
  requirement,
  perUserCharge,
  type,
  timezone,
}) => (
  <CCard className="fit-card">
    <CCardBody>
      <div className="fit-type text-center">
        <CIcon name="cuDance" width={30} height={40} />
        <p className="fit-title text-grey" style={{ textTransform: "capitalize" }}>
          {type}
        </p>
      </div>
      {registeredUsers.length === totalUserLimit && (
        <div className="position-absolute book-button">
          <CButton color="danger px-4 btn-pill">FULLY BOOKED</CButton>
        </div>
      )}
      <div className="text-center card-content">
        <img src={UserAvatar} className="c-avatar-img" width="93" height="93" />
        <p className="user-name mb-1">Joshua Wilson</p>
        <div className="d-flex justify-content-center">
          <CIcon
            name="cuThumbsUp"
            className="thumbsup-yellow"
            width="24"
            height="20"
          />
          <CIcon
            name="cuThumbsUp"
            className="thumbsup-yellow"
            width="24"
            height="20"
          />
          <CIcon
            name="cuThumbsUp"
            className="thumbsup-yellow"
            width="24"
            height="20"
          />
          <CIcon
            name="cuThumbsUp"
            className="thumbsup-yellow"
            width="24"
            height="20"
          />
          <CIcon name="cuThumbsUp" className="thumbsup" width="24" height="20" />
        </div>
        <p className="session mt-1">225K Sessions</p>
        <ul>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuUserOutline" width="23" height="23" />
              </div>
              <p className="content mb-0">{registeredUsers.length} Participants </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuClock" width="23" height="23" />
              </div>
              <p className="content mb-0">
                {moment(new Date(scheduledTime)).format("ddd MMM DD")} |{" "}
                {moment(new Date(scheduledTime)).format("h:m A")} -{" "}
                {moment(new Date(scheduledTime))
                  .add(duration, "minutes")
                  .format("h:m A")}{" "}
                {timezone}{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuMoney" width="23" height="23" />
              </div>
              <p className="content mb-0">${perUserCharge} / Hr </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuRegister" width="23" height="23" />
              </div>
              <p className="content mb-0">{requirement}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        <CButton className="button-bg-light btn-pill m-1 px-4">COUNT ME IN</CButton>
        <CButton className="button-bg-dark btn-pill m-1 px-4">LEARN MORE</CButton>
      </div>
    </CCardBody>
  </CCard>
)

const UpcomingSession = () => {
  const [loading, setLoading] = useState(false)
  const [workouts, setSession] = useState([])

  const handleOnDragStart = (e) => e.preventDefault()

  useEffect(() => {
    setLoading(true)
    AuthActions.getAllWorkOuts()
      .then((res) => {
        setSession(res.workouts.filter((wo) => wo.status === "active"))
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  if (loading)
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: 200 }}
      >
        <Loader color="#5063EE" />
      </div>
    )

  return (
    <AliceCarousel
      responsive={responsive}
      fadeOutAnimation={true}
      startIndex={0}
      autoPlay={true}
      autoPlayInterval={3000}
      mouseTrackingEnabled
      buttonsDisabled={true}
    >
      {workouts.map((wo, key) => (
        <CardItem key={key} onDragStart={handleOnDragStart} {...wo} />
      ))}
    </AliceCarousel>
  )
}

export default UpcomingSession
