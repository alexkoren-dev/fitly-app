import React, { useState, useEffect } from "react"
import { CCard, CCardBody, CButton } from "@coreui/react"
import { useDispatch, useSelector } from "react-redux"
import CIcon from "@coreui/icons-react"
import Slider from "react-slick"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import AuthActions from "services/auth"
import CConfirmAlert from "components/ConfirmAlert"

import LikeOrDislike from "./likeOrDislike"
import UploadModal from "./UploadModal"

var carouselSettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const CardItem = ({
  onDragStart,
  data,
  url,
  deleteGalleryImage,
  likeOrDislikeImage,
  owner,
  ownerProfile,
  openImage
}) => (
  <div className="gallery-card" onDragStart={onDragStart}>
    <img src={data.url} style={{ width: "100%", borderRadius: 20 }} onClick={() => openImage()}/>

    <div className="d-flex justify-content-between pt-1 pb-2 px-3 gallery-bar">
      <p className="mb-0">
        {owner ? (<i
          className="fa fa-trash d-flex justify-content-center align-items-center"
          style={{
            color: "#373535",
            fontSize: 18,
            width: 25,
            height: 25,
            borderRadius: "50%",
          }}
          onClick={() => (!owner ? false : deleteGalleryImage(data.imageId))}
        />)
        : <span/>
      }
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

const Gallery = ({ gallery, owner, username, profileId }) => {
  const dispatch = useDispatch()
  const [toggleUpload, setToggleUpload] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

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
    CConfirmAlert(
      dispatch,
      AuthActions.removeProfileImage(imageId),
      "Are you sure want to delete this image!"
    )
  }

  const likeOrDislikeImage = (imageId, isLiked) => {
    if (isLiked) {
      dispatch(AuthActions.dislikeProfileImage(profileId, imageId))
    } else {
      dispatch(AuthActions.likeProfileImage(profileId, imageId))
    }
  }

  const images = (gallery || []).map(g => g.url)

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
          <div className="mb-4">
            <Slider {...carouselSettings}>
              {gallery.map((img, key) => (
                <div className="px-2" key={key}>
                  <CardItem
                    onDragStart={handleOnDragStart}
                    data={img}
                    owner={owner}
                    deleteGalleryImage={deleteGalleryImage}
                    likeOrDislikeImage={likeOrDislikeImage}
                    ownerProfile={ownerProfile}
                    openImage={() => {
                      setPhotoIndex(key)
                      setOpen(true)
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}

      </CCardBody>
    </CCard>
  )
}

export default Gallery
