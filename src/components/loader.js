import React from "react"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const CLoader = ({ color, type, width, height }) => (
  <Loader
    type={type || "ThreeDots"}
    color={color || "white"}
    height={height || 30}
    width={width || 30}
  />
)

export default CLoader
