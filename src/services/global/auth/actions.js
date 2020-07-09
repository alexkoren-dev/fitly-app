import { AUTH } from "constants/types"
import { api, authApi } from "utils"

export const checkJWT = () => {
  return (dispatch) => {
    let data = {
      method: "get",
      url: `/self`,
    }
    return authApi(data)
      .then((res) => {
        if (!res.error) {
          dispatch({
            type: AUTH.SIGNED_IN,
          })
          dispatch({
            type: AUTH.USER_PROFILE,
            payload: {
              data: (res.data || {}).user || {},
            },
          })
          return res
        } else {
          throw new Error("Auth Failed")
        }
      })
      .catch((err) => {
        throw err
      })
  }
}

export const register = (obj) => {
  return (dispatch) => {
    let data = {
      method: "post",
      url: "/register",
      data: obj,
    }
    return api(data)
      .then((res) => {
        if (res && res.status == 200) {
          dispatch({
            type: AUTH.SIGNED_IN,
          })

          window.localStorage.setItem("accessToken", res.data.token)
          return res
        } else throw res
      })
      .catch((err) => {
        throw err
      })
  }
}

export const logOut = () => {
  window.localStorage.removeItem("accessToken")
  window.localStorage.removeItem("userId")
  return (dispatch) => {
    dispatch({
      type: AUTH.SIGNED_OUT,
    })
  }
}
