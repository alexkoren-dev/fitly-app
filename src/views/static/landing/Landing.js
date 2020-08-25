import React from "react"
import {
  CButton,
  CCarousel,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
} from "@coreui/react"

import "./style.scss"
import UpcomingSession from "./upcomingSession"
import StripeModal from "./StripeModal"

import CarouselBackground1 from "assets/img/background-fitly-1.jpg"
import CarouselBackground2 from "assets/img/background-fitly-2.jpg"
import CarouselBackground3 from "assets/img/background-fitly-3.jpg"


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
          <div className="text-right mt-4">
            <h1 className="text-dark">Break a sweat with me anywhere!!!</h1>
            <p className="text-grey">- Ruchita Bahl- Fitness Guru</p>
            <CButton
              color="primary"
              className="btn-pill"
              style={{ height: 50, width: 200 }}
            >
              Book A Class
            </CButton>
          </div>
        </div>
      </CCol>
    </CRow>
  </div>
)

const Landing = (props) => {
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
        <UpcomingSession {...props} />
      </section>

      <section className="p-4 mx-auto">
        <div>
          <h2 className="text-dark text-center">
            <strong>SWEAT WITH FITLY </strong>
          </h2>
          <p className="text-dark text-center">
            Fitly isn’t an app. It’s a yoga class, it’s one-on-one personal training,
            it’s your motivation to reach your fitness goals.
            <br />
            There’s no subscription, no gym and no need to feel self-conscious
            working out in front of others—just interactive training you can do at
            home.
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
            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column mx-auto">
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
            <strong>FIND YOUR FIT </strong>
          </h2>
          <p className="text-dark text-center">
            Everybody is unique—so your fitness plan should be too. Fitly offers a
            variety of classes <br /> from cardio and HIIT to yoga and strength
            training, so you can find the fit that works for you.
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
            <div className="col-lg-8 col-sm-10 col-12 d-flex justify-content-center align-items-center flex-column mx-auto">
              <h2 className="text-dark text-center">
                <strong>SING UP AS A TRAINER </strong>
              </h2>
              <p className="text-dark text-center">
                Inspire others and change lives by hosting one-on-one or small group
                fitness classes through the Fitly app. Join the Fitly crew to host
                classes from your home for free.
              </p>
              <CButton color="primary">SIGN UP</CButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pl-5 pr-5 mx-auto section-6">
        <div className="mt-2">
          <h2 className="text-dark text-center">
            <strong>DO IT FOR 'GRAM</strong>
          </h2>
          <p className="text-dark text-center">
            Just kidding. Do it for yourself, your health and that feeling you get
            after a great workout. But follow us on Instagram for fitsporation.
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

      <StripeModal {...props} />
    </div>
  )
}

export default Landing
