import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import RetrieveCustomerComponent from "../../../../components/admin/customer/retrieve-customer/RetrieveCustomerComponent"
import {
  getUser,
  getAllListProducts,
  getAllRecurringProduct,
} from "../../../../services/services"
import { generateRecurringId } from "../../../../utils/common/common"

export default function RetrieveCustomer() {
  let id = window.location.href.split("/").pop()
  const history = useHistory()

  const recurringObj = {
    recurringIndex: "",
    productId: "",
    quantity: "",
  }

  const [error, setError] = useState(false)
  const [user, setUser] = useState([])
  const [product, setProduct] = useState([])
  const [recurringProduct, setRecurringProduct] = useState([])
  const [editButton, setEditButton] = useState(false)

  useEffect(() => {
    loadData()
    loadProductData()
    // loadRecurringProductData()
  }, [])

  useEffect(() => {
    console.log(recurringProduct)
  }, [recurringProduct])

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

  // handleArray add, delete, update

  const handleRecurringArray = (key, idx = "", obj = recurringObj) => {
    switch (key) {
      case "add":
        obj.recurringIndex = generateRecurringId()
        setRecurringProduct(prev => [...prev, obj])
        break
      case "delete":
        setRecurringProduct(
          recurringProduct.filter(item => item.recurringIndex !== idx)
        )
        break
      case "update":
        break
    }
  }
  const handleObj = (idx, obj) => {}

  return (
    <RetrieveCustomerComponent
      user={user}
      product={product}
      recurringProduct={recurringProduct}
      editButton={editButton}
      setEditButton={setEditButton}
      handleRecurringArray={handleRecurringArray}
    />
  )
}
