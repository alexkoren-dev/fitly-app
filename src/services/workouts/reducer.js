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

    case WORKOUT.DELETE_SESSION:
      return {
        ...state,
        workoutSessions: state.workoutSessions.filter(ws => ws._id !== payload)
      }

    default:
      return state
  }
}

export default WorkoutReducer
