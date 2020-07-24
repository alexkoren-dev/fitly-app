import React, { useState, useEffect } from "react"
import { CCard, CCardBody, CButton } from "@coreui/react"
import { useDispatch, useSelector } from "react-redux"
import CIcon from "@coreui/icons-react"
import { AuthActions } from "services/global"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import CConfirmAlert from "components/confirmAlert"
import LikeOrDislike from "./likeOrDislike"

import UploadModal from "./UploadModal"
import image4 from "assets/img/Image4.png"

const responsive = {
  0: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
}

const CardItem = ({
  onDragStart,
  data,
  deleteGalleryImage,
  likeOrDislikeImage,
  owner,
  ownerProfile,
}) => (
  <div className="gallery-card" onDragStart={onDragStart}>
    <img src={image4} style={{ width: "100%", borderRadius: 20 }} />

    <div className="d-flex justify-content-between pt-1 pb-2 px-3 gallery-bar">
      <p className="mb-0">
        <i
          className="fa fa-trash d-flex justify-content-center align-items-center"
          style={{
            color: "#373535",
            fontSize: 18,
            width: 25,
            height: 25,
            borderRadius: "50%",
          }}
          onClick={() => (!owner ? false : deleteGalleryImage(data.imageId))}
        />
      </p>
      <p className="d-flex align-items-center justify-content-center mb-0">
        {owner ? (
          <i
            className="fa fa-heart mr-1 d-flex justify-content-center align-items-center"
            style={{
              color: "red",
              fontSize: 18,
              width: 25,
              height: 25,
              borderRadius: "50%",
            }}
          />
        ) : (
          <LikeOrDislike
            callback={(like) => likeOrDislikeImage(data.imageId, like)}
            initialValue={data.userlikes.includes((ownerProfile || {}).userId)}
          />
        )}
        {owner && data.userlikes.length}
      </p>
    </div>
  </div>
)

const Gallery = ({ gallery, owner, username, profileId, getUserProfile }) => {
  const dispatch = useDispatch()
  const [toggleUpload, setToggleUpload] = useState(false)
  const ownerProfile = useSelector((state) => state.auth.profile)

  const handleOnDragStart = (e) => e.preventDefault()

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

  const deleteGalleryImage = (imageId) => {
    CConfirmAlert(dispatch, AuthActions.removeProfileImage(imageId))
  }

  const likeOrDislikeImage = (imageId, isLiked) => {
    if (isLiked) {
      dispatch(AuthActions.dislikeProfileImage(profileId, imageId)).then((res) => {
        getUserProfile()
      })
    } else {
      dispatch(AuthActions.likeProfileImage(profileId, imageId)).then((res) => {
        getUserProfile()
      })
    }
  }

  return (
    <CCard className="shadow">
      <UploadModal
        openModal={toggleUpload}
        closeModal={() => setToggleUpload(false)}
      />

      <CCardBody className="py-4 px-5">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="text-secondary">
            <strong>{owner ? "Your Gallery" : `${username}'s Gallery`}</strong>
          </h3>
          {gallery && gallery.length > 0 && owner && (
            <CButton
              color="primary"
              className="shadow btn-pill text-bold"
              style={{
                height: 48,
                width: 48,
                fontSize: 37,
                padding: 0,
                lineHeight: 1,
              }}
              onClick={() => setToggleUpload(true)}
            >
              +
            </CButton>
          )}
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
            key={owner ? gallery : ownerProfile}
          >
            {gallery.map((img, key) => (
              <CardItem
                key={key}
                onDragStart={handleOnDragStart}
                data={img}
                owner={owner}
                deleteGalleryImage={deleteGalleryImage}
                likeOrDislikeImage={likeOrDislikeImage}
                ownerProfile={ownerProfile}
              />
            ))}
          </AliceCarousel>
        )}
      </CCardBody>
    </CCard>
  )
}

export default Gallery
