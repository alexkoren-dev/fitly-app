import { AUTH } from "constants/types"
import { api, authApi } from "utils"

export const getCurrentUser = () => {
  return (dispatch) => {
    let data = {
      method: "get",
      url: `/user`,
    }
    return authApi(data)
      .then((res) => {
        if (!res.error) {
          dispatch({
            type: AUTH.SIGNED_IN,
          })
          dispatch({
            type: AUTH.USER_PROFILE,
            payload: (res.data || {}).user || {},
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

export const login = (obj) => (dispatch) =>
  api
    .post("/login", obj)
    .then((res) => {
      dispatch({
        type: AUTH.SIGNED_IN,
      })
      window.localStorage.setItem("accessToken", res.user.token)
      return res
    })
    .catch((err) => {
      throw err
    })

export const register = (obj, type) => {
  return (dispatch) => {
    let data = {
      method: "post",
      url: `/pt-${type}-sign-up`,
      data: obj,
    }
    return api(data)
      .then((res) => {
        dispatch({
          type: AUTH.SIGNED_IN,
        })
        dispatch({
          type: AUTH.USER_PROFILE,
          payload: res.user,
        })

        window.localStorage.setItem("accessToken", res.user.token)
        return res
      })
      .catch((err) => {
        throw err
      })
  }
}

export const logOut = () => {
  window.localStorage.removeItem("accessToken")
  return (dispatch) => {
    dispatch({
      type: AUTH.SIGNED_OUT,
    })
  }
}
