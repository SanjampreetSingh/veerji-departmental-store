import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

import RetrieveCustomerComponent from "../../../../components/admin/customer/retrieve-customer/RetrieveCustomerComponent"
import {
  getUser,
  getAllLocality,
  getAllListProducts,
  getRecurringProduct,
  updateRecurringProduct,
} from "../../../../services/services"
import { generateRecurringId } from "../../../../utils/common/common"

export default function RetrieveCustomer() {
  let { userId } = useParams()
  const history = useHistory()

  const recurringObj = {
    recurringIndex: "",
    productId: "",
    quantity: "",
  }

  const formObj = Object.freeze({
    name: "",
    email: "",
    phone: "",
    house_number: "",
    locality: "",
    locality_name: "",
  })

  const errorObj = Object.freeze({
    error: false,
    name: "",
    email: "",
    phone: "",
    house_number: "",
    locality: "",
  })

  const [error, setError] = useState(false)
  const [user, setUser] = useState(formObj)
  const [product, setProduct] = useState([])
  const [recurringProduct, setRecurringProduct] = useState([])
  const [editButton, setEditButton] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [locality, setLocality] = useState([])

  useEffect(() => {
    loadUserData()
    loadProductData()
    loadRecurringProductData()
  }, [])

  useEffect(() => {
    if (editButton === true) {
      loadLocalityData()
    }
  }, [editButton])

  const loadUserData = () => {
    getUser(userId)
      .then(res =>
        setUser(prev => ({
          ...prev,
          name: res?.data?.name,
          email: res?.data?.email,
          phone: res?.data?.phone,
          house_number: res?.data?.house_number,
          locality: res?.data?.locality,
          locality_name: res?.data?.locality_name,
        }))
      )
      .catch(error => setError(error))
  }

  const loadProductData = () => {
    getAllListProducts()
      .then(res => setProduct(res?.data))
      .catch(error => setError(error))
  }

  const loadLocalityData = () => {
    getAllLocality()
      .then(res => setLocality(res?.data))
      .catch(error => setError(error))
  }

  const loadRecurringProductData = () => {
    getRecurringProduct(userId)
      .then(res => setRecurringProduct(JSON.parse(res?.data?.product)))
      .catch(error => setError(error))
  }

  const handleRecurringSubmit = () => {
    updateRecurringProduct(userId, {
      product: JSON.stringify(recurringProduct),
      user: userId,
    })
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

  const handleUserFormChange = e => {
    const name = e.target?.name
    const value = e?.target?.value?.trim()
    setUser(prev => ({
      ...prev,
      [name]: value,
    }))
    // updateErrorState(name, value)
  }

  return (
    <RetrieveCustomerComponent
      user={user}
      product={product}
      recurringProduct={recurringProduct}
      locality={locality}
      editButton={editButton}
      setEditButton={setEditButton}
      handleRecurringArray={handleRecurringArray}
      handleRecurringObj={handleRecurringObj}
      handleRecurringSubmit={handleRecurringSubmit}
      handleUserFormChange={handleUserFormChange}
    />
  )
}
