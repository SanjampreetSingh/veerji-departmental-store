import { useEffect, useState } from "react"
import { Route, Redirect } from "react-router-dom"
import jwt_decode from "jwt-decode"

import AdminLayout from "./AdminLayout"

export default function AdminRouter({ component: Component, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  let token = localStorage?.getItem("refresh_token")

  useEffect(() => {
    if (token) {
      let tokenExpiration = jwt_decode(token)?.exp
      let dateNow = new Date()

      if (tokenExpiration < dateNow.getTime() / 1000) {
        setIsAuthenticated(false)
      } else {
        setIsAuthenticated(true)
      }
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const type = jwt_decode(token)?.type
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          type === 1 ? (
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
