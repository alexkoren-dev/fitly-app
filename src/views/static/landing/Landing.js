import React, { lazy } from "react"
import {
  CButton,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CLink,
  CCol,
  CCardBody,
  CCard,
  CRow,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./style.scss"

import CarouselBackground1 from "assets/img/background-fitly-1.jpg"
import CarouselBackground2 from "assets/img/background-fitly-2.jpg"
import CarouselBackground3 from "assets/img/background-fitly-3.jpg"

import UserAvatar from "assets/img/user-avatar.png"
import UserCard from "assets/img/LEVEL-3-USER-CARD.svg"
import PersonalTrainer from "assets/img/PERSONAL-TRAINER.svg"

const responsive = {
  0: { items: 1 },
  1024: { items: 4 },
}

const CarouselBackgrounds = [
  CarouselBackground1,
  CarouselBackground2,
  CarouselBackground3,
]

const CarouselItem = ({ index }) => (
  <div className="justify-content-center carousel-background">
    <img src={CarouselBackgrounds[index]} width="100%" />
    <CRow
      className="h-100 position-absolute text-right w-100"
      style={{ top: 0, left: 0 }}
    >
      <CCol xs={7} className="h-100">
        <div className="d-flex justify-content-end align-items-center h-100">
          <div className="text-right">
            <h1 className="text-dark">Reach your Fitness Goals Anywhere !!!</h1>
            <p className="text-grey">- Rohit Bahl - Fitness Guru</p>
            <CButton
              color="primary"
              className="btn-pill"
              style={{ height: 50, width: 200 }}
            >
              Loreum Ipsum
            </CButton>
          </div>
        </div>
      </CCol>
    </CRow>
  </div>
)

const CardItem = () => (
  <CCard className="fit-card">
    <CCardBody>
      <div className="fit-type text-center">
        <CIcon name="cuDance" width={30} height={40} />
        <p className="fit-title text-grey">Dance</p>
      </div>
      <div className="position-absolute book-button">
        <CButton color="danger px-4 btn-pill">FULLY BOOKED</CButton>
      </div>
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
              <p className="content mb-0">10 Participants </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuClock" width="23" height="23" />
              </div>
              <p className="content mb-0">MoN June 6 | 4PM - 5PM CST </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuMoney" width="23" height="23" />
              </div>
              <p className="content mb-0">$20 / Hr </p>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuRegister" width="23" height="23" />
              </div>
              <p className="content mb-0">2 LB weights </p>
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

const Landing = () => {
  const handleOnDragStart = (e) => e.preventDefault()

  return (
    <div className="landing-page pb-5">
      <section className="w-100">
        <CCarousel animate autoSlide={10000} className="img-carousel">
          <CCarouselInner>
            <CCarouselItem>
              <CarouselItem index={0} />
            </CCarouselItem>
            <CCarouselItem>
              <CarouselItem index={1} />
            </CCarouselItem>
            <CCarouselItem>
              <CarouselItem index={2} />
            </CCarouselItem>
          </CCarouselInner>
          <CCarouselIndicators />
        </CCarousel>
      </section>
      <section className="p-4">
        <h2 className="text-dark">
          <strong>UPCOMING SESSIONS</strong>
        </h2>
        <AliceCarousel
          responsive={responsive}
          fadeOutAnimation={true}
          startIndex={0}
          autoPlay={true}
          autoPlayInterval={3000}
          mouseTrackingEnabled
          buttonsDisabled={true}
        >
          <CardItem onDragStart={handleOnDragStart} />
          <CardItem onDragStart={handleOnDragStart} />
          <CardItem onDragStart={handleOnDragStart} />
          <CardItem onDragStart={handleOnDragStart} />
          <CardItem onDragStart={handleOnDragStart} />
          <CardItem onDragStart={handleOnDragStart} />
          <CardItem onDragStart={handleOnDragStart} />
          <CardItem onDragStart={handleOnDragStart} />
        </AliceCarousel>
      </section>

      <section className="py-4 mx-auto" style={{ marginTop: "8%", maxWidth: 1350 }}>
        <div className="d-flex justify-content-between flex-wrap">
          <CRow>
            <CCol lg={6}>
              <div className="bg-dark-grey px-5 py-4 w-100 ex-card text-center">
                <img src={PersonalTrainer} />
                <div className="text-left mt-4">
                  <h1 className="text-white text-bold mt-2 mb-5">
                    LOREUM IPSUM LOREM IPSUM
                  </h1>
                  <p className="text-white">
                    Lorem Ipsum Lorum Ipsum Lorum Ipsum, Loram Ipsum, Loram Ipsum
                    Loram Ipsum Loram Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum.
                  </p>
                  <CLink href="/signup">
                    <CButton
                      color="secondary"
                      variant="outline"
                      size="lg"
                      className="btn-pill px-5 mt-3 text-white border-white text-bold"
                    >
                      SIGN UP
                    </CButton>
                  </CLink>
                  <p className="mt-3 text-white">
                    <CLink className="text-white">
                      Learn more about Lorem Ipsum
                    </CLink>
                  </p>
                </div>
              </div>
            </CCol>
            <CCol lg={6}>
              <div className="bg-blue-custom px-5 py-4 w-100 ex-card text-center">
                <img src={UserCard} />
                <div className="text-left mt-4">
                  <h1 className="text-white text-bold mt-2 mb-5">
                    LOREUM IPSUM LOREM IPSUM
                  </h1>
                  <p className="text-white">
                    Lorem Ipsum Lorum Ipsum Lorum Ipsum, Loram Ipsum, Loram Ipsum
                    Loram Ipsum Loram Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum.
                  </p>
                  <CLink href="/signup">
                    <CButton
                      color="primary"
                      variant="outline"
                      size="lg"
                      className="btn-pill px-5 mt-3 text-white border-white text-bold"
                    >
                      SIGN UP
                    </CButton>
                  </CLink>
                  <p className="mt-3 text-white">
                    <CLink className="text-white">
                      Learn more about Lorem Ipsum
                    </CLink>
                  </p>
                </div>
              </div>
            </CCol>
          </CRow>
        </div>
      </section>
    </div>
  )
}

export default Landing
