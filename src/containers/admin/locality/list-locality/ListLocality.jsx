import { useState, useEffect } from "react"

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

  const handleDelete = id => {
    deleteLocality(id)
      .then(res => {
        if (res?.error) {
          setError(res.error)
        } else {
          setDeleteResponse(res?.data)
          loadData()
        }
      })
      .catch(error => setDeleteResponse(error))
  }
  return (
    <ListLocalityComponent
      locality={locality}
      getError={error}
      handleDelete={handleDelete}
      deleteResponse={deleteResponse}
    />
  )
}
