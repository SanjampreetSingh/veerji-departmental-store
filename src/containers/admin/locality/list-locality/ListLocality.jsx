import React, { useState, useEffect } from "react"

import ListLocalityComponent from "../../../../components/admin/locality/list-locality/ListLocalityComponent"
import { getAllLocality, deleteLocality } from "../../../../services/services"

export default function ListLocality() {
  const [error, setError] = useState([])
  const [locality, setLocality] = useState([])
  const [deleteResponse, setDeleteResponse] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = e => {
    getAllLocality()
      .then(res => {
        setLocality(res.data)
      })
      .catch(error => {
        const err = error
        setError(err)
      })
  }

  const deleteData = id => {
    deleteLocality(id)
      .then(res => {
        setDeleteResponse(res.data)
      })
      .catch(error => {
        const err = error
        setDeleteResponse(err)
      })
  }
  return (
    <ListLocalityComponent
      locality={locality}
      getError={error}
      deleteData={deleteData}
      deleteResponse={deleteResponse}
    />
  )
}
