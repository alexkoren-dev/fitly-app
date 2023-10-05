import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import WorkoutActions from "services/workouts"
import StripeActions from "services/stripe"
import moment from "moment"
import Slider from "react-slick";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { CButton, CLink, CCol, CCardBody, CCard, CRow } from "@coreui/react"
import CIcon from "@coreui/icons-react"

import CLoader from "components/CLoader"
import WorkoutItem from "components/WorkoutItem"


var carouselSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
};


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
    <div style={{margin: '0 1%'}}>
      <Slider {...carouselSettings}>
        {workouts.map((wo, key) => (
          <div className="px-2" key={key}>
            <WorkoutItem
              onDragStart={handleOnDragStart}
              workout={wo}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default UpcomingSession
