import { useEffect, useState } from "react"

import RegisterComponent from "../../components/register/RegisterComponent"
import { getAllLocality, addUser } from "../../services/services"

export default function Register() {
  const [locality, setLocality] = useState([])
  const [submitStatus, setSubmitStatus] = useState("")
  const [error, setError] = useState({
    error: false,
    name: "",
    email: "",
    password: "",
    phone: "",
    house_number: "",
    locality: "",
  })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    house_number: "",
    locality: "",
  })

  const onSubmit = () => {
    addUser(formState)
      .then(res => {
        if (res?.error) {
          setSubmitStatus(res.error)
        } else {
          setSubmitStatus(res?.data)
        }
      })
      .catch(error => setSubmitStatus(error))
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
  const updateFormState = (name, value) => {
    setFormState(prev => ({ ...prev, [name]: value }))
    updateErrorState(name, value)
  }

  useEffect(() => {
    getAllLocality()
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
      formState={formState}
      updateFormState={updateFormState}
      onSubmit={onSubmit}
      submitStatus={submitStatus}
    />
  )
}
