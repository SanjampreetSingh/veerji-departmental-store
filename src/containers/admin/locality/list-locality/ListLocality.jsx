import React, { useState, useEffect } from "react"

import ListLocalityComponent from "../../../../components/admin/locality/list-locality/ListLocalityComponent"
import { getAllLocality, deleteLocality } from "../../../../services/services"

export default function ListLocality() {
  const [error, setError] = useState(false)
  const [locality, setLocality] = useState([])
  const [deleteResponse, setDeleteResponse] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    getAllLocality()
      .then(res => {
        if (res?.error) {
          setError(res.error)
        } else {
          setLocality(res?.data)
        }
      })
      .catch(error => setError(error))
  }

  const deleteData = id => {
    deleteLocality(id)
      .then(res => setDeleteResponse(res.data))
      .catch(error => setDeleteResponse(error))
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
