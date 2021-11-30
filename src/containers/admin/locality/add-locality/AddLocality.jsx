import React, { useState, useEffect } from "react"

import AddLocalityComponent from "../../../../components/admin/locality/add-locality/AddLocalityComponent"
import { addLocality } from "../../../../services/services"

export default function AddLocality() {
  const [name, setName] = useState("")
  const [response, setResponse] = useState("")

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
        setResponse(err)
      })
  }

  return (
    <AddLocalityComponent
      name={name}
      setName={setName}
      submitData={submitData}
      response={response}
    />
  )
}
