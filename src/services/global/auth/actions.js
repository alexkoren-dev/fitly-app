import { AUTH } from "constants/types"
import { api, authApi, formData } from "utils"

// Get User with Token
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
          dispatch(getOwnerProfile())
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

// Create User Profile
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

// Image Likd/Dislike Operation
export const likeProfileImage = (profileId, imageId) => {
  return (dispatch) => {
    let data = {
      method: "post",
      url: `/profiles/like`,
      data: { profileId: profileId, imageId: imageId },
    }
    return authApi(data)
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
  }
}

export const dislikeProfileImage = (profileId, imageId, userId) => {
  return (dispatch) => {
    let data = {
      method: "post",
      url: `/profiles/unlike`,
      data: { profileId: profileId, imageId: imageId },
    }
    return authApi(data)
      .then((res) => {
        return res
      })
      .catch((err) => {
        throw err
      })
  }
}

// Edit Profile
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

// Get Self Profile
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

// Remove Gallery Image
export const removeProfileImage = (imageId) => {
  return (dispatch) => {
    let data = {
      method: "get",
      url: `/profiles/remove-gallery-item?imageId=${imageId}`,
    }
    return authApi(data)
      .then((res) => {
        if (!res.error) {
          dispatch({
            type: AUTH.REMOVE_GALLERY,
            payload: imageId,
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

// Get Other Person's Profile
export const getUserProfile = (userId) => {
  let data = {
    method: "get",
    url: `/profiles/view-profile?profileId=${userId}`,
  }
  return authApi(data)
    .then((res) => {
      return res
    })
    .catch((err) => {
      throw err
    })
}

// Login
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

//Reigster
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

// Get Workout for Dashboard
export const getAllWorkOuts = () => {
  let data = {
    method: "get",
    url: `/workouts`,
  }
  return api(data)
    .then((res) => {
      return res
    })
    .catch((err) => {
      throw err
    })
}

// Get User Workouts
export const getUserWorkouts = () => {
  let data = {
    method: "get",
    url: `/workouts`,
  }
  return authApi(data)
    .then((res) => {
      return res
    })
    .catch((err) => {
      throw err
    })
}

// Get user account
export const getUserAccount = () => {
  return (dispatch) => {
    let data = {
      method: "get",
      url: `/user`,
    }
    return authApi(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        throw err
      })
  }
}

// Change Password
export const changePassword = (new_password) => {
  return (dispatch) => {
    let data = {
      method: "put",
      url: `/user`,
      data: new_password,
    }
    return authApi(data)
      .then((res) => {
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
