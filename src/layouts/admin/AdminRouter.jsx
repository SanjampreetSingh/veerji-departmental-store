import { Route, Redirect } from "react-router-dom"
import jwt_decode from "jwt-decode"

import AdminLayout from "./AdminLayout"

export default function AdminRouter({ component: Component, ...rest }) {
  const token = localStorage?.getItem("access_token")
  let decoded = null
  if (token !== null) {
    decoded = jwt_decode(token)
  }

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          decoded?.type === 1 ? (
            <AdminLayout>
              <Component {...props} />
            </AdminLayout>
          ) : (
            <Redirect to="/" />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}
