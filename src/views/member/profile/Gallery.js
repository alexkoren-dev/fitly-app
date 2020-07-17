import React, { useState } from "react"
import { CCard, CCardBody, CButton } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Upload } from "antd"

import Loader from "components/loader"
import config from "constants/config"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

import image4 from "assets/img/Image4.png"

const responsive = {
  0: { items: 1 },
  1024: { items: 4 },
}

const CardItem = ({ onDragStart, data }) => (
  <div className="gallery-card m-2" onDragStart={onDragStart}>
    <img src={image4} style={{ width: "100%", borderRadius: 20 }} />
    <div className="d-flex justify-content-between py-2 px-3">
      <p>Title By User </p>
      <p className="d-flex align-items-center justify-content-center">
        <i className="fa fa-heart mr-1" style={{ color: "red", fontSize: 18 }} />{" "}
        {data.userlikes.length}
      </p>
    </div>
  </div>
)

const Gallery = ({ gallery, owner }) => {
  const handleOnDragStart = (e) => e.preventDefault()

  const [uploading, setUploading] = useState(false)

  const UploadButton = () => (
    <Upload {...props}>
      <CButton
        color="primary"
        className="shadow btn-pill text-bold px-4"
        disabled={uploading}
        style={{ height: 40 }}
      >
        {uploading ? <Loader /> : "Add Image"}
      </CButton>
    </Upload>
  )

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const props = {
    name: "file",
    action: `${config.API_ROOT_URL}/profiles`,
    headers: {
      authorization: `Token ${window.localStorage.getItem("accessToken")}`,
    },
    onChange(info) {
      if (info.file.status === "uploading") {
        // console.log(info.file, info.fileList);
        const file = getBase64(info.file.originFileObj)
        setUploading(true)
      }
      if (info.file.status !== "uploading") {
        setUploading(false)
      }
      if (info.file.status === "done") {
        setUploading(false)
        console.log("done")
      } else if (info.file.status === "error") {
        setUploading(false)
      }
    },
  }

  return (
    <CCard className="shadow">
      <CCardBody className="py-4 px-5">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="text-secondary">
            <strong>Your Gallery</strong>
          </h3>
          {gallery && gallery.length > 0 && owner && <UploadButton />}
        </div>

        {!gallery || gallery.length === 0 ? (
          <>
            <p className="my-5">
              {owner ? "Add image Forum ipsume ..." : "No gallery"}
            </p>
            {owner && <UploadButton />}
          </>
        ) : (
          <AliceCarousel
            responsive={responsive}
            fadeOutAnimation={true}
            mouseTrackingEnabled
            buttonsDisabled={true}
          >
            {gallery.map((img, key) => (
              <CardItem key={key} onDragStart={handleOnDragStart} data={img} />
            ))}
          </AliceCarousel>
        )}
      </CCardBody>
    </CCard>
  )
}

export default Gallery
