import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import {
  CButton,
  CLink,
  CCol,
  CRow,
  CModal,
  CModalBody,
  CModalHeader,
  CInputRadio,
} from "@coreui/react"
import { Upload } from "antd"
import CIcon from "@coreui/icons-react"
import Loader from "components/loader"

import config from "constants/config"
import { AuthActions } from "services/global"

import logoWhite from "assets/img/logo-white.svg"
import uploadPicture from "assets/img/picture.svg"

const UploadModal = ({ openModal, closeModal, profile }) => {
  const dispatch = useDispatch()
  const [loading, setUploading] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [error, setError] = useState(false)
  const [file, setFile] = useState(null)

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
    multiple: false,
    progress: {
      strokeColor: "rgba(255, 255, 255, 0.5)",
      trailColor: "rgba(255, 255, 255, 0.5)",
      strokeWidth: 25,
      format: (percent) => `${parseFloat(percent.toFixed(0))}%`,
    },
    method: "put",
    name: "gallery",
    async onChange(info) {
      if (info.file.status === "uploading") {
        // console.log(info.file, info.fileList);
        const file = await getBase64(info.file.originFileObj)
        setPreviewImage(file)
        setUploading(true)
      }
      if (info.file.status !== "uploading") {
        setUploading(false)
      }
      if (info.file.status === "done") {
        setUploading(false)
        setError(false)
      } else if (info.file.status === "error") {
        toast.error("Oops! Upload image is failed!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        setUploading(false)
        setError(true)
      }
    },
  }

  return (
    <CModal
      show={openModal}
      onClose={closeModal}
      size="lg"
      color="primary"
      className="profile_modal"
    >
      <CModalHeader closeButton></CModalHeader>
      <CModalBody className="pt-0 pb-4 pl-5 pr-5 bg-primary">
        <CLink href="/">
          <img src={logoWhite} width="131" height="63" />
        </CLink>

        <p className="text-white mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s ..
        </p>

        <Upload.Dragger {...props} className={`gallery-upload ${error && "error"}`}>
          {previewImage ? (
            <img
              src={previewImage}
              width="300"
              height="300"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="pt-4 d-flex flex-column align-items-center justify-content-center">
              <img src={uploadPicture} />
              <p className="text-white mt-5">
                <strong>Drop your image here, or browse</strong>
              </p>
              <p className="text-white">Supports: JPG & PNG</p>
            </div>
          )}
        </Upload.Dragger>
        <div className="d-flex justify-content-end mt-5 mb-3">
          <CButton
            color="primary"
            type="submit"
            className="px-4 btn-pill button-bg-dark text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
            disabled={loading}
            style={{ width: 130, height: 40 }}
          >
            {loading ? <Loader /> : "SUBMIT"}
          </CButton>

          <CButton
            color="secondary"
            type="submit"
            className="ml-2 px-4 btn-pill text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
            disabled={loading}
            onClick={() => closeModal()}
            style={{ width: 130, height: 40 }}
          >
            × CANCEL
          </CButton>
        </div>
      </CModalBody>
    </CModal>
  )
}

export default UploadModal
