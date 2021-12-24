import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

import RetrieveCustomerComponent from "../../../../components/admin/customer/retrieve-customer/RetrieveCustomerComponent"
import {
  getUser,
  updateUser,
  getAllLocality,
  getAllListProducts,
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
    payment: "",
    recurring_product: "[]",
  })

  // eslint-disable-next-line no-unused-vars
  const errorObj = Object.freeze({
    error: false,
    name: "",
    email: "",
    phone: "",
    house_number: "",
    locality: "",
    payment: "",
    recurring_product: "[]",
  })

  // eslint-disable-next-line no-unused-vars
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
  }, [])

  useEffect(() => {
    if (editButton === true) {
      loadLocalityData()
    }
  }, [editButton])

  useEffect((e) => {
    handleUserFormChange(e)
  }, [recurringProduct]);

  const loadUserData = () => {
    getUser(userId)
      .then(res => {
        setUser(prev => ({
          ...prev,
          name: res?.data?.name,
          email: res?.data?.email,
          phone: res?.data?.phone,
          house_number: res?.data?.house_number,
          locality: res?.data?.locality,
          locality_name: res?.data?.locality_name,
          payment: res?.data?.payment,
          recurring_product: JSON.parse(res?.data?.recurring_product),
        }))
        setRecurringProduct(JSON.parse(res?.data?.recurring_product))
      })
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

  const handleSubmit = () => {
    updateUser(userId, user)
      .then(res => {
        if (res?.error) {
          setSubmitError(res.error)
        } else {
          setEditButton(false)
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
    const name = e?.target?.name
    const value = e?.target?.value?.trim()
    setUser(prev => ({
      ...prev,
      [name]: value,
      recurring_product: JSON.stringify(recurringProduct),
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
      submitError={submitError}
      setEditButton={setEditButton}
      handleRecurringArray={handleRecurringArray}
      handleRecurringObj={handleRecurringObj}
      handleSubmit={handleSubmit}
      handleUserFormChange={handleUserFormChange}
    />
  )
}
