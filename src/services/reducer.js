import { combineReducers } from "redux"
import { AuthReducer, StripeReducer } from "./global"

const reducer = combineReducers({
  auth: AuthReducer,
  stripe: StripeReducer,
})

export default reducer
