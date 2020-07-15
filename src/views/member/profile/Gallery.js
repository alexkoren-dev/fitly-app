import React, { lazy } from "react"
import { 
  CCard, 
  CCardBody,
  CButton, 
} from "@coreui/react"
import CIcon from "@coreui/icons-react"

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import image4 from "assets/img/Image4.png"


const responsive = {
  0: { items: 1 },
  1024: { items: 4 },
}

const CardItem = ({onDragStart}) => (
  <div className="gallery-card m-2" onDragStart={onDragStart}>
    <img src={image4} style={{width: '100%', borderRadius: 20}}/>
    <div className="d-flex justify-content-between py-2 px-3">
      <p>Title By User </p>
      <p className="d-flex align-items-center justify-content-center">
        <i className="fa fa-heart-o mr-1" style={{color: 'red', fontSize: 18}} /> 23
      </p>
    </div>
  </div>
)



const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault()

  return (
    <CCard className="shadow">
      <CCardBody>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="text-secondary"><strong>Joshua’s Gallery</strong></h3>
          <CButton color="primary" className="shadow btn-pill text-bold px-4 py-2">Add Image</CButton>
        </div>
        
        <AliceCarousel 
          responsive={responsive}
          fadeOutAnimation={true}
          mouseTrackingEnabled 
          buttonsDisabled={true}
        >
          <CardItem onDragStart={handleOnDragStart}/>
          <CardItem onDragStart={handleOnDragStart}/>
          <CardItem onDragStart={handleOnDragStart}/>
          <CardItem onDragStart={handleOnDragStart}/>
          <CardItem onDragStart={handleOnDragStart}/>
          <CardItem onDragStart={handleOnDragStart}/>
          <CardItem onDragStart={handleOnDragStart}/>
          <CardItem onDragStart={handleOnDragStart}/>
        </AliceCarousel>
      </CCardBody>
    </CCard>
  )
}

export default Gallery
