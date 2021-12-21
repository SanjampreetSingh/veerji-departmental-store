import { useEffect, useState } from "react"
import { Route, Redirect } from "react-router-dom"
import jwt_decode from "jwt-decode"

import UserLayout from "./UserLayout"

export default function UserRouter({ component: Component, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  let token = localStorage?.getItem("refresh_token")
  if (token === undefined || token === null || token === "undefined") {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
  }

  useEffect(() => {
    if (token) {
      let decoded = jwt_decode(token)
      let tokenExpiration = decoded?.exp
      let type = decoded?.type
      let dateNow = new Date()

      if (tokenExpiration < dateNow.getTime() / 1000) {
        setIsAuthenticated(false)
        return
      } else if (type !== 2) {
        setIsAuthenticated(false)
        return
      } else {
        setIsAuthenticated(true)
      }
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  if (isAuthenticated === null) {
    return <></>
  }

  return (
    <>
      {isAuthenticated ? (
        <Route
          {...rest}
          render={props => (
            <UserLayout isAuthenticated={isAuthenticated}>
              <Component {...props}/>
            </UserLayout>
          )}
        />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  )
}
