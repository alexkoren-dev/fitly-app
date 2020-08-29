import React from "react"
import Logo from "./Logo"
import ReactLoading from "react-loading"

function SlashScreen() {
  return (
    <div className="splash flex-column">
      <Logo width={150} />
      <ReactLoading type={'cubes'} color="#3e4bb2"/>
    </div>
  )
}

export default SlashScreen
