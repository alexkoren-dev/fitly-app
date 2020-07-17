import { AUTH } from "constants/types"
import { api, authApi, formData } from "utils"

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
            type: AUTH.USER_INFO,
            payload: res.user,
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

export const createUserProfile = (profile) => {
  return (dispatch) => {
    let data = {
      method: "post",
      url: `/profiles`,
      data: formData(profile),
    }
    return authApi(data)
      .then((res) => {
        dispatch({
          type: AUTH.USER_PROFILE,
          payload: res.profile,
        })
        return res
      })
      .catch((err) => {
        throw err
      })
  }
}

export const editUserProfile = (profile) => {
  return (dispatch) => {
    let data = {
      method: "put",
      url: `/profiles`,
      data: formData(profile),
    }
    return authApi(data)
      .then((res) => {
        dispatch({
          type: AUTH.USER_PROFILE,
          payload: res.profile,
        })
        return res
      })
      .catch((err) => {
        throw err
      })
  }
}

export const getOwnerProfile = () => {
  return (dispatch) => {
    let data = {
      method: "get",
      url: `/profiles`,
    }
    return authApi(data)
      .then((res) => {
        if (!res.error) {
          dispatch({
            type: AUTH.USER_PROFILE,
            payload: res.profile,
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

export const getUserProfile = (userId) => {
  let data = {
    method: "get",
    url: `/profiles`,
  }
  return authApi(data)
    .then((res) => {
      return res
    })
    .catch((err) => {
      throw err
    })
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
  window.localStorage.removeItem("remember")
  window.localStorage.removeItem("email")
  window.localStorage.removeItem("password")
  return (dispatch) => {
    dispatch({
      type: AUTH.SIGNED_OUT,
    })
  }
}

export const openLoginModal = () => {
  return (dispatch) => {
    dispatch({ type: AUTH.OPEN_LOGIN_MODAL })
  }
}

export const closeLoginModal = () => {
  return (dispatch) => {
    dispatch({ type: AUTH.CLOSE_LOGIN_MODAL })
  }
}
