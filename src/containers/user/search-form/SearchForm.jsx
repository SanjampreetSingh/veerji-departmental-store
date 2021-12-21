import { useState, useEffect } from "react"

import { getAllLocality } from "../../../services/services"
import SearchFormComponent from "../../../components/users/search-form/SearchFormComponent"

export default function SearchForm(props) {
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
  return <SearchFormComponent locality={locality} getError={error} />
}
