import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import RetrieveCustomerComponent from "../../../../components/admin/customer/retrieve-customer/RetrieveCustomerComponent"
import {
  getUser,
  getAllListProducts,
  getRecurringProduct,
} from "../../../../services/services"
import { generateRecurringId } from "../../../../utils/common/common"

export default function RetrieveCustomer() {
  let userId = window.location.href.split("/").pop()
  const history = useHistory()

  const recurringObj = {
    recurringIndex: "",
    productId: "",
    quantity: "",
  }

  const formObj = Object.freeze({
    product: "",
    user: userId,
  })

  const errorsObj = Object.freeze({
    error: false,
    product: "",
    user: userId,
  })

  const [error, setError] = useState(false)
  const [user, setUser] = useState([])
  const [product, setProduct] = useState([])
  const [recurringProduct, setRecurringProduct] = useState([])
  const [editButton, setEditButton] = useState(false)
  const [formState, setFormState] = useState(formObj)
  const [errorObj, setErrorObj] = useState(errorsObj)

  useEffect(() => {
    loadData()
    loadProductData()
    loadRecurringProductData()
  }, [])

  useEffect(() => {
    handleRecurringChange()
  }, [recurringProduct])

  useEffect(() => {
    console.log(formState)
  }, [formState])

  const loadData = () => {
    getUser(userId)
      .then(res => setUser(res?.data))
      .catch(error => setError(error))
  }

  const loadProductData = () => {
    getAllListProducts()
      .then(res => setProduct(res?.data))
      .catch(error => setError(error))
  }

  const loadRecurringProductData = () => {
    getRecurringProduct(userId)
      .then(res => {
        let data = JSON.parse(res?.data?.product)
        setRecurringProduct(data)
      })
      .catch(error => setError(error))
  }

  const handleRecurringChange = () => {
    setFormState(prev => ({
      ...prev,
      product: recurringProduct,
    }))
  }

  const handleRecurringSubmit = e => {
    addUser()
      .then(res => {
        if (res?.error) {
          setSubmitError(res.error)
        } else {
          history.push("/admin/customer/details/" + userId)
        }
      })
      .catch(error => setSubmitError(error))
  }

  const handleRecurringArray = (key, idx = "", obj = recurringObj) => {
    switch (key) {
      case "add":
        obj.recurringIndex = generateRecurringId()
        setRecurringProduct(prev => [...prev, obj])
        break
      case "delete":
        setRecurringProduct(
          recurringProduct?.filter(item => item?.recurringIndex !== idx)
        )
        break
    }
  }

  const handleRecurringObj = (idx, key, value) => {
    const objIndex = recurringProduct?.findIndex(
      obj => obj.recurringIndex === idx
    )
    const updatedObj = JSON.parse(JSON.stringify(recurringProduct[objIndex]))
    updatedObj[key] = value
    setRecurringProduct(item => [
      ...item.slice(0, objIndex),
      updatedObj,
      ...item.slice(objIndex + 1),
    ])
  }

  return (
    <RetrieveCustomerComponent
      user={user}
      product={product}
      recurringProduct={recurringProduct}
      editButton={editButton}
      setEditButton={setEditButton}
      handleRecurringArray={handleRecurringArray}
      handleRecurringObj={handleRecurringObj}
    />
  )
}
