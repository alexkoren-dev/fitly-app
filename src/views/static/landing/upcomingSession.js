import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AuthActions, StripeActions } from "services/global"
import moment from "moment"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { CButton, CLink, CCol, CCardBody, CCard, CRow } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import UserAvatar from "assets/img/user-avatar.png"

import IndoorBike from "assets/img/IndoorBike.svg"
import Elliptical from "assets/img/Elliptical.svg"
import IndoorRun from "assets/img/IndoorRun.svg"
import IndoorWalk from "assets/img/IndoorWalk.svg"
import HIITWorkout from "assets/img/HIITWorkout.svg"
import Core from "assets/img/core.svg"
import Cross from "assets/img/cross.svg"
import Pilate from "assets/img/pilate.svg"
import Kick from "assets/img/kick.svg"
import Yoga from "assets/img/yoga.svg"
import Dance from "assets/img/dance.svg"
import JumpingRope from "assets/img/jumping-rope.svg"
import Weight from "assets/img/weight.svg"

import Loader from "components/loader"

const WORKOUT_TYPES = {
  "Indoor Cycle": IndoorBike,
  Elliptical: Elliptical,
  "Indoor Run": IndoorRun,
  "Indoor Walk": IndoorWalk,
  "Jump Rope": JumpingRope,
  "HIIT Workout": HIITWorkout,
  dance: Dance,
  boxing: Kick,
  "Weight Training": Weight,
  "Core Training": Core,
  "Cross Training": Cross,
  yoga: Yoga,
  Pilates: Pilate,
}

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 4 },
}

const generateRating = (rate) => {
  let items = []

  for (var y = 0; y < Math.round(rate); y++)
    items.push(
      <CIcon
        key={y}
        name="cuThumbsUp"
        className="thumbsup-yellow"
        width="24"
        height="20"
      />
    )

  for (var i = 0; i < 5 - Math.round(rate); i++)
    items.push(
      <CIcon
        key={i + 5}
        name="cuThumbsUp"
        className="thumbsup"
        width="24"
        height="20"
      />
    )

  return items
}

const CardItem = ({ workout, is_authed, openLoginModal, openStripeModal }) => (
  <CCard className="fit-card">
    <CCardBody>
      <div className="fit-type text-center" style={{ maxWidth: 70 }}>
        <img
          src={WORKOUT_TYPES[workout && workout.typeDetails]}
          width={40}
          height={50}
        />
        <p className="fit-title text-grey" style={{ textTransform: "capitalize" }}>
          {workout && workout.typeDetails}
        </p>
      </div>
      {workout &&
        workout.paymentInfo &&
        workout.paymentInfo.length === workout.totalUserLimit && (
          <div className="position-absolute book-button">
            <CButton color="danger px-4 btn-pill">FULLY BOOKED</CButton>
          </div>
        )}
      <div className="text-center card-content">
        <img
          src={
            workout.trainerDetails.profileImage
              ? workout.trainerDetails.profileImage.url
              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          }
          className="c-avatar-img"
          width="93"
          height="93"
        />
        <p className="user-name mb-1">{`${workout.trainerDetails.firstName} ${workout.trainerDetails.lastName}`}</p>
        <div className="d-flex justify-content-center">
          {generateRating(workout.trainerDetails.overAllRating)}
        </div>
        <p className="session mt-1">
          {workout.trainerDetails.totalSessionCompleted} Sessions
        </p>
        <ul>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuUserOutline" width="23" height="23" />
              </div>
              <p className="content mb-0">
                {workout && workout.paymentInfo && workout.paymentInfo.length}{" "}
                Participants{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuClock" width="23" height="23" />
              </div>
              <p className="content mb-0">
                {moment(new Date(workout.scheduledTime)).format("ddd MMM YY")} |{" "}
                {moment(new Date(workout.scheduledTime)).format("hh:mm A")} -{" "}
                {moment(new Date(workout.scheduledTime))
                  .add(workout.duration, "minutes")
                  .format("hh:mm A")}{" "}
                {workout.timezone}{" "}
              </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuMoney" width="23" height="23" />
              </div>
              <p className="content mb-0">${workout.perUserCharge} / Hr </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuRegister" width="23" height="23" />
              </div>
              <p className="content mb-0">{workout && workout.requirement}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        <CButton
          className="button-bg-light btn-pill m-1 px-4"
          disabled={
            workout &&
            workout.paymentInfo &&
            workout.paymentInfo.length === workout.totalUserLimit
          }
          onClick={() => openStripeModal(workout)}
        >
          COUNT ME IN
        </CButton>
        {is_authed ? (
          <CLink to={`/user/${workout.trainerDetails.id}`}>
            <CButton className="button-bg-dark btn-pill m-1 px-4">
              LEARN MORE
            </CButton>
          </CLink>
        ) : (
          <CButton
            className="button-bg-dark btn-pill m-1 px-4"
            onClick={() => openLoginModal()}
          >
            LEARN MORE
          </CButton>
        )}
      </div>
    </CCardBody>
  </CCard>
)

const UpcomingSession = () => {
  const [loading, setLoading] = useState(false)
  const [workouts, setSession] = useState([])

  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {}, [auth])

  const openLoginModal = () => {
    dispatch(AuthActions.openLoginModal())
  }

  const openStripeModal = (workout) => {
    if (auth.is_authed) dispatch(StripeActions.openStripeModal(workout))
    else openLoginModal()
  }

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
      key={auth.is_authed}
    >
      {workouts.map((wo, key) => (
        <CardItem
          key={key}
          onDragStart={handleOnDragStart}
          workout={wo}
          is_authed={auth.is_authed}
          openLoginModal={openLoginModal}
          openStripeModal={openStripeModal}
        />
      ))}
    </AliceCarousel>
  )
}

export default UpcomingSession
