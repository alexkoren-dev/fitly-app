import { COMMON } from "constants/types"

const initState = {
  toastAlertFunc: null,
  hasPermissions: true,
}

const CommonReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case COMMON.TOSTIFY_ALERT_FUNC:
      return {
        ...state,
        toastAlertFunc: payload.data,
      }

    case COMMON.TOSTIFY_ALERT:
      if (state.toastAlertFunc) {
        state.toastAlertFunc(payload.status, payload.message)
      }

    case COMMON.SET_PERMISSION:
      return {
        ...state,
        hasPermissions: payload,
      }

    default:
      return state
  }
}

export default CommonReducer
