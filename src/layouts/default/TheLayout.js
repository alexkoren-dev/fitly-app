import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import { TheContent, TheFooter, TheHeader } from "./index"
import { AuthActions } from "services/global"
import { decryptWithAES } from "utils/filter_factory"

// Login Modal
import LoginModal from "views/auth/login/Login"

// routes config
import routes from "routes/static"

const TheLayout = (props) => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    const token = window.localStorage.getItem("accessToken")

    if (!token) {
      // props.history.push('/auth/signin')
      const remember = window.localStorage.getItem("remember")

      if (remember) {
        const email = window.localStorage.getItem("email")
        const password = decryptWithAES(window.localStorage.getItem("password"))

        dispatch(
          AuthActions.login({
            user: {
              email: email,
              password: password,
            },
          })
        )
      }
    } else {
      dispatch(AuthActions.getCurrentUser()).catch(() => {
        dispatch(AuthActions.logOut())
      })
    }
  }, [])

  const logout = () => {
    dispatch(AuthActions.logOut())
  }

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <ToastContainer />
        <TheHeader auth={auth} logout={logout} />
        <div className="c-body">
          <TheContent routes={routes} />
        </div>
        <TheFooter />
        <LoginModal />
      </div>
    </div>
  )
}

export default TheLayout