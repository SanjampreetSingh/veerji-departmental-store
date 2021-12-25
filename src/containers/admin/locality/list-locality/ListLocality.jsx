import { useState, useEffect } from "react"

import ListLocalityComponent from "../../../../components/admin/locality/list-locality/ListLocalityComponent"
import { getAllLocality } from "../../../../services/services"

export default function ListLocality() {
  const [error, setError] = useState(false)
  const [locality, setLocality] = useState([])

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

  return <ListLocalityComponent locality={locality} getError={error} />
}
