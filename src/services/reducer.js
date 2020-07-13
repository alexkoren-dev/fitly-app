import { combineReducers } from "redux"

import { AuthReducer } from "./global"

// import {
//   Dashboard
// } from 'screens'

const reducer = combineReducers({
  auth: AuthReducer,
})

export default reducer
