import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import RetrieveCustomerComponent from "../../../../components/admin/customer/retrieve-customer/RetrieveCustomerComponent"
import {
  getUser,
  getAllListProducts,
  getAllRecurringProduct,
} from "../../../../services/services"

export default function RetrieveCustomer() {
  let id = window.location.href.split("/").pop()
  const history = useHistory()

  const recurringObj = Object.freeze({
    index: 0,
    productId: "",
    quantity: "",
  })

  const [error, setError] = useState(false)
  const [user, setUser] = useState([])
  const [product, setProduct] = useState([])
  const [recurringProduct, setRecurringProduct] = useState([recurringObj])
  const [editButton, setEditButton] = useState(false)

  useEffect(() => {
    loadData()
    loadProductData()
    loadRecurringProductData()
  }, [])

  const loadData = () => {
    getUser(id)
      .then(res => setUser(res?.data))
      .catch(error => setError(error))
  }

  const loadProductData = () => {
    getAllListProducts()
      .then(res => setProduct(res?.data))
      .catch(error => setError(error))
  }

  const loadRecurringProductData = () => {
    getAllRecurringProduct()
      .then(res => setRecurringProduct(res?.data))
      .catch(error => setError(error))
  }

  return (
    <RetrieveCustomerComponent
      user={user}
      product={product}
      recurringProduct={recurringProduct}
      editButton={editButton}
      setEditButton={setEditButton}
    />
  )
}
