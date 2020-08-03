import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { message } from "antd"
import { Link } from "react-router-dom"
import moment from "moment"
import "react-toastify/dist/ReactToastify.css"
import {
  CButton,
  CLink,
  CInputCheckbox,
  CCol,
  CFormGroup,
  CLabel,
  CForm,
  CInput,
  CRow,
  CModal,
  CModalBody,
  CModalHeader,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Input } from "antd"
import { Formik } from "formik"

import Loader from "components/loader"
import config from "constants/config"
import { StripeActions } from "services/global"

import {
  CardElement,
  useStripe,
  useElements,
  Elements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import object from "yup/lib/object"
import string from "yup/lib/string"

import "./style.scss"
import logoWhite from "assets/img/logo-white.svg"
import stripeLogo from "assets/img/stripe.svg"

const stripePromise = loadStripe(config.STRIPE_API_KEY)

const SplitForm = ({ closeModal, workoutId, userId, dispatch }) => {
  const [loading, setLoading] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    const secKey = await StripeActions.getSecret(30)

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: { email: "tester@tester.com" },
    })

    if (payload.error) {
      message.error(payload.error.message)
    } else {
      const confirm_payload = await stripe.confirmCardPayment(secKey, {
        payment_method: payload.paymentMethod.id,
      })

      if (confirm_payload.error) {
        message.error(confirm_payload.error.message)
      } else {
        const result = await dispatch(
          StripeActions.addUserToWorkout(
            workoutId,
            confirm_payload.paymentIntent.id,
            userId
          )
        )

        if (result.msg) {
          toast.error(result.msg, {
            position: toast.POSITION.TOP_RIGHT,
          })
        } else {
          closeModal()
        }
      }
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <CRow>
        <CCol lg={12}>
          <div className="form-inputs w-100" name="card_num">
            <div className="text-white">Email Address</div>
            <input type="email" className="w-100" required />
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={12}>
          <div className="form-inputs w-100" name="card_num">
            <div className="text-white">Card Number</div>
            <CardNumberElement className="card-num-input" />
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={6}>
          <div className="form-inputs" name="exp_date">
            <div className="text-white">Expiry Date</div>
            <CardExpiryElement className="exp-date-input" />
          </div>
        </CCol>
        <CCol lg={6}>
          <div className="form-inputs" name="cvc">
            <div className="text-white">CVC</div>
            <CardCvcElement className="card-cvc-input" />
          </div>
        </CCol>
      </CRow>
      <p className="text-white text-center my-4">
        After payment, you should see session’s detail and a link to class in your
        account. You can join the session by clicking the link on the schedule time.
      </p>
      <CRow>
        <CCol lg={6}>
          <div className="stripe-mark d-flex justify-content-center align-items-center mb-3">
            <p className="text-white mb-0">
              Powered By <strong>Stripe</strong>
            </p>
          </div>
        </CCol>
        <CCol
          lg={6}
          className="d-flex align-items-center justify-content-center flex-wrap"
        >
          <CButton
            color="primary"
            type="submit"
            className="px-4 btn-pill button-bg-dark mx-1 text-bold mb-3 d-flex align-items-center justify-content-center box-shadow"
            disabled={loading}
            style={{ width: 130 }}
          >
            {loading ? <Loader /> : "PAY"}
          </CButton>

          <CButton
            color="secondary"
            type="button"
            className="px-4 btn-pill mx-1 text-bold mb-3 d-flex align-items-center justify-content-center box-shadow"
            disabled={loading}
            style={{ width: 130 }}
            onClick={() => closeModal()}
          >
            GO BACK
          </CButton>
        </CCol>
      </CRow>
    </form>
  )
}

const StripeModal = (props) => {
  const dispatch = useDispatch()
  const toggleModal = useSelector((state) => state.stripe.toggleStripeModal)
  const user = useSelector((state) => state.auth.profile) || {}
  const workout = useSelector((state) => state.stripe.selectedWorkout)

  const closeModal = () => {
    dispatch(StripeActions.closeStripeModal())
  }

  return (
    <CModal
      show={toggleModal}
      onClose={closeModal}
      size="lg"
      color="primary"
      className="stripe-modal"
      style={{ maxWidth: 700, margin: "0 auto" }}
    >
      <CModalHeader closeButton></CModalHeader>
      <CModalBody className="pt-0 pb-3 pl-5 pr-5 bg-primary">
        <CLink
          href="/"
          className="d-block"
          style={{ width: "fit-content", marginTop: -30 }}
        >
          <img src={logoWhite} width="120" height="80" />
        </CLink>
        <div className="text-center" style={{ marginTop: -80 }}>
          <div className="cart-bg d-flex align-items-center justify-content-center">
            <img src={stripeLogo} />
          </div>
          <h3 className="text-white text-bold mt-3 mb-0">
            TOTAL: ${workout.perUserCharge}
          </h3>
          <p className="text-white mx-auto">
            You’re just a click away from a “Healthy You”!
            <br />
            {workout.typeDetails} workout with{" "}
            <strong>
              {workout.trainerDetails &&
                `${workout.trainerDetails.firstName} ${workout.trainerDetails.lastName}`}
            </strong>{" "}
            <br />
            Schedule for{" "}
            {moment(new Date(workout.scheduledTime)).format("DD MMM YYYY")},{" "}
            {moment(new Date(workout.scheduledTime)).format("h:m A")} -{" "}
            {moment(new Date(workout.scheduledTime))
              .add(workout.duration, "minutes")
              .format("h:m A")}{" "}
            {workout.timezone}
          </p>
        </div>
        <Elements stripe={stripePromise}>
          <SplitForm
            closeModal={closeModal}
            workoutId={workout._id}
            dispatch={dispatch}
            userId={user.userId}
          />
        </Elements>
      </CModalBody>
    </CModal>
  )
}

export default StripeModal
