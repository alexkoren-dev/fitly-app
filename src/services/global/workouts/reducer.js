import { WORKOUT } from "constants/types"

const initState = {
  workoutSessions: [],
}

const WorkoutReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case WORKOUT.WORKOUT_SESSIONS:
      return {
        ...state,
        workoutSessions: payload,
      }

    default:
      return state
  }
}

export default WorkoutReducer
