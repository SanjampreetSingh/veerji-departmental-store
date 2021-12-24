import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import RegisterComponent from "../../components/register/RegisterComponent"
import {
  getAllLocalities,
  addUser,
  addRecurringProduct,
} from "../../services/services"

export default function Register() {
  const history = useHistory()
  const formObj = Object.freeze({
    name: "",
    email: "",
    password: "",
    phone: "",
    house_number: "",
    locality: "",
  })

  const errorObj = Object.freeze({
    error: false,
    name: "",
    email: "",
    password: "",
    phone: "",
    house_number: "",
    locality: "",
  })

  const [locality, setLocality] = useState([])
  const [error, setError] = useState(errorObj)
  const [submitError, setSubmitError] = useState("")
  const [formState, setFormState] = useState(formObj)

  const createReccuringProduct = userId => {
    addRecurringProduct({
      user: userId,
      product: '[{ recurringIndex: "", productId: "", quantity: "" }]',
    }).then(res => {
      if (res?.error) {
        setSubmitError(res?.error)
      } else {
        history.push("/login")
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addUser({
      name: formState?.name,
      email: formState?.email,
      password: formState?.password,
      phone: formState?.phone,
      house_number: formState?.house_number,
      locality: formState?.locality,
    })
      .then(res => {
        if (res?.error) {
          setSubmitError(res?.error)
        } else {
          createReccuringProduct(res?.data?.id)
        }
      })
      .catch(error => setSubmitError(error))
  }

  const updateErrorState = (name, value) => {
    // TODO: Add validations
    switch (name) {
      case "name":
        if (value.trim().length < 4) {
          setError(prev => ({
            ...prev,
            error: true,
            [name]: "Name must be more the 3 characters",
          }))
        } else {
          setError(prev => ({
            ...prev,
            error: false,
            [name]: "",
          }))
        }
        break

      case "email":
        break
      case "password":
        break
      case "phone":
        break
      case "house_number":
        break
      case "locality":
        break
      default:
        break
    }
  }
  const handleChange = e => {
    const name = e.target?.name
    const value = e?.target?.value?.trim()
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
    updateErrorState(name, value)
  }

  useEffect(() => {
    getAllLocalities()
      .then(res => {
        if (res?.error) {
          setError(res.error)
        } else {
          setLocality(res?.data)
        }
      })
      .catch(error => setError(error))
  }, [])

  return (
    <RegisterComponent
      locality={locality}
      error={error}
      submitError={submitError}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
