import { STRIPE } from "constants/types"
import { api, authApi, formData } from "utils"

export const openStripeModal = (workout) => {
  return (dispatch) => {
    dispatch({ type: STRIPE.OPEN_STRIPE_MODAL, payload: workout })
  }
}

export const closeStripeModal = () => {
  return (dispatch) => {
    dispatch({ type: STRIPE.CLOSE_STRIPE_MODAL })
  }
}

export const getSecret = async (amount) => {
  return await authApi.post("/workouts/payment", {
    amount: amount * 1000,
  })
}
