import React, { useState, useEffect } from "react"

import AddLocalityComponent from "../../../../components/admin/locality/add-locality/AddLocalityComponent"
import { editLocality, getLocality } from "../../../../services/services"

export default function EditLocality() {
  let id = window.location.href.split("/").pop()
  const [name, setName] = useState("")
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    getData()
  }, [])

  const submitData = e => {
    e.preventDefault()
    editLocality(id, {name: name})
      .then(res => setResponse(res.data))
      .catch(error => setError(error))
  }

  const getData = () => {
    getLocality(id)
      .then(res => setName(res?.data?.name))
      .catch(error => setError(error))
  }

  return (
    <AddLocalityComponent
      name={name}
      setName={setName}
      submitData={submitData}
      response={response}
      error={error}
    />
  )
}
