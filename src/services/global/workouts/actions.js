import { WORKOUT } from "constants/types"
import { api, authApi, formData } from "utils"

// Create Workout Session
export const createOrSaveWorkout = (workout, id) => {
  console.log(id)
  return (dispatch) => {
    let data = {
      method: id ? "put" : "post",
      url: `/workouts`,
      data: workout,
    }
    return authApi(data)
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
  }
}

// Get Workout Sessions
export const getWorkOutSessions = (id) => {
  return (dispatch) => {
    let data = {
      method: "get",
      url: `/workouts?personalTrainerId=${id}`,
    }
    return authApi(data)
      .then((res) => {
        dispatch({
          type: WORKOUT.WORKOUT_SESSIONS,
          payload: res.workouts || [],
        })
        return res
      })
      .catch((err) => {
        throw err
      })
  }
}

// Get Workout By Id
export const getWorkoutById = (id) => {
  return (dispatch) => {
    let data = {
      method: "get",
      url: `/workouts/workout?workoutId=${id}`,
    }
    return authApi(data)
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
  }
}

// Delete Workout Session
export const cancelWorkoutSession = (id) => {
  return (dispatch) => {
    let data = {
      method: "delete",
      url: `/workouts?workoutId=${id}`,
    }
    return authApi(data)
      .then((res) => {
        dispatch({
          type: WORKOUT.DELETE_SESSION,
          payload: id,
        })
        return res
      })
      .catch((err) => {
        throw {}
      })
  }
}