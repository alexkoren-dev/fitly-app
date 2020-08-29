import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import SplashScreen from "./SplashScreen"

import AuthActions from "services/auth"
import { decryptWithAES } from "utils/filter_factory"

function Auth({ children }) {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      const token = window.localStorage.getItem("accessToken")

      if (!token) {
        const remember = window.localStorage.getItem("remember")

        if (remember) {
          const email = window.localStorage.getItem("email")
          const password = decryptWithAES(window.localStorage.getItem("password"))

          await dispatch(
            AuthActions.login({
              user: {
                email: email,
                password: password,
              },
            })
          )
        }
      } else {
        await dispatch(AuthActions.getCurrentUser()).catch(() => {
          dispatch(AuthActions.logOut())
        })
      }

      setLoading(false)
    }

    initAuth()
  }, [dispatch])

  if (isLoading) {
    return <SplashScreen />
  }

  return children
}

Auth.propTypes = {
  children: PropTypes.any,
}

export default Auth
