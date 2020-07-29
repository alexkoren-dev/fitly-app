import React, { lazy } from "react"
import { useDispatch, useSelector } from "react-redux"
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
import { AuthActions } from "services/global"
import UpcomingSession from "./upcomingSession"
import CarouselBackground1 from "assets/img/background-fitly-1.jpg"
import CarouselBackground2 from "assets/img/background-fitly-2.jpg"
import CarouselBackground3 from "assets/img/background-fitly-3.jpg"

import UserAvatar from "assets/img/user-avatar.png"
import UserCard from "assets/img/LEVEL-3-USER-CARD.svg"
import PersonalTrainer from "assets/img/PERSONAL-TRAINER.svg"
import fitType1 from "assets/img/findyourguru1.jpg"
import fitType2 from "assets/img/findyourguru2.jpg"
import fitType3 from "assets/img/findyourguru3.jpg"
import fitType4 from "assets/img/findyourguru4.jpg"
import yoga from "assets/img/yoga.jpg"
import cardio from "assets/img/aerobic.jpg"
import weight from "assets/img/weight.jpg"
import instgramFeedback from "assets/img/instgram.png"

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

const Landing = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  // Callbacks
  const openModal = () => {
    dispatch(AuthActions.openLoginModal())
  }

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
        <UpcomingSession openModal={openModal} isAuthed={auth.is_authed}/>
      </section>

      <section className="p-4 mx-auto">
        <div>
          <h2 className="text-dark text-center">
            <strong>FIND YOUR FITNEZZ GURU </strong>
          </h2>
          <p className="text-dark text-center">
            This isn’t just a app. It’s a cardio class,, it’s a yoga class, it’s a
            boxing ring. It’s your
            <br />
            New personal group trainer, and it’s so much more.{" "}
          </p>
          <CRow>
            <CCol md={3} xs={6}>
              <img src={fitType1} width="100%" className="mb-4" />
            </CCol>
            <CCol md={3} xs={6}>
              <img src={fitType2} width="100%" className="mb-4" />
            </CCol>
            <CCol md={3} xs={6}>
              <img src={fitType3} width="100%" className="mb-4" />
            </CCol>
            <CCol md={3} xs={6}>
              <img src={fitType4} width="100%" className="mb-4" />
            </CCol>
          </CRow>
        </div>
      </section>

      <section className="py-5 mx-auto section-3 d-flex align-items-center justify-content-end">
        <div className="d-flex align-items-center justify-content-end">
          <div className="col-lg-8 col-md-7 col-sm-9 col-9">
            <div className="col-lg-5 d-flex justify-content-center align-items-center flex-column mx-auto">
              <h2 className="text-white text-center">
                <strong>GURU IN SPOTLIGHT</strong>
              </h2>
              <p className="text-white text-center">
                If you are a personal trainer and would like to host group or
                individual live workout session, you could sign up as a fitnezzguru -
                It’s completely. Host workout sessions and change lives today! It's
                free!!
              </p>
              <CButton color="secondary">HOW IT WORKS</CButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5 mx-auto section-4" style={{ maxWidth: 1300 }}>
        <div className="mt-2">
          <h2 className="text-dark text-center">
            <strong>EVERY KIND OF WORKOUT </strong>
          </h2>
          <p className="text-dark text-center">
            From cardio and strength to yoga and flexibility, find a perfect workout
            live class. Blah blah blah blah blah blha…
          </p>
          <CRow>
            <CCol md={4} xs={4} className="text-center">
              <img src={yoga} className="mb-4" />
              <h5 className="text-dark text-center text-bold">YOGA & FLEXIBILITY</h5>
            </CCol>
            <CCol md={4} xs={4} className="text-center">
              <img src={cardio} className="mb-4" />
              <h5 className="text-dark text-center text-bold">CARDIO & AEROBICS</h5>
            </CCol>
            <CCol md={4} xs={4} className="text-center">
              <img src={weight} className="mb-4" />
              <h5 className="text-dark text-center text-bold">
                WEIGHT & STRENGTH TRAINING
              </h5>
            </CCol>
          </CRow>
        </div>
      </section>

      <section className="py-5 mx-auto section-5 d-flex align-items-center justify-content-start">
        <div className="d-flex align-items-center justify-content-start">
          <div className="col-lg-6 col-sm-7 col-9">
            <div className="col-lg-7 col-sm-10 col-12 d-flex justify-content-center align-items-center flex-column mx-auto">
              <h2 className="text-dark text-center">
                <strong>BECOME A FITNEZZ GURU</strong>
              </h2>
              <p className="text-dark text-center">
                If you are a personal trainer and would like to host group or
                individual live workout session, you could sign up as a fitnezzguru -
                It’s completely. Host workout sessions and change lives today! It's
                free!!
              </p>
              <CButton color="primary">HOW IT WORKS</CButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pl-5 pr-5 mx-auto section-6">
        <div className="mt-2">
          <h2 className="text-dark text-center">
            <strong>INSTRAGRAM FEEDBLOCK</strong>
          </h2>
          <p className="text-dark text-center">
            follow us on Instagram !!!!!!!!!!!!
          </p>
          <div className="d-flex mx-auto justify-content-start flex-wrap">
            <div className="m-1 instagram-item">
              <img src={instgramFeedback} width="100%" className="mb-2" />
              <p className="text-dark text-bold">
                Instagram post content Instagram post content Insta post content
                Instagram post content Instagram post content
              </p>
            </div>
            <div className="m-1 instagram-item">
              <img src={instgramFeedback} width="100%" className="mb-2" />
              <p className="text-dark text-bold">
                Instagram post content Instagram post content Insta post content
                Instagram post content Instagram post content
              </p>
            </div>
            <div className="m-1 instagram-item">
              <img src={instgramFeedback} width="100%" className="mb-2" />
              <p className="text-dark text-bold">
                Instagram post content Instagram post content Insta post content
                Instagram post content Instagram post content
              </p>
            </div>

            <div className="m-1 instagram-item">
              <img src={instgramFeedback} width="100%" className="mb-2" />
              <p className="text-dark text-bold">
                Instagram post content Instagram post content Insta post content
                Instagram post content Instagram post content
              </p>
            </div>

            <div className="m-1 instagram-item">
              <img src={instgramFeedback} width="100%" className="mb-2" />
              <p className="text-dark text-bold">
                Instagram post content Instagram post content Insta post content
                Instagram post content Instagram post content
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
