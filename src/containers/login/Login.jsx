import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import LoginComponent from "../../components/login/LoginComponent"
import { instance } from "../../services/ApiCall"
import { getToken } from "../../services/services"

export default function Login() {
  const history = useHistory()

  const formObj = Object.freeze({
    email: "",
    password: "",
  })

  const errorObj = Object.freeze({
    error: false,
    email: "",
    password: "",
  })

  const [error, setError] = useState(errorObj)
  const [submitError, setSubmitError] = useState("")
  const [formState, setFormState] = useState(formObj)

  const handleSubmit = e => {
    console.log(formState)
    e.preventDefault()
    getToken({
      email: formState?.email,
      password: formState?.password,
    })
      .then(res => {
        if (res?.error) {
          setSubmitError(res.error)
        } else {
          localStorage.setItem("access_token", res?.data?.access)
          localStorage.setItem("refresh_token", res?.data?.refresh)
          instance.defaults.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token")
          history.push("/")
        }
      })
      .catch(error => setSubmitError(error))
  }

  const handleChange = e => {
    const name = e.target?.name
    const value = e?.target?.value?.trim()
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
    // updateErrorState(name, value)
  }

  return (
    <LoginComponent
      error={error}
      submitError={submitError}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  )
}
