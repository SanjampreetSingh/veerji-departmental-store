import { useState, useEffect } from "react"

import ListCustomerComponent from "../../../../components/admin/customer/list-customer/ListCustomerComponent"
import { getAllUser, getAllLocality } from "../../../../services/services"

export default function ListCustomer() {
  const [error, setError] = useState(false)
  const [user, setUser] = useState([])
  const [locality, setLocality] = useState([])
  // TODO: need to add filter, sort and error display

  useEffect(() => {
    loadData()
    loadLocalityData()
  }, [])

  async function loadData() {
    getAllUser()
      .then(res => {
        if (res?.error) {
          setError(res.error)
        } else {
          setUser(res?.data)
        }
      })
      .catch(error => setError(error))
  }

  async function loadLocalityData() {
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

  return <ListCustomerComponent user={user} locality={locality} error={error} />
}
