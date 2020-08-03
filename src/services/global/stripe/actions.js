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

export const addUserToWorkout = (workoutId, paymentId, userId) => {
  return (dispatch) => {
    return authApi
      .post("/workouts/add-user", {
        workoutId: workoutId,
        paymentId: paymentId,
        userId: userId,
      })
      .then((res) => {
        return res
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
