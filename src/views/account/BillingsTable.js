import React, { useState, useEffect } from "react"
import moment from "moment"
import CIcon from "@coreui/icons-react"
import { Table } from "antd"
import { CheckCircleOutlined } from "@ant-design/icons"

const WORKOUT_STATUS = {
  active: "Upcoming",
}

const columns = [
  {
    title: "DATE",
    dataIndex: "date",
    render: (date) => moment(date).format("YYYY-MM-DD"),
  },
  {
    title: "INVOICE",
    dataIndex: "invoice",
  },
  {
    title: "AMOUNT PAID",
    dataIndex: "amount",
    align: "center",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    align: "center",
    render: () => <CheckCircleOutlined style={{ fontSize: 25, color: "#5063EE" }} />,
  },
]

const data = [
  {
    key: 1,
    status: "paid",
    date: new Date(),
    invoice: "xxxxxxxxxx",
    amount: 20,
  },
  {
    key: 2,
    status: "paid",
    date: new Date(),
    invoice: "xxxxxxxxxx",
    amount: 20,
  },
  {
    key: 3,
    status: "paid",
    date: new Date(),
    invoice: "xxxxxxxxxx",
    amount: 20,
  },
  {
    key: 4,
    status: "paid",
    date: new Date(),
    invoice: "xxxxxxxxxx",
    amount: 20,
  },
]

const BillingsTable = ({ dataSource, loading }) => {
  return (
    <Table
      columns={columns}
      loading={loading}
      dataSource={data}
      className="session-table"
    />
  )
}

export default BillingsTable
