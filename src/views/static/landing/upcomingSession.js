import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import WorkoutActions from "services/workouts"
import StripeActions from "services/stripe"
import moment from "moment"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { CButton, CLink, CCol, CCardBody, CCard, CRow } from "@coreui/react"
import CIcon from "@coreui/icons-react"

import CLoader from "components/CLoader"
import WorkoutItem from "components/WorkoutItem"


const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 4 },
}

const UpcomingSession = () => {
  const [loading, setLoading] = useState(false)
  const [workouts, setSession] = useState([])

  const handleOnDragStart = (e) => e.preventDefault()

  useEffect(() => {
    setLoading(true)
    WorkoutActions.getAllWorkOuts()
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
        <CLoader color="#5063EE" />
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
        <WorkoutItem
          key={key}
          onDragStart={handleOnDragStart}
          workout={wo}
        />
      ))}
    </AliceCarousel>
  )
}

export default UpcomingSession
