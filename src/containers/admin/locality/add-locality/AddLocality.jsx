import React, { useState } from "react"

import AddLocalityComponent from "../../../../components/admin/locality/add-locality/AddLocalityComponent"
import { addLocality } from "../../../../services/services"

export default function AddLocality() {
  const [name, setName] = useState("")
  const [response, setResponse] = useState("")
  const [error, setError] = useState("")

  const submitData = e => {
    e.preventDefault()
    addLocality({ name: name })
      .then(res => setResponse(res.data))
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
