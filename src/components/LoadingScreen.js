import React, { useEffect } from "react"
import Nprogress from "nprogress"
// import ReactLoading from "react-loading"

function LoadingScreen() {
  useEffect(() => {
    Nprogress.start()

    return () => {
      Nprogress.done()
    }
  }, [])

  return <></>
}

export default LoadingScreen
