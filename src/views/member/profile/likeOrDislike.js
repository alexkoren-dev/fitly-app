import React, { useState, useEffect } from "react"

const LikeOrDislike = ({ callback, initialValue }) => {
  const [like, setLike] = useState(initialValue)

  const onClick = () => {
    setLike(!like)
    callback(like)
  }

  return (
    <i
      className={`fa ${
        like ? "fa-heart" : "fa-heart-o"
      } mr-1 d-flex justify-content-center align-items-center`}
      style={{
        color: "red",
        fontSize: 18,
        width: 25,
        height: 25,
        borderRadius: "50%",
      }}
      onClick={() => onClick()}
    />
  )
}

export default LikeOrDislike
