import { combineReducers } from "redux"
import { AuthReducer, StripeReducer, WorkoutReducer } from "./global"

const reducer = combineReducers({
  auth: AuthReducer,
  stripe: StripeReducer,
  workouts: WorkoutReducer,
})

export default reducer
