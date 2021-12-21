import { useState, useEffect } from "react"

import ListCustomerComponent from "../../../../components/admin/customer/list-customer/ListCustomerComponent"

import { getAllUser } from "../../../../services/services"

export default function ListCustomer() {
  const [error, setError] = useState(false)
  const [user, setUser] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
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
  return <ListCustomerComponent user={user} />
}
