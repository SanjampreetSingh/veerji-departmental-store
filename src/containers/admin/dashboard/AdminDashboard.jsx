import { useState } from "react"

import { addRecurringSale } from "../../../services/services"
import AdminDashboardComponent from "../../../components/admin/dashboard/AdminDashboardComponent"

export default function AdminDashboard() {
  const [error, setError] = useState()

  const handleAddRecurringSale = () => {
    addRecurringSale()
      .then(res => {
        if (res?.error) {
          setError(res?.error)
        }
      })
      .catch(err => {
        setError(err)
      })
  }

  return (
    <AdminDashboardComponent
      handleAddRecurringSale={handleAddRecurringSale}
      error={error}
    />
  )
}
