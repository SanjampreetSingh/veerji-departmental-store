/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

import ListSaleComponent from "../../../../components/admin/sale/list-sale/ListSaleComponent"
import { getAllSale } from "../../../../services/services"

export default function ListSale() {
  const [error, setError] = useState(false)
  const [sale, setSale] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    getAllSale()
      .then(res => {
        if (res?.error) {
          setError(res.error)
        } else {
          setSale(res?.data)
        }
      })
      .catch(error => setError(error))
  }

  const dateFormatter = cell => {
    return new Date(cell).toISOString().split("T")[0]
  }

  const actionButtonFormatter = (cell, row) => {
    return (
      <div
        className="btn-group btn-group-sm px-auto"
        role="group"
        aria-label="Basic example"
      >
        <a
          className="btn btn-outline-secondary btn-sm mr-2"
          href="#"
          role="button"
        >
          Edit
        </a>
        <a className="btn btn-danger btn-sm " href="#" role="button">
          Delete
        </a>
      </div>
    )
  }

  const columns = [
    {
      dataField: "product_name",
      text: "Product Name",
      editable: false,
    },
    {
      dataField: "quantity",
      text: "Quantity",
    },
    {
      dataField: "user_name",
      text: "Customer Name",
      sort: true,
      editable: false,
    },
    {
      dataField: "user_phone",
      text: "Customer Contact",
      sort: true,
      editable: false,
    },
    {
      dataField: "created",
      text: "Buy Date",
      sort: true,
      editable: false,
      formatter: dateFormatter,
    },
    {
      dataField: "actions",
      text: "Actions",
      csvExport: false,
      editable: false,
      isDummyField: true,
      formatter: actionButtonFormatter,
    },
  ]

  const defaultSorted = [
    {
      dataField: "user_phone",
      order: "desc",
    },
  ]

  return (
    <ListSaleComponent
      keyField="id"
      sale={sale}
      error={error}
      columns={columns}
      defaultSorted={defaultSorted}
    />
  )
}
