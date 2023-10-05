import { combineReducers } from "redux"
import AuthReducer from "./auth/reducer"
import StripeReducer from "./stripe/reducer"
import WorkoutReducer from "./workouts/reducer"

const reducer = combineReducers({
  auth: AuthReducer,
  stripe: StripeReducer,
  workouts: WorkoutReducer,
})

export default reducer
