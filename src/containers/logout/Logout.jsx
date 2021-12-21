import { useEffect } from "react"
import { useHistory } from "react-router-dom"

import { instance } from "../../services/ApiCall"

export default function Logout() {
  const history = useHistory()
  let token = localStorage?.getItem("refresh_token")

  useEffect(() => {
    if (token) {
      instance.post("user/logout/blacklist/", {
        refresh_token: token,
      })
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      instance.defaults.headers["Authorization"] = null
    }
    history.push("/login")
  })

  return <></>
}
