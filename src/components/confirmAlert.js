import React, { useState } from "react"
import Loader from "components/loader"
import { CButton } from "@coreui/react"
import { confirmAlert } from "react-confirm-alert" // Import
import "react-confirm-alert/src/react-confirm-alert.css"

const CConfirmAlert = (dispatch, action) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="bg-primary custom-alert py-4 px-5">
          <h2 className="text-white">Are you sure?</h2>
          <p className="text-white">You want to delete this file?</p>
          <div className="d-flex justify-content-end mt-5 mb-3">
            <CButton
              color="primary"
              type="submit"
              className="px-4 btn-pill button-bg-dark text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
              onClick={() => {
                dispatch(action)
                onClose()
              }}
              style={{ width: 130, height: 40 }}
            >
              YES
            </CButton>

            <CButton
              color="secondary"
              type="submit"
              className="ml-2 px-4 btn-pill text-bold mt-3 d-flex align-items-center justify-content-center box-shadow"
              onClick={onClose}
              style={{ width: 130, height: 40 }}
            >
              × NO
            </CButton>
          </div>
        </div>
      )
    },
  })
}

export default CConfirmAlert
