import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TheContent, TheFooter, TheHeader } from "./index"
import { AuthActions } from "services/global"

const TheLayout = (props) => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    const token = window.localStorage.getItem("accessToken")

    if (!token) {
      // props.history.push('/auth/signin')
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
        <TheHeader auth={auth} logout={logout} />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  )
}

export default TheLayout
