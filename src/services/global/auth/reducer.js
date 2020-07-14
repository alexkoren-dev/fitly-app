import { AUTH } from "constants/types"

const initState = {
  is_authed: window.localStorage.getItem("accessToken") ? true : false,
  profile: null,
  toggleLoginModal: false,
}

const AuthReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case AUTH.SIGNED_IN:
      return {
        ...state,
        is_authed: true,
      }

    case AUTH.SIGNED_OUT:
      return {
        ...state,
        is_authed: false,
      }

    case AUTH.USER_PROFILE:
      return {
        ...state,
        profile: Object.assign({}, payload),
      }

    case AUTH.OPEN_LOGIN_MODAL:
      return {
        ...state,
        toggleLoginModal: true,
      }

    case AUTH.CLOSE_LOGIN_MODAL:
      return {
        ...state,
        toggleLoginModal: false,
      }

    default:
      return state
  }
}

export default AuthReducer
