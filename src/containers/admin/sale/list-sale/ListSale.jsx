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

  const columns = [
    {
      dataField: "id",
      text: "Sr. No",
    },
    {
      dataField: "product_name",
      text: "Product Name",
    },
    {
      dataField: "quantity",
      text: "Quantity",
    },
    {
      dataField: "user_name",
      text: "Customer Name",
      sort: true,
    },
    {
      dataField: "user_phone",
      text: "Customer Contact",
      sort: true,
    },
    {
      dataField: "created",
      text: "Buy Date",
      sort: true,
      formatter: dateFormatter,
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
