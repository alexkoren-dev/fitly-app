import React, { useState } from "react"
import { CCard, CCardBody, CButton } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

import UploadModal from "./UploadModal"
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
  const [toggleUpload, setToggleUpload] = useState(false)

  const UploadButton = () => (
    <CButton
      color="primary"
      className="shadow btn-pill text-bold px-4"
      onClick={() => setToggleUpload(true)}
      style={{ height: 40 }}
    >
      Add Image
    </CButton>
  )

  return (
    <CCard className="shadow">
      <UploadModal
        openModal={toggleUpload}
        closeModal={() => setToggleUpload(false)}
      />

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
