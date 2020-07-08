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
import "./style.scss"

import CarouselBackground1 from "assets/img/background-fitly-1.jpg"
import CarouselBackground2 from "assets/img/background-fitly-2.jpg"
import CarouselBackground3 from "assets/img/background-fitly-3.jpg"

import UserAvatar from "assets/img/user-avatar.png"
import UserCard from "assets/img/LEVEL-3-USER-CARD.svg"
import PersonalTrainer from "assets/img/PERSONAL-TRAINER.svg"

const CarouselBackgrounds = [
  CarouselBackground1,
  CarouselBackground2,
  CarouselBackground3,
]

const CarouselItem = ({ index }) => (
  <div
    className="justify-content-center carousel-background"
    style={{ backgroundImage: "url(" + CarouselBackgrounds[index] + ")" }}
  >
    <CRow className="h-100">
      <CCol lg={7} className="h-100">
        <div className="d-flex justify-content-end align-items-center h-100">
          <div className="text-right">
            <h1 className="text-dark">Reach your Fitness Goals Anywhere !!!</h1>
            <p className="text-grey">- Rohit Bahl - Fitness Guru</p>
            <CButton color="primary" className="px-5 py-3 btn-pill">
              Loreum Ipsum
            </CButton>
          </div>
        </div>
      </CCol>
    </CRow>
  </div>
)

const CardItem = () => (
  <CCard className="fit-card m-2">
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
            width="22"
            height="16"
          />
          <CIcon
            name="cuThumbsUp"
            className="thumbsup-yellow"
            width="22"
            height="16"
          />
          <CIcon
            name="cuThumbsUp"
            className="thumbsup-yellow"
            width="22"
            height="16"
          />
          <CIcon
            name="cuThumbsUp"
            className="thumbsup-yellow"
            width="22"
            height="16"
          />
          <CIcon name="cuThumbsUp" className="thumbsup" width="22" height="16" />
        </div>
        <p className="session mt-1">225K Sessions</p>
        <ul>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuUserOutline" width="23" height="23" />
              </div>
              <div className="content">10 Participants </div>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuClock" width="23" height="23" />
              </div>
              <div className="content">MoN June 6 | 4PM - 5PM CST </div>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuMoney" width="23" height="23" />
              </div>
              <div className="content">$20 / Hr </div>
            </div>
          </li>
          <li>
            <div className="d-flex detail-list">
              <div className="icon">
                <CIcon name="cuRegister" width="23" height="23" />
              </div>
              <div className="content">2 LB weights </div>
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
  return (
    <div className="landing-page pb-5">
      <section className="w-100" style={{ marginTop: -89 }}>
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
      <section className="p-5 mt-3">
        <h2 className="text-dark mb-4">
          <strong>UPCOMING SESSIONS</strong>
        </h2>
        <CCarousel animate autoSlide={10000} className="card-carousel">
          <CCarouselInner>
            <CCarouselItem>
              <div className="d-flex justify-content-center">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div className="d-flex justify-content-center">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div className="d-flex justify-content-center">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </div>
            </CCarouselItem>
          </CCarouselInner>
          <CCarouselIndicators />
          <CCarouselControl direction="prev">
            <CIcon name="cil-chevron-left" width={30} />
          </CCarouselControl>
          <CCarouselControl direction="next">
            <CIcon name="cil-chevron-right" width={30} />
          </CCarouselControl>
        </CCarousel>
      </section>

      <section className="p-5" style={{ marginTop: "8%" }}>
        <div className="d-flex justify-content-center">
          <div className="bg-dark-grey px-5 py-4 my-4 w-100 ex-card text-center">
            <img src={PersonalTrainer} />
            <div className="text-left mt-4">
              <h1 className="text-white text-bold mt-2 mb-5">
                LOREUM IPSUM LOREM IPSUM
              </h1>
              <p className="text-white">
                Lorem Ipsum Lorum Ipsum Lorum Ipsum, Loram Ipsum, Loram Ipsum Loram
                Ipsum Loram Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum.
              </p>
              <CButton
                color="secondary"
                variant="outline"
                size="lg"
                className="btn-pill px-5 mt-3 text-white border-white text-bold"
              >
                SIGN UP
              </CButton>
              <p className="mt-3 text-white">
                <CLink className="text-white">Learn more about Lorem Ipsum</CLink>
              </p>
            </div>
          </div>
          <div className="vertical-divider mx-5" />
          <div className="bg-blue-custom px-5 py-4 my-4 w-100 ex-card text-center">
            <img src={UserCard} />
            <div className="text-left mt-4">
              <h1 className="text-white text-bold mt-2 mb-5">
                LOREUM IPSUM LOREM IPSUM
              </h1>
              <p className="text-white">
                Lorem Ipsum Lorum Ipsum Lorum Ipsum, Loram Ipsum, Loram Ipsum Loram
                Ipsum Loram Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum.
              </p>
              <CButton
                color="primary"
                variant="outline"
                size="lg"
                className="btn-pill px-5 mt-3 text-white border-white text-bold"
              >
                SIGN UP
              </CButton>
              <p className="mt-3 text-white">
                <CLink className="text-white">Learn more about Lorem Ipsum</CLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
