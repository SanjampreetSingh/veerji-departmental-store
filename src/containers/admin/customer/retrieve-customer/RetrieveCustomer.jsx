import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import RetrieveCustomerComponent from "../../../../components/admin/customer/retrieve-customer/RetrieveCustomerComponent"
import { getUser } from "../../../../services/services"

export default function RetrieveCustomer() {
  const [error, setError] = useState(false)
  const [user, setUser] = useState([])

  let id = window.location.href.split("/").pop()
  const history = useHistory()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    getUser(id)
      .then(res => setUser(res?.data))
      .catch(error => setError(error))
  }

  return <RetrieveCustomerComponent user={user} />
}
