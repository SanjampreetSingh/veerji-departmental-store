import React, { useState, useEffect } from "react"

import AddLocalityComponent from "../../../../components/admin/locality/add-locality/AddLocalityComponent"
import { addLocality, getLocality } from "../../../../services/services"

export default function AddLocality() {
  const [name, setName] = useState("")
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")
  const [locality, setLocality] = useState("")

  const submitData = e => {
    e.preventDefault()
    addLocality({
      name: name,
    })
      .then(res => {
        setResponse(res.data)
      })
      .catch(error => {
        const err = error
        setError(err)
      })
  }

  const getData = e => {
    getLocality(locality.id)
      .then(res => {
        setResponse(res.data)
      })
      .catch(error => {
        const err = error
        setError(err)
      })
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
