import { Route } from "react-router-dom"

import LoginLayout from "./LoginLayout"

export default function LoginRouter({
  heading,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (
        <LoginLayout heading={heading}>
          <Component {...props} />
        </LoginLayout>
      )}
    />
  )
}
