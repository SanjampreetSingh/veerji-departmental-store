import React, { useState, useEffect } from "react"

import ListLocalityComponent from "../../../../components/admin/locality/list-locality/ListLocalityComponent"
import { getAllLocality } from "../../../../services/services"

export default function ListLocality() {
  const [response, setResponse] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = e => {
    getAllLocality()
      .then(res => {
        setResponse(res.data)
      })
      .catch(error => {
        const err = error
        setResponse(err)
      })
  }
  return <ListLocalityComponent locality={response} />
}
