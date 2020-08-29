import { useEffect } from "react"
import { useLocation } from "react-router"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import iziToast from "izitoast"
import {
  CLEAR_NOTIFICATION
} from "constants/types"


function Notification() {
  const dispatch = useDispatch()
  const {message, error} = useSelector((state) => state.common)

  useEffect(() => {
    function showMessage() {
      iziToast[error?'error':'success']({
        position: "topRight",
        message: message,
      })
    }

    if(message)
      showMessage()

    return () => {
      dispatch({type: CLEAR_NOTIFICATION})
    }
  }, [message, error])

  return null
}

export default Notification
