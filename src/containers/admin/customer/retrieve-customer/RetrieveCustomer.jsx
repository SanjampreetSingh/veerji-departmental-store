import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import RetrieveCustomerComponent from "../../../../components/admin/customer/retrieve-customer/RetrieveCustomerComponent"
import {
  getUser,
  getAllProduct,
  getAllRecurringProduct,
} from "../../../../services/services"

export default function RetrieveCustomer() {
  const [error, setError] = useState(false)
  const [user, setUser] = useState([])
  const [product, setProduct] = useState([])
  const [recurringProduct, setRecurringProduct] = useState([]);
  const [editButton, setEditButton] = useState(false)

  let id = window.location.href.split("/").pop()
  const history = useHistory()

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
    getAllProduct(id)
      .then(res => setProduct(res?.data))
      .catch(error => setError(error))
  }

  const loadRecurringProductData = () => {
    getAllRecurringProduct(id)
      .then(res => setRecurringProduct(res?.data))
      .catch(error => setError(error))
  }

  return (
    <RetrieveCustomerComponent
      user={user}
      product={product}
      editButton={editButton}
      setEditButton={setEditButton}
    />
  )
}
