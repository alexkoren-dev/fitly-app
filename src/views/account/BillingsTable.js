import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import { CButton, CCol, CRow } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { Table } from "antd"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import _ from "lodash"
import { AuthActions } from "services/global"
import cardIcon from "assets/img/surface1.svg"
import PaymentComplete from "assets/img/payment_complete.svg"

const columns = [
  {
    title: "DATE",
    dataIndex: "createdAt",
    render: (date) => moment(date).format("ddd MMM DD, YYYY"),
  },
  {
    title: "INVOICE",
    dataIndex: "StripesPaymentId",
    render: (id) => `INV-FIT ${id}`,
  },
  {
    title: "AMOUNT PAID",
    dataIndex: "amountPaid",
    align: "center",
    render: (amount) => `$${amount}`,
  },
  {
    title: "STATUS",
    dataIndex: "refund",
    align: "center",
    render: (refund) => (
      <>
        {refund === "no" ? (
          <img src={PaymentComplete} height="30"/>
        ) : (
          <CloseCircleOutlined style={{ fontSize: 25, color: "#e55353" }} />
        )}
      </>
    ),
  },
]

const BillingsTable = () => {
  const [billings, setbillings] = useState(null)
  const [loading, setLoading] = useState(false)
  const profile = useSelector((state) => state.auth.profile)

  useEffect(() => {
    if (profile && !billings) {
      setLoading(true)
      AuthActions.getUserbillings(profile.userId)
        .then((res) => {
          setbillings(res)
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
        })
    }
  }, [profile])

  return (
    <CRow>
      <CCol lg={8}>
        <Table
          columns={columns}
          loading={loading}
          dataSource={billings || []}
          className="session-table"
        />
      </CCol>
      <CCol lg={4}>
        <div className="bg-primary payment-total-card border-radius d-flex flex-wrap py-5 px-4 justify-content-center align-items-center">
          <div className="bg-white border-radius mx-2 p-3 my-2">
            <img src={cardIcon} width="80" />
          </div>
          <div className="m-2">
            <label className="text-white">TOTAL SPEND</label>
            <h1 className="text-white text-bold">
              ${_.sum((billings || []).map((bil) => bil.amountPaid))}
            </h1>
          </div>
        </div>
      </CCol>
    </CRow>
  )
}

export default BillingsTable
