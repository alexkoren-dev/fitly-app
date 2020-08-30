import React, { useState } from "react"
import axios from "axios"
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
import { Upload, Progress } from "antd"
import CIcon from "@coreui/icons-react"
import CLoader from "components/CLoader"
import { AUTH } from "constants/types"
import config from "constants/config"
import AuthActions from "services/auth"

import Logo from 'components/Logo'
import uploadPicture from "assets/img/picture.svg"

const UploadModal = ({ openModal, closeModal, profile, uploadField }) => {
  const dispatch = useDispatch()
  const [loading, setUploading] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [error, setError] = useState(false)
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleUpload = async () => {
    setUploading(true)
    const fmData = new FormData()
    const apiConfig = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: `Token ${window.localStorage.getItem("accessToken")}`,
      },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100)
        setProgress(percent)
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000)
        }
      },
    }
    fmData.append(uploadField || "gallery", file)

    setUploading(true)
    try {
      const res = await axios.put(
        `${config.API_ROOT_URL}/profiles`,
        fmData,
        apiConfig
      )

      setUploading(false)
      setPreviewImage(null)
      setFile(null)
      closeModal()
      dispatch({
        type: AUTH.USER_PROFILE,
        payload: res.data.profile,
      })
    } catch (err) {
      setUploading(false)
    }
  }

  const props = {
    name: "file",
    multiple: false,
    beforeUpload: async (file) => {
      setFile(file)
      const realfile = await getBase64(file)
      setPreviewImage(realfile)
      return false
    },
    showUploadList: false,
    method: "put",
    name: uploadField || "gallery",
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
          <Logo white width={130}/>
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
        <p className="mt-4" />
        {progress > 0 ? (
          <Progress percent={progress} strokeWidth={30} strokeColor="#a8a8a8" />
        ) : null}
        <div className="d-flex justify-content-end mt-5 mb-3">
          <CButton
            color="primary"
            type="submit"
            className="px-4 btn-pill button-bg-dark text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
            disabled={loading || !file}
            style={{ width: 130, height: 40 }}
            onClick={() => handleUpload()}
          >
            {loading ? <CLoader /> : "SUBMIT"}
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
