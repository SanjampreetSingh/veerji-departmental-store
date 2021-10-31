import { Route } from "react-router-dom"

import AdminLayout from "./AdminLayout"

export default function AdminRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <AdminLayout>
          <Component {...props} />
        </AdminLayout>
      )}
    />
  )
}
